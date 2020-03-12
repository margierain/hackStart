import React, { useState, ChangeEvent } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  Typography,
  colors,
  Box,
  TextField,
} from '@material-ui/core';
import { Theme } from 'template/theme/index';
import { fetchTasksStandupsByDeveloperId_tasks_task_daily_standups } from 'lib/graphql/roles/developer/generated/fetchTasksStandupsByDeveloperId';
import { fetchTicketsDailyStandupsByDeveloperId_tickets_ticket_daily_standups } from 'lib/graphql/roles/developer/generated/fetchTicketsDailyStandupsByDeveloperId';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { fetchClientsStandupByDeveloperId_clients_client_daily_standups } from 'lib/graphql/roles/developer/generated/fetchClientsStandupByDeveloperId';
import {
  fetchUserStandupOverview_users_user_daily_standups,
  fetchUserStandupOverview_users_unlinked_ticket_daily_standups,
  fetchUserStandupOverview_users_unlinked_task_daily_standups,
  fetchUserStandupOverview_users_unlinked_client_daily_standups,
  fetchUserStandupOverview_users_user_daily_standups_ticket_daily_standups,
  fetchUserStandupOverview_users_user_daily_standups_task_daily_standups,
  fetchUserStandupOverview_users_user_daily_standups_client_daily_standups,
} from 'lib/graphql/roles/developer/generated/fetchUserStandupOverview';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MobileStandupInput from './MobileStandupInput';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  card: {
    marginLeft: theme.spacing(0),
    flexGrow: 1,
    display: 'flex',
    padding: 12,
    alignItems: 'flex-start',
    minHeight: 60,
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      marginLeft: theme.spacing(0),
    },
  },
  date: {
    marginLeft: 'auto',
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      order: 2,
      marginTop: 0,
    },
  },
  input: {
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  avatarMobile: {
    display: 'none',
    marginRight: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      marginBottom: theme.spacing(1),
      order: 1,
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  eta: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  addStandupButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    marginLeft: 'auto',
    flexShrink: 0,
    '&:hover': {
      backgroundColor: colors.green[900],
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  standupText: {
    wordBreak: 'break-all',
    marginRight: '16px',
    whiteSpace: 'pre-line',
    [theme.breakpoints.down('sm')]: {
      fontSize: 19,
    },
  },
  mobileBreak: {},
  detailsBox: {
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      width: '100%',
      order: 3,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  etaBox: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      width: '100%',
      order: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: theme.spacing(1),
    },
  },
  dateTime: {
    [theme.breakpoints.down('sm')]: {
      order: 4,
      display: 'none',
    },
  },
  timeIcon: {
    marginRight: 4,
  },
  mobileStandupInput: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  mobileStandupInputBox: {
    width: '100%',
    minHeight: 50,
    marginBottom: theme.spacing(2),
  },

  mobileStandupInputAction: {
    display: 'flex',
    marginBottom: theme.spacing(3),
  },
  hide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  dateInput: {
    width: '70%',
  },
}));

type StandUpsTypes =
  | fetchTasksStandupsByDeveloperId_tasks_task_daily_standups
  | fetchTicketsDailyStandupsByDeveloperId_tickets_ticket_daily_standups
  | fetchClientsStandupByDeveloperId_clients_client_daily_standups
  | fetchUserStandupOverview_users_user_daily_standups
  | fetchUserStandupOverview_users_unlinked_ticket_daily_standups
  | fetchUserStandupOverview_users_unlinked_task_daily_standups
  | fetchUserStandupOverview_users_unlinked_client_daily_standups
  | fetchUserStandupOverview_users_user_daily_standups_ticket_daily_standups
  | fetchUserStandupOverview_users_user_daily_standups_task_daily_standups
  | fetchUserStandupOverview_users_user_daily_standups_client_daily_standups;

type Props = {
  isNew?: boolean;
  avatarSrc?: string | null;
  standup?: StandUpsTypes;
  addStandUp?: (
    standupText: string,
    updatedEta: string,
    identifier: number | string
  ) => void;
  eta?: string;
  previousEta?: string;
  previousStandupText?: string;
  identifier: number | string;
  hideDate?: boolean;
  prefix?: boolean;
};

const getStandupText = (standup: StandUpsTypes) => {
  if ('summary' in standup) return standup.summary;
  if ('message' in standup) return standup.message;

  return '';
};

const getStandupPrefix = (standup: StandUpsTypes) => {
  if ('client' in standup) return `${standup.client.id} - `;
  if ('task' in standup)
    return `${standup.task.ticketCode} - ${standup.task.id} - `;
  if ('ticket' in standup) return `${standup.ticket.code} - `;

  return '';
};

const getETAdiff = (futureTime: string) =>
  moment(futureTime)
    .endOf('day')
    .diff(moment().endOf('day'), 'days');

const StandupCard: React.FC<Props> = (props: Props) => {
  const {
    isNew,
    avatarSrc,
    standup,
    addStandUp,
    eta,
    identifier,
    hideDate,
    prefix,
    previousEta,
    previousStandupText,
  } = props;

  const classes = useStyles();
  const [standupText, setStandupText] = useState(previousStandupText || '');
  const [selectedDate, setSelectedDate] = React.useState(
    previousEta ? moment(previousEta) : moment().add(1, 'days')
  );
  const [disableButton, setDisableButton] = useState(true);

  const handleTextChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();

    const { value } = event.target;

    setDisableButton(!value.length);

    setStandupText(value);
  };

  const handleDateChange = (date: MaterialUiPickersDate) => {
    if (date) setSelectedDate(date);
  };

  const addNewStandup = async () => {
    if (!standupText.length) return;
    setDisableButton(true);
    if (addStandUp)
      await addStandUp(
        standupText,
        selectedDate.endOf('day').format(),
        identifier
      );

    setStandupText('');
    setSelectedDate(moment().add(1, 'days'));
    setDisableButton(false);
  };

  if (!isNew && !standup) return <></>;

  const standupETA =
    standup && 'updatedETA' in standup ? getETAdiff(standup.updatedETA) : 0;

  const avatarUrl =
    avatarSrc ||
    standup?.user.avatarUrl ||
    'https://www.gravatar.com/avatar/8388807B8315F6414F56B957235C1013';
  return (
    <div className={classes.root}>
      <MobileStandupInput
        selectedDate={selectedDate}
        isNew={!!isNew}
        hideDate={!!hideDate}
        handleDateChange={handleDateChange}
        handleTextChange={handleTextChange}
        standupText={standupText}
        addNewStandup={addNewStandup}
        disableButton={disableButton}
      />
      <Avatar alt="Author" src={avatarUrl} className={classes.avatar} />
      <Card className={`${classes.card} ${isNew && classes.hide}`}>
        {!isNew && (
          <Avatar
            alt="Author"
            src={avatarUrl}
            className={classes.avatarMobile}
          />
        )}
        {isNew ? (
          <TextField
            id="standard-textarea"
            multiline
            className={classes.input}
            placeholder="Input standup"
            inputProps={{ 'aria-label': 'Input standup' }}
            onChange={handleTextChange}
            value={standupText}
            InputProps={{
              disableUnderline: true,
            }}
          />
        ) : (
          <Box className={classes.detailsBox}>
            {!!standup && (
              <Typography variant="body1" className={classes.standupText}>
                {!prefix && <b>{getStandupPrefix(standup)}</b>}
                {getStandupText(standup)}
              </Typography>
            )}
            {!!eta && (
              <Typography variant="subtitle2" className={classes.eta}>
                {eta}
              </Typography>
            )}
          </Box>
        )}
        {standup && 'updatedETA' in standup && !!eta && (
          <div className={classes.etaBox}>
            <AccessTimeIcon className={classes.timeIcon} />
            <Typography variant="body1">
              {standupETA >= 0 ? `${standupETA} days` : 'Elapsed'}
            </Typography>
          </div>
        )}

        {!hideDate && isNew && (
          <KeyboardDatePicker
            className={classes.dateTime}
            margin="none"
            disableToolbar
            variant="inline"
            id="date-picker-inline"
            format="MM/DD/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            autoOk
            inputVariant="standard"
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            InputProps={{
              className: classes.dateInput,
              disableUnderline: true,
            }}
          />
        )}

        {isNew && (
          <Button
            disabled={disableButton}
            className={classes.addStandupButton}
            variant="contained"
            onClick={() => addNewStandup()}
          >
            ADD STANDUP
          </Button>
        )}

        {standup && !isNew && (
          <Typography className={classes.date} variant="body1">
            {moment(standup.submittedAt || standup.createdAt).fromNow()}
          </Typography>
        )}
      </Card>
    </div>
  );
};

export default StandupCard;
