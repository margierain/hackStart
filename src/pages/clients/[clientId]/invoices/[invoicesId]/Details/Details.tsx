import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  colors,
  Box,
  Hidden,
  Link,
} from '@material-ui/core';
import { Theme } from 'template/theme';
import RouterLink from 'template/utils/link';
import {
  fetchClientInvoicesAndBalances_client_invoices_with_balance as ClientInvoiceAndBalances,
  fetchClientInvoicesAndBalances_client_invoices_with_balance_tickets,
} from 'lib/graphql/roles/client/generated/fetchClientInvoicesAndBalances';
import {
  getTicketCreditCost,
  renderInvoiceStatusAndColor,
  incoporateDollarSign,
} from 'lib/client/utils';
import Label from 'template/components/Label';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  content: {
    padding: theme.spacing(6),
  },
  marginTable: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  dates: {
    padding: theme.spacing(2),
    backgroundColor: colors.grey[100],
  },
  labelPadding: {
    padding: theme.spacing(2),
  },
  bold: {
    fontWeight: 'bold',
  },
  marginBottom: {
    marginBottom: theme.spacing(1),
  },
  paddingTop: {
    paddingTop: theme.spacing(2),
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  nowrap: {
    whiteSpace: 'nowrap',
  },
  statusButton: {
    padding: '10px',
    borderRadius: '6px',
    width: '58%',
    fontWeight: 'bold',
  },
  tableHeadColor: {
    backgroundColor: colors.grey[300],
  },
}));

type Props = {
  className?: string;
  invoice: ClientInvoiceAndBalances;
};

const getTicketCostInCreditsWithDiscount = (
  ticket: fetchClientInvoicesAndBalances_client_invoices_with_balance_tickets,
  classes: Record<string, string>
) => {
  let ticketCreditWithDiscount = getTicketCreditCost({
    costInCredits: ticket.costInCredits,
    discount: ticket.discount,
  });
  if (ticket.discount === 0 || ticket.costInCredits === 0) {
    return ticketCreditWithDiscount;
  } else {
    return (
      <Grid alignItems="center" container justify="center">
        <Typography className={classes.strikeThrough}>
          {ticket.costInCredits}
        </Typography>{' '}
        ➡ {ticketCreditWithDiscount}
      </Grid>
    );
  }
};

const Details: React.FC<Props> = props => {
  const { invoice, className = undefined, ...rest } = props;
  const classes = useStyles();
  const invoiceStatus = renderInvoiceStatusAndColor({
    currrent_paid_balance_in_usd: +(invoice.currrent_paid_balance_in_usd || 0),
    previous_balance_in_usd: +(invoice.previous_balance_in_usd || 0),
    dueDate: invoice.dueAt,
    costInUSD: invoice.costInUSD,
  });

  const ticketsCostInCredits = invoice.tickets
    .map(ticket => {
      return +getTicketCreditCost(ticket);
    })
    .reduce((a, b) => a + b, 0);

  const gitStartDevelopmentLeftOverInCredits =
    (invoice.costInCredits || 0) -
    (+(invoice.previous_balance_in_credits || 0) -
      +(invoice.previous_consumed_balance_in_credits || 0)) -
    ticketsCostInCredits;

  const leftOverCredits =
    +(invoice.previous_balance_in_credits || 0) -
    +(invoice.previous_consumed_balance_in_credits || 0);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <Grid container justify="space-between">
          <Box display={{ xs: 'none', sm: 'block' }}>
            <Grid container>
              <img
                alt="Brand"
                src="/images/logos/gitstart-logo-blue.svg"
                height="40"
              />
            </Grid>
          </Box>
          <Box
            display={{ xs: 'block', sm: 'none' }}
            width="100%"
            alignItems="center"
          >
            <Grid
              xs={12}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <img
                alt="Brand"
                src="/images/logos/gitstart-logo-blue.svg"
                height="40"
              />
            </Grid>
          </Box>
        </Grid>
        <Grid container justify="space-between">
          <Grid>
            <Grid item className={classes.paddingTop}>
              <Typography variant="h5">www.gitstart.com</Typography>
            </Grid>
            <Grid item>
              <Typography>
                340 S Lemon Ave <br />
                Walnut, CA, 91789 <br />
                USA
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <Grid
              item
              color={colors.grey[600]}
              className={clsx(classes.marginBottom)}
            >
              <Typography align="left" component="h3" variant="h1">
                <Label
                  className={clsx(classes.labelPadding, classes.statusButton)}
                  color={invoiceStatus.color}
                  variant="outlined"
                  shape="rounded"
                >
                  {invoiceStatus.status}
                </Label>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Email: billing@gitstart.com <br />
                Tel: (+1) 628 666 7041 <br />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={clsx(classes.marginTable, classes.dates)}
          container
          justify="space-between"
        >
          <Grid item>
            <Typography component="h4" gutterBottom variant="overline">
              Due Date
            </Typography>
            <Typography>{moment().format('DD MMM YYYY')}</Typography>
          </Grid>
          <Grid item>
            <Hidden only={['xs']}>
              <Typography component="h4" gutterBottom variant="overline">
                Issued At
              </Typography>
              <Typography>
                {moment(invoice.createdAt || undefined).format('DD MMM YYYY')}
              </Typography>
            </Hidden>
          </Grid>
          <Grid item>
            <Typography component="h4" gutterBottom variant="overline">
              Reference
            </Typography>
            <Typography>INV-{invoice.id}</Typography>
          </Grid>
        </Grid>
        <Table className={clsx(classes.marginTable)}>
          <TableHead className={classes.tableHeadColor}>
            <TableRow
              color="black"
              className={clsx(classes.bold, classes.nowrap)}
            >
              <TableCell align="center">Ticket Code</TableCell>
              <Hidden only={['xs']}>
                <TableCell>Ticket Details</TableCell>
              </Hidden>
              <TableCell align="center">Cost In Credits</TableCell>
              <TableCell align="center">Cost In USD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leftOverCredits !== 0 ? (
              <Hidden only={['xs']}>
                <TableRow>
                  <TableCell />
                  <TableCell>
                    Starting Credit Balance (from previous invoice)
                  </TableCell>
                  <TableCell align="center">{leftOverCredits}</TableCell>
                  <TableCell align="center">
                    {incoporateDollarSign(
                      ((invoice.costInUSD || 0) /
                        (invoice.costInCredits || 0)) *
                        leftOverCredits
                    )}
                  </TableCell>
                </TableRow>
              </Hidden>
            ) : null}
            {invoice.tickets.map(ticket => (
              <TableRow key={ticket.id}>
                <TableCell align="center">
                  <Link
                    color="inherit"
                    component={RouterLink}
                    href="/clients/[clientId]/tickets/[ticketCode]"
                    as={`/clients/${invoice.clientId}/tickets/${ticket.code}`}
                    variant="h6"
                  >
                    {ticket.code}
                  </Link>
                </TableCell>
                <Hidden only={['xs']}>
                  <TableCell>{ticket.title}</TableCell>
                </Hidden>
                <TableCell align="center">
                  {getTicketCostInCreditsWithDiscount(ticket, classes)}
                </TableCell>
                <TableCell align="center">
                  {incoporateDollarSign(
                    Math.floor(
                      ((invoice.costInUSD || 0) /
                        (invoice.costInCredits || 0)) *
                        getTicketCreditCost({
                          costInCredits: ticket.costInCredits,
                          discount: ticket.discount,
                        })
                    )
                  )}
                </TableCell>
              </TableRow>
            ))}
            {gitStartDevelopmentLeftOverInCredits !== 0 ? (
              <Hidden only={['xs']}>
                <TableRow>
                  <TableCell />
                  <TableCell>
                    Finished Credit Balance (adjusted into next inovice)
                  </TableCell>
                  <TableCell align="center">
                    {gitStartDevelopmentLeftOverInCredits}
                  </TableCell>
                  <TableCell align="center">
                    {incoporateDollarSign(
                      ((invoice.costInUSD || 0) /
                        (invoice.costInCredits || 0)) *
                        gitStartDevelopmentLeftOverInCredits
                    )}
                  </TableCell>
                </TableRow>
              </Hidden>
            ) : null}
            <TableRow>
              <TableCell />
              <Hidden only={['xs']}>
                <TableCell />
              </Hidden>
              <TableCell align="center" color="black" className={classes.bold}>
                Total: {invoice.costInCredits} Credits
              </TableCell>
              <TableCell align="center" color="black" className={classes.bold}>
                Total: {invoice.costInUSD} USD
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Details;
