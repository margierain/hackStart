import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, colors } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { Theme } from 'template/theme';
import { Label } from 'template/components';
import {
  tasks_status_enum as TS,
  tasks_type_enum,
} from 'lib/graphql/roles/client/generated/globalTypes';
import {
  fetchTicketDetailsByTicketCode_tickets,
  fetchTicketDetailsByTicketCode_tickets_tasks,
} from 'lib/graphql/roles/client/generated/fetchTicketDetailsByTicketCode';
import { parseTicketLink } from 'lib/utils';
// import { Application } from 'template/views/ProjectDetails/components/Header/components';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  label: {
    marginTop: theme.spacing(1),
  },
  shareButton: {
    marginRight: theme.spacing(2),
  },
  shareIcon: {
    marginRight: theme.spacing(1),
  },
  applyButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}));

const getInProgressStatus = (ticket: fetchTicketDetailsByTicketCode_tickets) =>
  ticket.tasks.filter((task: fetchTicketDetailsByTicketCode_tickets_tasks) => {
    if (
      [TS.in_progress, TS.needs_changes, TS.internal_review].indexOf(
        task.status
      ) !== -1
    ) {
      return task;
    }
  });

const getUnderReviewStatus = (ticket: fetchTicketDetailsByTicketCode_tickets) =>
  ticket.tasks.filter((task: fetchTicketDetailsByTicketCode_tickets_tasks) => {
    if ([TS.client_review].indexOf(task.status) !== -1) {
      return task;
    }
  });

const getFinishedStatus = (ticket: fetchTicketDetailsByTicketCode_tickets) =>
  ticket.tasks.filter((task: fetchTicketDetailsByTicketCode_tickets_tasks) => {
    if ([TS.finished].indexOf(task.status) !== -1) {
      return task;
    }
  });

const getTriageStatus = (ticket: fetchTicketDetailsByTicketCode_tickets) => {
  const codingTaks = ticket.tasks.filter(
    task => task.type == tasks_type_enum.code
  );
  const triageTasks = ticket.tasks.filter((task: any) => {
    if ([TS.backlog, TS.available, TS.cancelled].indexOf(task.status) !== -1) {
      return task;
    }
  });
  if (codingTaks.length === triageTasks.length) return true;
  return false;
};

const getTicketStatus = (ticket: fetchTicketDetailsByTicketCode_tickets) => {
  if (ticket.completedAt) {
    return 'COMPLETED';
  }

  if (ticket.cancelledAt) {
    return 'CANCELLED';
  }

  if (!ticket.tasks || !ticket.tasks.length) {
    return 'Under Initial Review';
  }

  if (getTriageStatus(ticket)) {
    return 'Under Initial Review';
  }

  if (getInProgressStatus(ticket).length > 0) {
    return 'IN PROGRESS';
  }

  if (getUnderReviewStatus(ticket).length === ticket.tasks.length) {
    return 'Under Review';
  }

  if (getFinishedStatus(ticket).length > 0) {
    return 'Finished';
  }

  return 'IN PROGRESS';
};

type Props = {
  ticket: fetchTicketDetailsByTicketCode_tickets;
};

const Header: React.FC<Props> = props => {
  const { ticket } = props;
  const classes = useStyles();

  const statusColors = {
    'Internal review': colors.orange[600],
    'Under Review': colors.orange[600],
    'IN PROGRESS': colors.orange[600],
    'Under Initial Review': colors.grey[600],
    Finished: colors.green[600],
    CANCELLED: colors.grey[600],
    COMPLETED: colors.green[600],
  };

  const isUrl = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  // const [openApplication, setOpenApplication] = useState(false);

  // const handleApplicationOpen = () => {
  //   setOpenApplication(true);
  // };

  // const handleApplicationClose = () => {
  //   setOpenApplication(false);
  // };

  return (
    <div className={classes.root}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            {ticket.code}
          </Typography>
          <Typography component="h1" gutterBottom variant="h3">
            {ticket.title}
          </Typography>
          <Label
            className={classes.label}
            color={statusColors[getTicketStatus(ticket)]}
            variant="outlined"
          >
            {getTicketStatus(ticket)}
          </Label>
        </Grid>
        <Grid item>
          {ticket.ticketLink && isUrl(ticket.ticketLink) && (
            <Button
              className={classes.shareButton}
              variant="contained"
              href={ticket.ticketLink}
              target="_blank"
            >
              <ShareIcon className={classes.shareIcon} />
              {parseTicketLink(ticket.ticketLink)}
            </Button>
          )}
        </Grid>
      </Grid>
      {/* <Application
        author={ticket}
        onApply={handleApplicationClose}
        onClose={handleApplicationClose}
        open={openApplication}
      /> */}
    </div>
  );
};

export default Header;
