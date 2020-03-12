import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  Hidden,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
} from '@material-ui/core';
import { Theme } from 'template/theme';
import { Label } from 'template/components';
import {
  fetchUserInvoice_tasks,
  fetchUserInvoice_task_work,
  fetchUserInvoice_user_invoice_balances,
  fetchUserInvoice,
} from 'lib/graphql/roles/developer/generated/fetchUserInvoice';
import { incoporateDollarSign } from 'lib/client/utils';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  inner: {
    marginTop: theme.spacing(4),
  },
  content: {
    padding: theme.spacing(4),
  },
  marginTop: {
    marginTop: theme.spacing(4),
  },
  dates: {
    padding: theme.spacing(2),
    backgroundColor: colors.grey[100],
  },
  labelPadding: {
    padding: theme.spacing(2),
  },
  statusButton: {
    padding: '10px',
    borderRadius: '6px',
    width: '58%',
    fontWeight: 'bold',
  },
  marginBottom: {
    marginBottom: theme.spacing(1),
  },
  imageStyle: {
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
  },
  linkContainer: {
    marginTop: theme.spacing(2),
  },
  totalStyle: {},
  tableHeader: {
    backgroundColor: colors.grey[300],
  },
  totalTextStyle: {},
}));

type Props = {
  className?: string;
  invoice: fetchUserInvoice;
  invoiceBalance: fetchUserInvoice_user_invoice_balances;
  developerId: string;
};

const renderInvoiceStatusAndColor = (
  currentPaidBalance: number,
  previousBalance: number,
  costInUSD: number | null | undefined
): { color: string; status: string } => {
  const currentPreviousBalaceDiff = currentPaidBalance - previousBalance;
  if (costInUSD) {
    switch (true) {
      case currentPreviousBalaceDiff >= costInUSD:
        return { color: colors.green[600], status: 'paid' };
      case currentPreviousBalaceDiff > 0 &&
        currentPreviousBalaceDiff < costInUSD:
        return { color: colors.orange[600], status: 'partially paid' };
      case currentPreviousBalaceDiff <= 0:
        return { color: colors.red[600], status: 'Needs Payment' };
    }
  }
  return { color: colors.red[600], status: 'Needs Payment' };
};

const renderInvoiceTasks = (
  taskData: fetchUserInvoice_tasks,
  invoiceId: number | null
) => {
  let cost = 0;

  const workStates = {
    Manage: false,
    Code: false,
    Review: false,
    Work: false,
  };

  if (taskData?.managerInvoiceId === invoiceId) {
    workStates.Manage = true;
    cost = (taskData?.costInUSD || 0) * 0.1;
  }
  taskData?.task_reviews.forEach(taskReviewData => {
    if (taskReviewData.managerInvoiceId === invoiceId) {
      workStates.Manage = true;
      cost = cost + (taskReviewData?.costInUSD || 0) * 0.1;
    }
    if (taskReviewData?.reviewerInvoiceId === invoiceId) {
      workStates.Review = true;
      cost = cost + (taskReviewData?.costInUSD || 0);
    }
  });
  if (taskData?.developerInvoiceId === invoiceId) {
    workStates.Code = true;
    cost = cost + (taskData?.costInUSD || 0);
  }

  let role = Object.keys(workStates)
    .filter(k => !!workStates[k as keyof typeof workStates])
    .join(' + ');

  if (!role) {
    role = 'Partially Worked';
  }

  return (
    <TableRow key={taskData?.id}>
      <Hidden xsDown>
        <TableCell align="center">
          {taskData?.ticketCode + ' - ' + taskData?.id}
        </TableCell>
      </Hidden>
      <Hidden smUp>
        <TableCell align="center">{taskData?.ticketCode}</TableCell>
      </Hidden>
      <Hidden xsDown>
        <TableCell>{'[' + role + '] ' + taskData?.title}</TableCell>
      </Hidden>
      <TableCell align="center">
        {taskData?.user_time_logs_aggregate.aggregate?.sum?.timeSpentInHours ||
          0}
      </TableCell>
      <Hidden xsDown>
        <TableCell align="center">$ {cost} USD</TableCell>
      </Hidden>
      <Hidden smUp>
        <TableCell align="center">${cost}</TableCell>
      </Hidden>
    </TableRow>
  );
};

const renderWorkInvoiceTasks = (
  taskWorkData: fetchUserInvoice_task_work,
  invoiceId: number | null
) => {
  let cost = 0;

  const workStates = {
    Manage: false,
    Code: false,
    Review: false,
    Work: false,
  };

  if (taskWorkData?.managerInvoiceId === invoiceId) {
    workStates.Manage = true;
    cost = (taskWorkData?.costInUSD || 0) * 0.1;
  }
  if (taskWorkData?.workerInvoiceId === invoiceId) {
    workStates.Work = true;
    cost = cost + (taskWorkData?.costInUSD || 0);
  }

  let role = Object.keys(workStates)
    .filter(k => !!workStates[k as keyof typeof workStates])
    .join(' + ');

  if (!role) {
    role = 'Partially Worked';
  }

  return (
    <TableRow key={taskWorkData?.id}>
      <TableCell align="center">{taskWorkData?.id}</TableCell>
      <Hidden xsDown>
        <TableCell>{role}</TableCell>
      </Hidden>
      <TableCell align="center">
        {taskWorkData?.user_time_logs_aggregate.aggregate?.sum
          ?.timeSpentInHours || 0}
      </TableCell>
      <Hidden xsDown>
        <TableCell align="center">$ {cost} USD</TableCell>
      </Hidden>
      <Hidden smUp>
        <TableCell align="center">${cost}</TableCell>
      </Hidden>
    </TableRow>
  );
};

const renderUncategorizedInvoiceTasks = (
  invoiceBalance: fetchUserInvoice_user_invoice_balances
) => {
  let unCategorizedTimeSpent =
    invoiceBalance.totalUncategorizedTimeLogged.aggregate?.sum
      ?.timeSpentInHours || 0;
  let unCategorizedEarnings =
    invoiceBalance.totalUncategorizedTimeEarning.aggregate?.sum
      ?.earningsinusd || 0;

  if (unCategorizedTimeSpent === 0) {
    return;
  }
  return (
    <TableRow key={20000}>
      <Hidden xsDown>
        <TableCell align="center">{''}</TableCell>
      </Hidden>
      <Hidden smUp>
        <TableCell align="center">{'Uncategorized Time'}</TableCell>
      </Hidden>
      <Hidden xsDown>
        <TableCell>{'Uncategorized Time'}</TableCell>
      </Hidden>
      <TableCell align="center">{unCategorizedTimeSpent}</TableCell>
      <Hidden xsDown>
        <TableCell align="center">$ {unCategorizedEarnings} USD</TableCell>
      </Hidden>
      <Hidden smUp>
        <TableCell align="center">${unCategorizedEarnings}</TableCell>
      </Hidden>
    </TableRow>
  );
};

const returnTaskEarningsTotal = (
  taskData: fetchUserInvoice,
  invoiceId: number | null
) => {
  let totalCostWRTTask = 0;

  taskData?.tasks.forEach(task => {
    let cost = 0;
    if (task?.managerInvoiceId === invoiceId) {
      cost = (task?.costInUSD || 0) * 0.1;
    }
    task?.task_reviews.forEach(taskReviewData => {
      if (taskReviewData.managerInvoiceId === invoiceId) {
        cost = cost + (taskReviewData?.costInUSD || 0) * 0.1;
      }
      if (taskReviewData?.reviewerInvoiceId === invoiceId) {
        cost = cost + (taskReviewData?.costInUSD || 0);
      }
    });
    if (task?.developerInvoiceId === invoiceId) {
      cost = cost + (task?.costInUSD || 0);
    }
    totalCostWRTTask = totalCostWRTTask + cost;
  });

  taskData?.task_work.forEach(task => {
    let cost = 0;
    if (task?.managerInvoiceId === invoiceId) {
      cost = (task?.costInUSD || 0) * 0.1;
    }
    if (task?.workerInvoiceId === invoiceId) {
      cost = cost + (task?.costInUSD || 0);
    }
    totalCostWRTTask = totalCostWRTTask + cost;
  });

  return totalCostWRTTask;
};

const returnTimeSpentTotal = (taskData?: fetchUserInvoice) => {
  let totalTimeWRTTask = 0;
  let unCategorizedTimeSpent =
    taskData?.user_invoice_balances[0].totalUncategorizedTimeLogged?.aggregate
      ?.sum?.timeSpentInHours || 0;

  taskData?.tasks.forEach(task => {
    totalTimeWRTTask =
      totalTimeWRTTask +
      (task?.user_time_logs_aggregate.aggregate?.sum?.timeSpentInHours || 0);
  });

  taskData?.task_work.forEach(task => {
    totalTimeWRTTask =
      totalTimeWRTTask +
      (task?.user_time_logs_aggregate.aggregate?.sum?.timeSpentInHours || 0);
  });

  return totalTimeWRTTask + unCategorizedTimeSpent;
};

const renderInvoiceBreakDown = (
  invoice: fetchUserInvoice,
  invoiceBalance: fetchUserInvoice_user_invoice_balances,
  developerId?: string
) => {
  console.log(developerId);
  const classes = useStyles();

  return (
    <TableBody>
      {invoice.tasks.map(taskData =>
        renderInvoiceTasks(taskData, invoiceBalance.id)
      )}
      {invoice.task_work.map(taskWorkData =>
        renderWorkInvoiceTasks(taskWorkData, invoiceBalance.id)
      )}
      {renderUncategorizedInvoiceTasks(invoiceBalance)}
      <TableRow key={10000}>
        <TableCell>{''}</TableCell>
        <Hidden xsDown>
          <TableCell align="center">
            <Typography variant="h6" className={classes.marginBottom}>
              Total Time Earnings
            </Typography>
            <Hidden xsDown>
              <Typography variant="h6">
                {'$' +
                  (invoiceBalance.totalTimeEarning.aggregate?.sum
                    ?.earningsinusd || 0) +
                  ' USD'}
              </Typography>
            </Hidden>
            <Hidden smUp>
              <Typography variant="h6">
                {'$' +
                  (invoiceBalance.totalTimeEarning.aggregate?.sum
                    ?.earningsinusd || 0)}
              </Typography>
            </Hidden>
          </TableCell>
        </Hidden>
        <TableCell align="center">
          <Typography variant="h6" className={classes.marginBottom}>
            Total Time Spent
          </Typography>
          <Typography variant="h6">
            <Container>{returnTimeSpentTotal(invoice)}</Container>
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography variant="h6" className={classes.marginBottom}>
            Total Task Earnings
          </Typography>
          <Hidden xsDown>
            <Typography variant="h6">
              {'$' +
                returnTaskEarningsTotal(invoice, invoiceBalance.id) +
                ' USD'}
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h6">
              {'$' + returnTaskEarningsTotal(invoice, invoiceBalance.id)}
            </Typography>
          </Hidden>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

const Details: React.FC<Props> = props => {
  const {
    invoice,
    invoiceBalance,
    developerId,
    className = undefined,
    ...rest
  } = props;

  const classes = useStyles();
  const invoiceStatusObj = renderInvoiceStatusAndColor(
    invoiceBalance.current_paid_balance_in_usd || 0,
    +(invoiceBalance.previous_invoiced_balance_in_usd || 0),
    invoiceBalance.costInUSD
  );
  const totalBonus = invoiceBalance.totalBonus.aggregate?.sum?.amountInUSD || 0;

  console.log('invoice details', invoice);

  return (
    <div>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent className={classes.content}>
          <Grid container justify="space-between">
            <Grid item>
              <img
                className={classes.imageStyle}
                alt="Brand"
                src="/images/logos/gitstart-logo-blue.svg"
              />
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid item className={classes.linkContainer}>
              <Typography variant="h5" className={clsx(classes.marginBottom)}>
                www.gitstart.com
              </Typography>
              <Typography>
                340 S Lemon Ave, #6544 <br />
                Walnut, CA, 91789 <br />
                USA
              </Typography>
            </Grid>
            <Grid>
              <Grid item className={clsx(classes.marginBottom)}>
                <Typography align="left" component="h3" variant="h1">
                  <Label
                    className={clsx(classes.labelPadding, classes.statusButton)}
                    color={invoiceStatusObj.color}
                    variant="outlined"
                    shape="rounded"
                  >
                    {invoiceStatusObj.status}
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
            className={clsx(classes.marginTop, classes.dates)}
            container
            justify="space-between"
          >
            <Grid item>
              <Typography component="h4" gutterBottom variant="overline">
                Earnings
              </Typography>
              <Typography>
                {invoice ? `$${invoiceBalance.costInUSD} USD` : ''}
              </Typography>
            </Grid>
            <Hidden only={['xs']}>
              <Grid item>
                <Typography component="h4" gutterBottom variant="overline">
                  Start At
                </Typography>
                <Typography>
                  {invoice
                    ? invoiceBalance.startAt
                      ? moment(invoiceBalance.startAt).format('DD MMM YYYY')
                      : moment().format('DD MMM YYYY')
                    : ''}
                </Typography>
              </Grid>
            </Hidden>
            <Hidden only={['xs']}>
              <Grid item>
                <Typography component="h4" gutterBottom variant="overline">
                  End At
                </Typography>
                <Typography>
                  {invoice
                    ? invoiceBalance.endAt
                      ? moment(invoiceBalance.endAt).format('DD MMM YYYY')
                      : moment().format('DD MMM YYYY')
                    : ''}
                </Typography>
              </Grid>
            </Hidden>
            <Grid item>
              <Typography component="h4" gutterBottom variant="overline">
                Bonus
              </Typography>
              <Typography>{incoporateDollarSign(totalBonus)}</Typography>
            </Grid>
          </Grid>
          <Grid>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow className={classes.tableHeader}>
                    <Hidden xsDown>
                      <TableCell align="center" size="small">
                        Code - Task ID
                      </TableCell>
                    </Hidden>
                    <Hidden smUp>
                      <TableCell align="center" size="small">
                        Code
                      </TableCell>
                    </Hidden>
                    <Hidden xsDown>
                      <TableCell size="small">Role + Description</TableCell>
                    </Hidden>
                    <TableCell align="center">Time Spend</TableCell>
                    <TableCell align="center" size="small">
                      Task Earnings (USD)
                    </TableCell>
                  </TableRow>
                </TableHead>
                {renderInvoiceBreakDown(invoice, invoiceBalance, developerId)}
              </Table>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
