import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Theme } from 'template/theme';
import { useRouter } from 'next/router';

import { fetchClientInvoicesAndBalances_client_invoices_with_balance as ClientInvoiceAndBalances } from 'lib/graphql/roles/client/generated/fetchClientInvoicesAndBalances';
import { getTicketCreditCost, incoporateDollarSign } from 'lib/client/utils';
import { exportToCsv } from 'lib/client/export';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  getAppIcon: {
    marginRight: theme.spacing(1),
  },
  courser: {
    cursor: 'pointer',
  },
}));

type Props = {
  className?: string;
  invoice: ClientInvoiceAndBalances;
};

const Header: React.FC<Props> = props => {
  const { invoice, className = undefined, ...rest } = props;
  const router = useRouter();
  const classes = useStyles();

  const onExportAsCSV = () => {
    const data = invoice.tickets.map(ticket => ({
      id: ticket.id,
      code: ticket.code,
      ['Cost (Credits)']: getTicketCreditCost({
        costInCredits: ticket.costInCredits,
        discount: ticket.discount,
      }),
      ['Discount (%)']: `${ticket.discount}%`,
      ['Cost (USD)']: incoporateDollarSign(
        Math.floor(
          ((invoice.costInUSD || 0) / (invoice.costInCredits || 0)) *
            getTicketCreditCost({
              costInCredits: ticket.costInCredits,
              discount: ticket.discount,
            })
        )
      ),
      ['Finished At']: ticket.completedAt,
      ['Created At']: ticket.createdAt,
      ['Original Link']: ticket.ticketLink,
      ['GitStart Link']: `/clients/${invoice.clientId}/tickets/${ticket.code}`,
    }));

    exportToCsv(data, `gitstart-invoice-${invoice.id}.csv`);

    return false;
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            <Grid className={classes.courser} onClick={() => router.back()}>
              Back
            </Grid>
          </Typography>
          <Typography component="h1" variant="h3">
            {invoice.id ? `Invoice ${invoice.id}` : ''}
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained" onClick={onExportAsCSV}>
            <GetAppIcon className={classes.getAppIcon} />
            Export As CSV
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
