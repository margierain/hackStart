import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Theme } from 'template/theme';
import BlockersCard from 'components/BlockersCard';
import Holder from './Holder';
import Members from './Members';
import TicketTasks from 'components/TicketTasks';
import Alert from 'components/Alert';
import {
  fetchTicketDetailsByTicketCode_tickets,
  fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer,
  fetchTicketDetailsByTicketCode_tickets_tasks,
} from 'lib/graphql/roles/client/generated/fetchTicketDetailsByTicketCode';
import Brief from 'template/views/ProjectDetails/Overview/Brief';
import {
  tasks_status_enum as TS,
  tasks_type_enum,
} from 'lib/graphql/roles/client/generated/globalTypes';
import { useQuery } from 'lib/client/utils';
import { FETCH_TICKET_BLOCKERS_BY_TICKETID } from 'lib/graphql/roles/client/queries';
import {
  fetchTicketBlockers,
  fetchTicketBlockersVariables,
} from 'lib/graphql/roles/client/generated/fetchTicketBlockers';
import { useAuthContext } from 'components/auth';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  deliverables: {
    marginTop: theme.spacing(3),
  },
  members: {
    marginTop: theme.spacing(3),
  },
  blockCards: {
    marginTop: theme.spacing(3),
  },
  ticketTasks: {
    marginTop: theme.spacing(3),
  },
  alert: {
    marginBottom: theme.spacing(3),
  },
  brief: {
    '& p': {
      marginBottom: theme.spacing(0),
    },
  },
}));

type Props = {
  ticket: fetchTicketDetailsByTicketCode_tickets;
  brief: string;
  clientId: string;
};

const getDevelopers = (
  tasks: fetchTicketDetailsByTicketCode_tickets_tasks[]
) => {
  let developers: fetchTicketDetailsByTicketCode_tickets_tasks_task_reviews_developer[] = [];
  if (tasks.length) {
    tasks.forEach(task => {
      if (task.developerByDeveloperid) {
        developers.push(task.developerByDeveloperid);
      }
      if (task.developerByManagerid) {
        developers.push(task.developerByManagerid);
      }
      if (task.developerByReviewerid) {
        developers.push(task.developerByReviewerid);
      }
      task.task_reviews.forEach(reviews => {
        if (reviews.developer) {
          developers.push(reviews.developer);
        }
        if (reviews.developerByDeveloperid) {
          developers.push(reviews.developerByDeveloperid);
        }
      });
    });
  }
  developers = _.uniqBy(developers, o => o.githubId);
  return developers;
};

const Overview: React.FC<Props> = props => {
  const { ticket, brief, clientId } = props;
  const classes = useStyles();
  const ctx = useAuthContext();

  const developers = ticket.tasks.length > 0 ? getDevelopers(ticket.tasks) : [];
  const codingTaks = ticket.tasks.filter(
    task => task.type === tasks_type_enum.code && task.status !== TS.backlog
  );

  const getDailyStandupMessage = (): { message: string; updatedAt: string } => {
    return {
      message: ticket.ticket_daily_standups[0].message,
      updatedAt: ticket.ticket_daily_standups[0].updatedAt,
    };
  };

  const { data, error } = useQuery<
    fetchTicketBlockers,
    fetchTicketBlockersVariables
  >({
    ctx,
    role: 'client',
    query: FETCH_TICKET_BLOCKERS_BY_TICKETID,
    variables: { ticketId: ticket.id },
  });

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item lg={8} xl={9} xs={12}>
        {ticket.ticket_daily_standups.length > 0 && (
          <Alert
            className={classes.alert}
            variant="updates"
            message={getDailyStandupMessage().message}
            updatedAt={getDailyStandupMessage().updatedAt}
          />
        )}
        <Brief brief={brief} isHTML={true} className={classes.brief} />
        <BlockersCard
          clientId={clientId}
          className={classes.blockCards}
          headerText="Associated Blockers"
          error={error}
          blockers={data?.client_blockers}
        />
        {codingTaks.length > 0 && (
          <TicketTasks className={classes.ticketTasks} tasks={codingTaks} />
        )}
      </Grid>
      <Grid item lg={4} xl={3} xs={12}>
        <Holder ticket={ticket} task={ticket.tasks[0]} />
        {developers.length > 0 && (
          <Members className={classes.members} developers={developers} />
        )}
      </Grid>
    </Grid>
  );
};

export default Overview;
