import React from 'react';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { NextPageContext } from 'next';
import { Theme } from 'template/theme';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  colors,
  IconButton,
  Tooltip,
  Avatar,
  Hidden,
} from '@material-ui/core';
import {
  fetchTaskDetails_tasks,
  fetchTaskDetails_tasks_git_branch_git_pull_requests,
} from 'lib/graphql/roles/developer/generated/fetchTaskDetails';
import { size } from 'lodash';
import { Label } from 'template/components';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import getInitials from 'template/utils/getInitials';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    padding: 0,
    marginBottom: theme.spacing(3),
  },
  inner: {},
  title: {
    padding: '20px 0',
  },
  cardSpacing: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  labelStyle: {
    '@media (max-width: 480px)': {
      paddingRight: 0,
    },
  },
  customPadding: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 0,
    '@media (max-width: 480px)': {
      padding: 5,
    },
  },
  iconStyle: {
    display: 'inline-flex',
    minWidth: 20,
    flexShrink: 0,
  },
  red: {
    height: 12,
    width: 12,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: colors.red[600],
    borderRadius: '50%',
  },
  green: {
    height: 12,
    width: 12,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: colors.green[600],
    borderRadius: '50%',
  },
  grey: {
    height: 12,
    width: 12,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: colors.grey[600],
    borderRadius: '50%',
  },
  labelPadding: {
    padding: theme.spacing(2),
  },
  statusButton: {
    padding: '10px',
    borderRadius: '4px',
    width: 100,
    fontWeight: 'bold',
  },
  avatarsContainer: {
    display: 'flex',
    paddingLeft: 20,
  },
  avatar: {
    border: `3px solid ${theme.palette.common.white}`,
    marginLeft: -20,
    '&:hover': {
      zIndex: 2,
    },
  },
  more: {
    backgroundColor: colors.grey[400],
    color: theme.palette.error.contrastText,
    fontSize: 14,
    fontWeight: theme.typography.fontWeightMedium,
  },
  openNewIconStyle: {
    fontSize: 18,
    color: '#546E7A',
  },
}));

type Props = {
  task: fetchTaskDetails_tasks;
};

enum PullRequestStatusEnum {
  needs_changes = 'needs_changes',
  in_progress = 'in_progress',
  closed = 'closed',
}

const PRView = ({ task }: Props) => {
  const classes = useStyles();

  const prStatusColor = {
    [PullRequestStatusEnum.needs_changes]: colors.red[600],
    [PullRequestStatusEnum.in_progress]: colors.green[600],
    [PullRequestStatusEnum.closed]: colors.grey[600],
  };

  const prStatusName = {
    [PullRequestStatusEnum.needs_changes]: 'NEEDS CHANGES',
    [PullRequestStatusEnum.in_progress]: 'IN PROGRESS',
    [PullRequestStatusEnum.closed]: 'CLOSED',
  };

  const returnTitleAndStatus = (
    prDetails: fetchTaskDetails_tasks_git_branch_git_pull_requests
  ) => {
    const status = prDetails.git_pull_request_state;
    let colorClass = classes.grey;
    let statusType = PullRequestStatusEnum.needs_changes;

    if (status.id === '1') {
      statusType = PullRequestStatusEnum.needs_changes;
      colorClass = classes.red;
    }
    if (status.id === '2') {
      statusType = PullRequestStatusEnum.in_progress;
      colorClass = classes.green;
    }
    if (status.id === '3') {
      statusType = PullRequestStatusEnum.closed;
      colorClass = classes.grey;
    }

    return (
      <>
        <TableCell>
          <div className={classes.iconStyle}>
            <span className={colorClass} />
          </div>
          {prDetails.title}
        </TableCell>
        <TableCell align="right">
          <Label
            className={clsx(classes.labelPadding, classes.statusButton)}
            color={prStatusColor[statusType]}
            variant="outlined"
            shape="rounded"
          >
            {prStatusName[statusType]}
          </Label>
        </TableCell>
      </>
    );
  };

  const returnUsers = (
    prDetails: fetchTaskDetails_tasks_git_branch_git_pull_requests
  ) => {
    const reviewUsers = prDetails.git_pull_request_reviewers;
    const extraCount = size(reviewUsers) > 3 ? size(reviewUsers) - 3 : 0;
    return (
      <TableCell align="right" className={classes.customPadding}>
        <div className={classes.avatarsContainer}>
          {reviewUsers.map((userData, index) => {
            if (index < 3) {
              return (
                <Tooltip key={uuid()} title="View">
                  <Avatar
                    className={classes.avatar}
                    alt={userData.accountUsername}
                  >
                    {getInitials(userData.accountUsername)}
                  </Avatar>
                </Tooltip>
              );
            }
            if (index === 3) {
              return (
                <Tooltip key={uuid()} title="View">
                  <Avatar className={clsx(classes.avatar, classes.more)}>
                    {`+${extraCount}`}
                  </Avatar>
                </Tooltip>
              );
            }
          })}
        </div>
      </TableCell>
    );
  };

  if (size(task.git_branch?.git_pull_requests) === 0) {
    return null;
  }

  return (
    <Card className={classes.content}>
      <CardHeader title="Pull Requests" />
      <Divider />
      <CardContent className={classes.cardSpacing}>
        <PerfectScrollbar>
          <Table>
            <TableBody>
              {task.git_branch?.git_pull_requests.map(pullRequestItem => (
                <TableRow key={pullRequestItem.id}>
                  {returnTitleAndStatus(pullRequestItem)}
                  <Hidden xsDown>{returnUsers(pullRequestItem)}</Hidden>
                  <TableCell className={classes.customPadding} align="left">
                    <IconButton
                      color="inherit"
                      key="openInNew"
                      onClick={() => {}}
                    >
                      <OpenInNewIcon className={classes.openNewIconStyle} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

PRView.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { task } = query;

  return { task };
};

export default PRView;
