import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import { Theme } from 'template/theme';
import getInitials from 'template/utils/getInitials';
import { fetchTaskDetails_tasks } from 'lib/graphql/roles/developer/generated/fetchTaskDetails';

const useStyles = makeStyles<Theme>(theme => ({
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
  list: {
    padding: 0,
  },
  listItem: {
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between',
  },
  technology: {
    color: '#3f51b5',
  },
}));

type Props = {
  task: fetchTaskDetails_tasks;
};

const Holder: React.FC<Props> = props => {
  const { task } = props;

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root)}>
      {task && task.developerByDeveloperid && (
        <CardHeader
          avatar={
            <Avatar
              alt="Author"
              className={classes.avatar}
              // src={ticket.author.avatar}
            >
              {getInitials(task.developerByDeveloperid?.firstName || '')}
            </Avatar>
          }
          className={classes.header}
          disableTypography
          subheader={
            <Typography>
              {task.developerByDeveloperid?.firstName || ''}{' '}
              {task.developerByDeveloperid?.lastName || ''}
            </Typography>
          }
          title={
            <Typography display="block" variant="overline">
              Assigned Developer
            </Typography>
          }
        />
      )}
      <CardContent className={classes.content}>
        <List className={classes.list}>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">ETA</Typography>
            <Typography variant="h6">
              {task.completedAt
                ? moment(task.completedAt).format('DD MMM YYYY')
                : 'N/A'}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">Cost</Typography>
            <Typography variant="h6">
              {task.costInUSD ? `$${task.costInUSD}` : 'N/A'}
            </Typography>
          </ListItem>
          {task.developerByManagerid && (
            <ListItem className={classes.listItem} disableGutters divider>
              <Typography variant="subtitle2">Managed By</Typography>
              {task && (
                <Typography variant="h6">
                  {task.developerByManagerid?.firstName || ''}{' '}
                  {task.developerByManagerid?.lastName || ''}
                </Typography>
              )}
            </ListItem>
          )}
          <ListItem className={classes.listItem}>
            <Typography variant="subtitle2">Last Update</Typography>
            <Typography variant="h6">
              {task.updatedAt
                ? moment(task.updatedAt).format('DD MMM YYYY')
                : 'N/A'}
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default Holder;
