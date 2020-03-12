import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Typography,
  colors,
  Theme,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ClientDueInvoiceType } from 'lib/types';
import moment from 'moment';
import Modal from './Modal';
import { fetchClientInvoicesOverview_client_invoices } from 'lib/graphql/roles/client/generated/fetchClientInvoicesOverview';

const useStyles = makeStyles<Theme>(theme => ({
  content: {
    padding: theme.spacing(1),
    maxWidth: 930,
    margin: '0 auto',
  },
  actions: {
    padding: theme.spacing(2),
  },
  startButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

type InvoicesCreditCostSum = {
  credit: number;
  cost: number;
};

type Props = {
  selectedInvoiceIds?: number[];
  selectAll?: boolean;
  onCancel: () => void;
  onStartPayment: (
    credits: number,
    costInUSD: number,
    invoices: number[]
  ) => void;
  clientId: string;
  open: boolean;
  invoices: fetchClientInvoicesOverview_client_invoices[];
};

const PendingInvoicesPaymentsModal: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const {
    onCancel,
    onStartPayment,
    selectAll,
    open,
    selectedInvoiceIds,
    invoices,
    clientId,
  } = props;

  const initialCreditCostSum = {
    credit: 0,
    cost: 0,
  };

  const [selectedInvoices, setSelectedInvoices] = useState(
    selectedInvoiceIds || []
  );
  const [selectedCreditCostSum, setSelectedCreditCostSum] = useState<
    InvoicesCreditCostSum
  >(initialCreditCostSum);

  const getCreditCostSum = () => {
    return accumulateInvoiceCostCredit(
      invoices.filter(invoice => selectedInvoices.includes(invoice.id))
    );
  };

  useEffect(() => {
    if (selectAll) handleSelectAll(true);

    if (selectedInvoiceIds)
      selectedInvoiceIds.map(invoice => selectSingleInvoice(true, invoice));
  }, []);

  useEffect(() => {
    setSelectedCreditCostSum(getCreditCostSum());
  }, [selectedInvoices, invoices]);

  const accumulateInvoiceCostCredit = (
    invoicesToAccumulate: ClientDueInvoiceType[]
  ) =>
    invoicesToAccumulate.reduce<InvoicesCreditCostSum>((acc, invoice) => {
      const { costInUSD, costInCredits } = invoice;

      return {
        credit: acc.credit + costInCredits,
        cost: acc.cost + costInUSD,
      };
    }, initialCreditCostSum);

  const selectSingleInvoice = (checked: boolean, invoice: number) => {
    const newSelected = checked
      ? [
          ...selectedInvoices,
          ...(!selectedInvoices.includes(invoice) ? [invoice] : []),
        ]
      : selectedInvoices.filter(inv => inv !== invoice);

    setSelectedInvoices(newSelected);
  };

  const handleSelectAll = (checked: boolean) => {
    const selected = checked ? invoices.map(invoice => invoice.id) : [];

    setSelectedInvoices(selected);
  };

  const { cost, credit } = selectedCreditCostSum;

  const onPayment = () => onStartPayment(credit, cost, selectedInvoices);

  return (
    <Modal
      maxWidth="lg"
      onClose={onCancel}
      open={open}
      className={classes.content}
      header={
        <Typography align="center" gutterBottom variant="h3">
          PAY PENDING INVOICES
        </Typography>
      }
    >
      <div className={classes.content}>
        <Typography align="left" gutterBottom variant="h5">
          Select invoices to pay
        </Typography>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size="medium">
                    <Checkbox
                      checked={invoices.length === selectedInvoices.length}
                      color="primary"
                      indeterminate={
                        selectedInvoices.length > 0 &&
                        selectedInvoices.length < invoices.length
                      }
                      onChange={(_event, checked) => handleSelectAll(checked)}
                    />
                    Select All
                  </TableCell>
                  <TableCell size="small">INVOICE DATE</TableCell>
                  <TableCell size="small">Total Credits</TableCell>
                  <TableCell size="small">COST (USD)</TableCell>
                  <TableCell align="right" size="small"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices.map(invoice => (
                  <TableRow
                    hover
                    key={invoice.id}
                    selected={selectedInvoices.includes(invoice.id)}
                  >
                    <TableCell size="medium">
                      <Checkbox
                        checked={selectedInvoices.includes(invoice.id)}
                        color="primary"
                        onChange={(_event, checked) =>
                          selectSingleInvoice(checked, invoice.id)
                        }
                        value={true}
                      />
                    </TableCell>
                    <TableCell size="small">
                      {moment(invoice.dueAt || undefined).format('MMM YY')}
                    </TableCell>
                    <TableCell size="small">
                      {invoice.costInCredits} Credits{' '}
                    </TableCell>
                    <TableCell size="small">${invoice.costInUSD}</TableCell>
                    <TableCell align="right" size="small">
                      <Button
                        color="primary"
                        size="small"
                        href={`/clients/${clientId}/invoices/${invoice.id}`}
                        variant="outlined"
                      >
                        View Usage
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </div>
      <div className={classes.actions}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Button
              disabled={!selectedInvoices.length}
              className={classes.startButton}
              onClick={onPayment}
              variant="contained"
            >
              {selectedInvoices.length ? `PAY ${cost} USD` : 'PAY'}
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default PendingInvoicesPaymentsModal;
