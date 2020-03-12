import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
  Select,
  Grid,
} from '@material-ui/core';
import { Theme } from 'template/theme';
import { Label } from 'template/components';
import { fetchTaskDetails_tasks } from 'lib/graphql/roles/developer/generated/fetchTaskDetails';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  header: {
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
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
  tasks: fetchTaskDetails_tasks[];
};

const Holder: React.FC<Props> = props => {
  const { tasks } = props;
  const [task, selectTask] = useState(tasks[0]);
  const [selectedIndex, selectIndex] = useState(0);

  useEffect(() => {
    selectTask(tasks[selectedIndex]);
  }, [selectedIndex]);

  const handleChange = (e: any) => selectIndex(e.target.value);

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root)}>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Select native value={selectedIndex} onChange={handleChange}>
          {tasks.map((t, ind) => (
            <option key={ind} value={ind}>{`Task ${t.id}`}</option>
          ))}
        </Select>
      </Grid>
      <CardHeader
        className={classes.header}
        disableTypography
        subheader={<Typography>{task.title}</Typography>}
        title={
          <Typography display="block" variant="overline">
            Task {task.id}
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <List>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">ETA</Typography>
            <Typography variant="h6">
              {task.completedAt
                ? moment(task.completedAt).format('DD MMM YYYY')
                : 'N/A'}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">Cost in USD</Typography>
            <Typography variant="h6">
              {task.costInUSD ? `$${task.costInUSD}` : 'N/A'}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">Technologies</Typography>
            {task.task_technologies &&
              task.task_technologies.map((tech, ind) => (
                <Label key={ind} className={classes.technology}>
                  {tech.technology.name}
                </Label>
              ))}
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">PR Link</Typography>
            <Typography variant="h6">{task.prLink || 'N/A'}</Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2">Branch Name</Typography>
            <Typography variant="h6">{task.branchName || 'N/A'}</Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
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
