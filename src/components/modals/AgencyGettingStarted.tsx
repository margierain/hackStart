import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import { MultiStepModalProps } from './types';
import { useMutation } from 'lib/client/utils';
import { CREATE_AGENCY } from 'lib/graphql/roles/user/mutations';
import { useAuthContext } from 'components/auth';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import {
  Button,
  colors,
  LinearProgress,
  InputAdornment,
} from '@material-ui/core';
import Alert from 'components/Alert';
import {
  insertAgency,
  insertAgencyVariables,
} from 'lib/graphql/roles/user/generated/insertAgency';
import Modal from './Modal';

interface Values {
  companyname: string;
  companyurl: string;
  legalname: string;
  username: string;
}

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    width: 'auto',
    height: '100%',
  },
  content: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    maxWidth: 720,
    margin: '0 auto',
  },
  actions: {
    backgroundColor: colors.grey[100],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 100,
    position: 'sticky',
    bottom: 0,
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  startButton: {
    color: 'white',
    backgroundColor: '#00B440',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: colors.green[900],
    },
    '& span': {
      color: 'white',
      fontWeight: 'bold',
    },
  },
  backButton: {
    color: theme.palette.common.black,
    fontWeight: 'bold',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  formPadding: {
    padding: theme.spacing(5),
    height: '100%',
    '& input': {
      marginBottom: '0.5em',
    },
    '& div': {
      marginBottom: '0.5em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },
  form: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      height: 'auto',
    },
  },
}));

type AgencyGettingStartedModelProps = MultiStepModalProps & {
  userId: number;
  onFinish: ({
    agencyId,
    agencyUserId,
  }: {
    agencyId: string;
    agencyUserId: string;
  }) => void;
};

export function AgencyGettingStartedModal({
  open,
  onBack,
  onClose,
  userId,
  onFinish,
  className = undefined,
  ...rest
}: AgencyGettingStartedModelProps) {
  const classes = useStyles();
  const AgencyForm = () => {
    const ctx = useAuthContext();
    const { issueMutation } = useMutation<insertAgency, insertAgencyVariables>({
      ctx,
      role: 'user',
      mutation: CREATE_AGENCY,
    });
    const goToPreviousModel = () => {
      if (onBack) {
        onBack('default');
      }
    };

    return (
      <Formik
        enableReinitialize
        initialValues={{
          companyname: '',
          legalname: '',
          companyurl: '',
          username: '',
        }}
        validate={values => {
          const errors: Partial<Values> = {};
          values.companyurl = values.companyurl.toLowerCase();
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.companyname) {
            errors.companyname = 'Required';
          }
          if (!values.legalname) {
            errors.legalname = 'Required';
          }
          if (!values.companyurl) {
            errors.companyurl = 'Required';
          }
          if (
            values.companyurl.indexOf('/') > -1 ||
            /\s/.test(values.companyurl)
          ) {
            errors.companyurl = 'Space or backslash is not allowed';
          }
          if (values.username.indexOf('/') > -1 || /\s/.test(values.username)) {
            errors.username = 'Space or backslash is not allowed';
          }
          return errors;
        }}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          setSubmitting(true);
          try {
            const obj = {
              userId,
              agency: {
                name: values.companyname,
                legalName: values.legalname,
                id: values.companyurl.toLowerCase(),
                agency_users: {
                  data: [
                    {
                      id: values.username.toLowerCase(),
                      userId,
                    },
                  ],
                },
              },
            };

            const result = await issueMutation(obj);

            if (!result) {
              throw new Error(`Something went wrong. Try again!`);
            } else if (!result.insert_agencies?.returning[0]) {
              throw new Error(`Something went wrong. Try again!`);
            }
            await onFinish({
              agencyId: result.insert_agencies.returning[0].id,
              agencyUserId:
                result.insert_agencies.returning[0].agency_users[0].id,
            });
          } catch (error) {
            setStatus({
              variant: 'error',
              message: error.message,
            });
            setSubmitting(false);
          }
        }}
      >
        {({ submitForm, isSubmitting, handleSubmit, status, setStatus }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            {isSubmitting && <LinearProgress />}
            {status && (
              <Alert
                className={classes.alert}
                variant={status.variant}
                message={status.message}
                onClose={() => setStatus(null)}
              />
            )}
            <div className={classes.formPadding}>
              <Field
                fullWidth
                name="username"
                type="text"
                label="User Name"
                component={TextField}
              />
              <Field
                fullWidth
                name="companyname"
                type="text"
                label="Agency Name"
                component={TextField}
              />
              <Field
                fullWidth
                name="companyurl"
                type="text"
                label="Agency Url"
                component={TextField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      app.gitstart.com/agencies/
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                fullWidth
                name="legalname"
                type="text"
                label="Legal Name"
                component={TextField}
              />
            </div>
            <div className={classes.actions}>
              <Button
                variant="contained"
                disabled={isSubmitting}
                className={classes.backButton}
                onClick={goToPreviousModel}
              >
                Back
              </Button>
              <Button
                variant="contained"
                className={classes.startButton}
                type="submit"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    );
  };

  return (
    <Modal
      maxWidth="lg"
      onClose={onClose}
      open={open}
      heading="Create Agency Profile"
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <AgencyForm></AgencyForm>
      </div>
    </Modal>
  );
}
