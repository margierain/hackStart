import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Theme } from 'template/theme';

import TaskDetails from './TaskDetails';
import Participants from './Participants';
import {
  fetchTaskDetails_tasks,
  fetchTaskDetails_tasks_developerByDeveloperid,
  fetchTaskDetails_tasks_developerByManagerid,
  fetchTaskDetails_tasks_developerByReviewerid,
} from 'lib/graphql/roles/developer/generated/fetchTaskDetails';

import Brief from 'template/views/ProjectDetails/Overview/Brief';

import { TicketPropsType } from 'lib/types';
// import { TicketPropsType } from 'lib/types';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  deliverables: {
    marginTop: theme.spacing(3),
  },
  members: {
    marginTop: theme.spacing(3),
  },
}));

type ParticipantsMap = {
  key?: string;
};

type ParticipantType =
  | fetchTaskDetails_tasks_developerByDeveloperid
  | fetchTaskDetails_tasks_developerByManagerid
  | fetchTaskDetails_tasks_developerByReviewerid
  | null;

const getParticipants = (tasks: fetchTaskDetails_tasks[]) => {
  return Object.values(
    tasks.reduce<ParticipantsMap>(
      (acc: ParticipantsMap, task: fetchTaskDetails_tasks) => {
        const {
          developerByDeveloperid,
          developerByManagerid,
          developerByReviewerid,
        } = task;

        const developer =
          developerByDeveloperid &&
          getParticipantByType(
            developerByDeveloperid.id,
            acc,
            developerByDeveloperid,
            'Developer'
          );
        const manager =
          developerByManagerid &&
          getParticipantByType(
            developerByManagerid.id,
            acc,
            developerByManagerid,
            'Manager'
          );
        const reviewer =
          developerByReviewerid &&
          getParticipantByType(
            developerByReviewerid.id,
            acc,
            developerByReviewerid,
            'Reviewer'
          );

        return { ...acc, ...developer, ...manager, ...reviewer };
      },
      {}
    )
  );
};

const getParticipantByType = (
  key: string,
  prev: any,
  participant: ParticipantType,
  participantType: string
) => {
  return key in prev
    ? {
        [key]: {
          ...participant,
          participantType: `${prev[key].participantType} & ${participantType}`,
        },
      }
    : { [key]: { ...participant, participantType } };
};

const Details: React.FC<TicketPropsType> = (props: TicketPropsType) => {
  const classes = useStyles();
  const { ticket } = props;
  const { tasks } = ticket;

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item lg={8} xl={9} xs={12}>
        <Brief brief={ticket.description || ''} isHTML />
      </Grid>
      <Grid item lg={4} xl={3} xs={12}>
        {tasks && tasks.length ? (
          <TaskDetails tasks={tasks} />
        ) : (
          <h4>No task yet</h4>
        )}
        {tasks && <Participants participants={getParticipants(tasks)} />}
      </Grid>
    </Grid>
  );
};

export default Details;
