import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  colors,
} from '@material-ui/core';

import { fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer } from 'lib/graphql/roles/client/generated/fetchTicketDetailsByTicketCode';
import getInitials from 'template/utils/getInitials';

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
  },
  actions: {
    backgroundColor: colors.grey[50],
  },
  manageButton: {
    width: '100%',
  },
  avatar: {
    backgroundColor: colors.red[600],
  },
}));

type Props = {
  className: string;
  developers: fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer[];
};

const Members: React.FC<Props> = props => {
  const { className, developers } = props;
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader
        className={classes.header}
        title="DEVELOPERS"
        titleTypographyProps={{
          variant: 'overline',
        }}
      />
      <CardContent className={classes.content}>
        <List>
          {developers.map((developer, ind) => (
            <ListItem disableGutters key={ind}>
              <ListItemAvatar>
                <Avatar alt="Author" className={classes.avatar}>
                  {getInitials(developer!.firstName || '')}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${developer!.firstName} ${developer!.lastName}`}
                primaryTypographyProps={{ variant: 'h6' }}
                // secondary={member!.developer!.firstName}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button className={classes.manageButton}>See all developers</Button>
      </CardActions>
    </Card>
  );
};

export default Members;
