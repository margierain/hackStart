import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  colors,
} from '@material-ui/core';
import { size } from 'lodash';
import { fetchTicketsByTicketCode_tickets_tasks_task_reviews } from 'lib/graphql/roles/developer/generated/fetchTicketsByTicketCode';
import getInitials from 'template/utils/getInitials';

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  actions: {
    backgroundColor: colors.grey[50],
  },
  manageButton: {
    width: '100%',
  },
}));

type Props = {
  className: string;
  taskReviews: fetchTicketsByTicketCode_tickets_tasks_task_reviews[];
};

const Reviews: React.FC<Props> = props => {
  const { taskReviews, className } = props;

  const classes = useStyles();

  if (size(taskReviews) === 0) {
    return null;
  }

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader
        className={classes.header}
        title="Reviewers"
        titleTypographyProps={{
          variant: 'overline',
        }}
      />
      <CardContent className={classes.content}>
        <List>
          {taskReviews.map((member, ind) => (
            <ListItem disableGutters key={ind}>
              <ListItemAvatar>
                <Avatar alt="Author">
                  {getInitials(member!.developer!.firstName || '')}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${member.developer!.firstName} ${
                  member.developer!.lastName
                }`}
                primaryTypographyProps={{ variant: 'h6' }}
                // secondary={member!.developer!.firstName}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Reviews;
