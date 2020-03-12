import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Typography,
  colors,
  Theme,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import moment from 'moment';
import { useMutation } from 'lib/client/utils';
import { useAuth } from 'components/auth';
import {
  updateClientTransactionStatus,
  updateClientTransactionStatusVariables,
} from 'lib/graphql/roles/client/generated/updateClientTransactionStatus';
import { UPDATE_CLIENT_TRANSACTION_STATUS } from 'lib/graphql/roles/client/mutations';
import { client_transaction_status_enum } from 'lib/graphql/roles/client/generated/globalTypes';
import Modal from './Modal';
import { fetchClientOverview_clients_pending_transactions } from 'lib/graphql/roles/client/generated/fetchClientOverview';

const useStyles = makeStyles<Theme>(theme => ({
  content: {
    padding: theme.spacing(1),
    maxWidth: 930,
    margin: '0 auto',
  },
  actions: {
    padding: theme.spacing(2),
    maxWidth: 700,
    margin: '0 auto',
  },
  bankTransferCancelButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: colors.red[600],
    '&:hover': {
      backgroundColor: colors.red[900],
    },
  },
  bankTransferButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

type Props = {
  onCancel: () => void;
  onSuccessful: () => void;
  clientId: string;
  open: boolean;
  transactions: fetchClientOverview_clients_pending_transactions[];
};

const PendingBankTransaction: React.FC<Props> = (props: Props) => {
  const ctx = useAuth('client', true);
  const classes = useStyles();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [disableBtn, setdisableBtn] = useState(false);

  const { onCancel, open, transactions, onSuccessful } = props;

  const [currentTransaction, setCurrentTransaction] = useState(
    transactions.shift()
  );

  const onTransactionPayment = () => {
    setCurrentTransaction(transactions.shift());
  };

  const { issueMutation } = useMutation<
    updateClientTransactionStatus,
    updateClientTransactionStatusVariables
  >({
    ctx,
    role: 'client',
    mutation: UPDATE_CLIENT_TRANSACTION_STATUS,
    setError: error => {
      setError(error);
      setdisableBtn(false);
    },
    setLoading,
    setData: () => {
      setdisableBtn(false);
      onTransactionPayment();
    },
  });

  const updateTransfer = (status: client_transaction_status_enum) => {
    if (!currentTransaction?.id) return;
    setdisableBtn(true);

    issueMutation({
      transactionId: currentTransaction.id,
      status: status,
    });
  };

  useEffect(() => {
    setdisableBtn(false);
  }, [currentTransaction, open]);

  useEffect(() => {
    setdisableBtn(false);
    if (!currentTransaction) onSuccessful();
  }, [currentTransaction]);

  const cancelTransfer = () =>
    updateTransfer(client_transaction_status_enum.cancelled);
  const transfered = () =>
    updateTransfer(client_transaction_status_enum.in_progress);

  return (
    <>
      {currentTransaction && (
        <Modal
          maxWidth="lg"
          onClose={onCancel}
          open={open}
          loading={loading}
          error={error}
          setError={setError}
          className={classes.content}
          header={
            <Typography align="center" gutterBottom variant="h3">
              Bank transfers In Progress
            </Typography>
          }
        >
          <div className={classes.content}>
            <Typography align="center" gutterBottom variant="body1">
              A bank transfer was initiated with details below. Please mark it
              as complete, or <br /> cancel the trasfer before initiating
              another payment
            </Typography>
            <PerfectScrollbar>
              <div className={classes.inner}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell size="medium">
                        Bank TRANSFER #{currentTransaction.id}
                      </TableCell>
                      <TableCell align="right" size="small"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell size="medium">Date initiated</TableCell>
                      <TableCell size="medium">
                        {moment(currentTransaction.transactedAt).format(
                          'MMM YY'
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell size="medium">Transfered Amount</TableCell>
                      <TableCell size="medium">
                        ${currentTransaction.costInUSD} USD
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell size="medium">Status</TableCell>
                      <TableCell size="medium">Pending</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </PerfectScrollbar>
          </div>
          <div className={classes.actions}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Button
                  className={classes.bankTransferCancelButton}
                  onClick={cancelTransfer}
                  variant="contained"
                  disabled={disableBtn}
                >
                  Cancel Transfer
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.bankTransferButton}
                  onClick={transfered}
                  variant="contained"
                  disabled={disableBtn}
                >
                  I HAVE INITIATED TRANSFER
                </Button>
              </Grid>
            </Grid>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PendingBankTransaction;
