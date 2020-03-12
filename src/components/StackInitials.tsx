import React, { memo } from 'react';
import { Theme } from 'template/theme';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import { Tooltip, Avatar } from '@material-ui/core';
import getInitials from 'template/utils/getInitials';
import { fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer } from 'lib/graphql/roles/client/generated/fetchTicketDetailsByTicketCode';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
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
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    fontSize: 14,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

type Props = {
  avatars: fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer[];
  limit?: number;
  className?: string;
};

const StackInitials: React.FC<Props> = props => {
  const { avatars, className, limit } = props;
  const defaultLimit = limit || 3;
  const classes = useStyles();
  const avatarNodes = avatars
    .slice(0, defaultLimit)
    .map(
      (
        item: fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer
      ) => (
        <Tooltip key={uuid()} title="View">
          <Avatar
            className={classes.avatar}
            alt={`${item.firstName} ${item.lastName}`}
          >
            {getInitials(item.firstName || '')}
          </Avatar>
        </Tooltip>
      )
    );

  if (avatars.length > defaultLimit) {
    avatarNodes.push(
      <Tooltip key={uuid()} title="View">
        <Avatar className={clsx(classes.avatar, classes.more)}>
          +{avatars.length - defaultLimit}
        </Avatar>
      </Tooltip>
    );
  }
  return <div className={clsx(classes.root, className)}>{avatarNodes}</div>;
};

export default memo(StackInitials);
