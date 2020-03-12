import React from 'react';
import clsx from 'clsx';
import * as yup from 'yup';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import {
  fetchDevelopersClientsAndTicketDetails_developers as Developer,
  fetchDevelopersClientsAndTicketDetails_clients as Client,
} from 'lib/graphql/roles/developer/generated/fetchDevelopersClientsAndTicketDetails';
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  Typography,
} from '@material-ui/core';

interface notificationProps {
  variant: string;
  message: string;
}

export interface ticketProps {
  clientId?: string;
  code: string;
  discount?: number | null;
  createdAt?: string;
  title?: string;
  managerId: string | null;
  isInternal: boolean;
  ticketLink: string | null;
  description: string | null;
  completedAt: string | null;
  costInCredits: number | null;
}
import { TextField } from 'formik-material-ui';
import { Field, Formik, FormikProps } from 'formik';

import Alert from 'components/Alert';
import { Theme } from 'template/theme';
import RichEditor from 'components/RichEditor';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  formGroup: {
    marginBottom: theme.spacing(3),
    flexDirection: 'row',
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  fieldHint: {
    margin: theme.spacing(1, 0),
  },
  actions: {
    marginTop: theme.spacing(3),
  },
  alert: {
    marginTop: theme.spacing(3),
  },
  dateField: {
    '& + &': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));

const validationSchema = yup.object().shape({
  code: yup
    .string()
    .min(2, 'Code value is too Short!')
    .required('Required'),
  title: yup
    .string()
    .min(2, 'title should be 2 char and above!')
    .required('Required'),
  costInCredits: yup.number().min(0, 'Discount should be greater than zero'),
  managerId: yup
    .string()
    .notOneOf([''])
    .required(),
  clientId: yup
    .string()
    .notOneOf([''])
    .required(),
  discount: yup.number().when('isInternal', {
    is: true,
    then: yup
      .number()
      .oneOf([100], 'Discount should be 100 when isInternal is Checked'),
  }),
});

const CreateEditTicketForm: React.FC<{
  handleAlertClose: () => void;
  onSave: (values: ticketProps) => Promise<void>;
  ticket: ticketProps;
  developers: Developer[];
  userId: string | null | undefined;
  clients: Client[];
  className?: string;
  notification: notificationProps | null;
}> = props => {
  const {
    handleAlertClose,
    onSave,
    ticket,
    userId,
    developers = [],
    clients = [],
    className,
    notification,
  } = props;
  const classes = useStyles();

  return (
    <Formik
      enableReinitialize
      initialValues={ticket}
      validationSchema={validationSchema}
      onSubmit={onSave}
    >
      {({
        values,
        handleChange,
        setFieldValue,
        handleSubmit,
        isSubmitting,
      }: FormikProps<ticketProps>) => (
        <form onSubmit={handleSubmit}>
          <CardContent>
            {notification && (
              <Alert
                className={classes.alert}
                variant={notification.variant}
                message={notification.message}
                onClose={handleAlertClose}
              />
            )}
            {userId !== ticket.managerId && ticket.managerId && (
              <Alert
                className={classes.alert}
                variant="default"
                message="Ticket can only be updated by ticket manager"
                onClose={handleAlertClose}
              />
            )}
            <CardHeader title="About this Ticket" />
            <Grid container spacing={3} className={classes.grid}>
              <Grid item lg={4} sm={6} xs={12} className={classes.formGroup}>
                <Field
                  fullWidth
                  label="Title"
                  name="title"
                  component={TextField}
                  onChange={handleChange}
                  value={values.title}
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12} className={classes.formGroup}>
                <Field
                  component={TextField}
                  fullWidth
                  disabled={!!ticket?.code}
                  label="Code"
                  name="code"
                  value={values.code}
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12} className={classes.formGroup}>
                <Field
                  component={TextField}
                  fullWidth
                  label="Manager"
                  name="managerId"
                  disabled={
                    userId !== ticket.managerId && ticket.managerId
                      ? true
                      : false
                  }
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                >
                  <option value="" />
                  {developers.map((developer: Developer) => (
                    <option key={developer.id} value={developer.id}>
                      {`${developer.firstName} ${developer.lastName}`}
                    </option>
                  ))}
                </Field>
              </Grid>
              <Grid item lg={4} sm={6} xs={12} className={classes.formGroup}>
                <Field
                  component={TextField}
                  fullWidth
                  name="clientId"
                  label="Client"
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  onChange={handleChange}
                >
                  <option value="" />
                  {clients.map((client: Client) => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}
                </Field>
              </Grid>
              <Grid item lg={4} sm={6} xs={12} className={classes.formGroup}>
                <Field
                  fullWidth
                  label="Cost In Credits"
                  name="costInCredits"
                  component={TextField}
                  onChange={handleChange}
                  value={values.costInCredits}
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12} className={classes.formGroup}>
                <Field
                  fullWidth
                  label="Discount"
                  name="discount"
                  component={TextField}
                  value={values.discount}
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12} className={classes.formGroup}>
                <Field
                  component={TextField}
                  fullWidth
                  label="Ticket Link"
                  name="ticketLink"
                  onChange={handleChange}
                  value={values.ticketLink}
                  variant="outlined"
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12} className={classes.formGroup}>
                <FormControlLabel
                  label="Is internal"
                  control={
                    <Checkbox
                      color="primary"
                      name="isInternal"
                      defaultValue="false"
                      onChange={handleChange}
                      checked={values.isInternal || false}
                    />
                  }
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.grid}>
              <Grid item lg={4} sm={6} xs={12} className={classes.formGroup}>
                <>
                  <Typography variant="body2">CreatedAt:</Typography>
                  <Input
                    disabled
                    className={classes.dateField}
                    disableUnderline
                    value={moment(values.createdAt).format('MM/DD/YYYY')}
                  />
                </>
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Completed Date"
                  format="MM/DD/YYYY"
                  onChange={(date: MaterialUiPickersDate) =>
                    setFieldValue('completedAt', date)
                  }
                  className={classes.dateField}
                  value={values.completedAt}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </Grid>
            <Card className={clsx(classes.root, className)}>
              <CardHeader title="Description" />
              <CardContent>
                <RichEditor
                  initialValue={values.description}
                  readOnly={false}
                  className={classes.editor}
                  placeholder="Description of Ticket"
                  onChange={(val: string) => setFieldValue('description', val)}
                />
              </CardContent>
            </Card>
            <Grid className={classes.actions}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={
                  isSubmitting ||
                  (userId !== ticket.managerId && ticket.managerId
                    ? true
                    : false)
                }
              >
                SAVE
              </Button>
            </Grid>
          </CardContent>
        </form>
      )}
    </Formik>
  );
};
export default CreateEditTicketForm;
