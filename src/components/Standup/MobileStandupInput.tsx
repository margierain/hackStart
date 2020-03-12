import React, { ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, colors, TextField } from '@material-ui/core';
import { Theme } from 'template/theme/index';

import { KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Moment } from 'moment';

const useStyles = makeStyles<Theme>(theme => ({
  card: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    padding: 12,
    alignItems: 'center',
    minHeight: 60,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      marginLeft: theme.spacing(0),
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
    flexGrow: 99999,
  },
  mobileStandupInput: {
    width: '100%',
    display: 'none',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  mobileStandupInputBox: {
    width: '100%',
    minHeight: 50,
    marginBottom: theme.spacing(2),
  },

  mobileStandupInputAction: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  dateInput: {
    flexShrink: 0,
    flexBasis: '150px',
    maxHeight: 40,
    flexGrow: 99999,
  },
}));

type Props = {
  handleTextChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  standupText: string;
  hideDate: boolean;
  isNew: boolean;
  handleDateChange: (date: MaterialUiPickersDate) => void;
  selectedDate: Moment;
  disableButton: boolean;
  addNewStandup: () => void;
};
const MobileStandupInput = (props: Props) => {
  const classes = useStyles();

  const {
    handleTextChange,
    standupText,
    hideDate,
    isNew,
    disableButton,
    addNewStandup,
    selectedDate,
    handleDateChange,
  } = props;

  return (
    <>
      {isNew && (
        <div className={classes.mobileStandupInput}>
          <Card className={classes.card}>
            <TextField
              id="standard-textarea"
              multiline
              className={classes.mobileStandupInputBox}
              placeholder="Input standup"
              inputProps={{ 'aria-label': 'Input standup' }}
              onChange={handleTextChange}
              value={standupText}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Card>
          <div className={classes.mobileStandupInputAction}>
            {!hideDate && (
              <KeyboardDatePicker
                className={classes.dateInput}
                margin="none"
                disableToolbar
                variant="inline"
                id="date-picker-inline"
                format="MM/DD/YYYY"
                value={selectedDate}
                onChange={handleDateChange}
                autoOk
                disablePast
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
            <Button
              disabled={disableButton}
              className={classes.addStandupButton}
              variant="contained"
              onClick={() => addNewStandup()}
            >
              ADD STANDUP
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileStandupInput;
