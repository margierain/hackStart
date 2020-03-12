import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import { MultiStepModalProps } from './types';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Modal from './Modal';
import {
  Button,
  colors,
  LinearProgress,
  Grid,
  InputAdornment,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MaterialUiPickersDate,
} from '@material-ui/pickers';
import Alert from 'components/Alert';
import { Moment } from 'moment';
import clsx from 'clsx';
import CountryList from 'country-list';
import { useAuthContext } from 'components/auth';
import { useMutation } from 'lib/client/utils';
import {
  updateUser,
  updateUserVariables,
} from 'lib/graphql/roles/user/generated/updateUser';
import { CREATE_DEVELOPER } from 'lib/graphql/roles/user/mutations';
import {
  skilltrack_types_enum,
  candidate_stage_enum,
} from 'lib/graphql/roles/user/generated/globalTypes';

interface country {
  code: string;
  name: string;
}

interface Values {
  username: string;
  earliestStartDate: Moment | string | null;
  githubId: string;
  salary: number | string;
  timezone: string;
  country: string;
  city: string;
  experience: string;
  source: string;
  skill: skilltrack_types_enum;
  stage: candidate_stage_enum;
  noticePeriod: number | string;
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
    zIndex: 100,
    position: 'sticky',
    display: 'flex',
    bottom: 0,
    justifyContent: 'space-between',
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
    '& input': {
      marginBottom: '0.5em',
    },
    '& div': {
      marginBottom: '0.5em',
    },
    '& select': {
      marginBottom: '0.5em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },
  dateField: {
    '& + &': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  },
}));

type CandidateGettingStartedModelProps = MultiStepModalProps & {
  userId: number;
  onFinish: (args: {
    candidateId: string;
    candidateUserId: number;
    login: string;
    developerId: string;
  }) => void;
};

export function CandidateGettingStartedModal({
  open,
  onBack,
  onClose,
  userId,
  onFinish,
  className = undefined,
  ...rest
}: CandidateGettingStartedModelProps) {
  const classes = useStyles();
  const countryData = CountryList.getData();

  const CandidateForm = () => {
    const ctx = useAuthContext();
    const { issueMutation } = useMutation<updateUser, updateUserVariables>({
      ctx,
      role: 'user',
      mutation: CREATE_DEVELOPER,
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
          username: '',
          githubId: '',
          earliestStartDate: null,
          salary: 0,
          timezone: '+00:00',
          country: '',
          city: '',
          experience: '1',
          source: 'StackOverflow',
          skill: skilltrack_types_enum.client_manager,
          noticePeriod: 0,
        }}
        validate={values => {
          const errors: Partial<Values> = {};

          if (!values.username) {
            errors.username = 'Required';
          }
          if (values.username.indexOf('/') > -1 || /\s/.test(values.username)) {
            errors.username = 'Space or backslash is not allowed';
          }
          if (!values.githubId) {
            errors.githubId = 'Required';
          }
          if (!values.earliestStartDate && values.earliestStartDate === null) {
            errors.earliestStartDate = 'Required';
          }
          if (!values.salary && values.salary === null) {
            errors.salary = 'Required';
          }
          if (!values.city) {
            errors.city = 'Required';
          }
          if (!values.experience) {
            errors.experience = 'Required';
          }
          if (!values.noticePeriod && values.noticePeriod === null) {
            errors.noticePeriod = 'Required';
          }
          return errors;
        }}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          setSubmitting(true);
          try {
            if (userId) {
              const obj: updateUserVariables = {
                login: values.username,
                id: userId,
                developer: {
                  id: values.username,
                  login: values.username,
                },
                candidate: {
                  userId: userId,
                  githubId: values.githubId,
                  minAnnualSalary: values.salary,
                  city: values.city,
                  country: values.country,
                  earliestStartDate: values.earliestStartDate,
                  yearsOfExperience: parseInt(values.experience),
                  source: values.source,
                  skillTrack: skilltrack_types_enum.client_manager,
                  noticePeriod: values.noticePeriod,
                  timezone: parseInt(values.timezone),
                  agencyId: 'gitstart-community',
                },
              };
              const result = await issueMutation(obj);

              if (!result) {
                throw new Error(`Something went wrong. Try again!`);
              } else if (
                !result.insert_candidates?.returning[0] ||
                !result.insert_developers?.returning[0]
              ) {
                throw new Error(`Something went wrong. Try again!`);
              }
              await onFinish({
                login: values.username,
                candidateId: result.insert_candidates.returning[0].id,
                candidateUserId: result.insert_candidates.returning[0].userId,
                developerId: result.insert_developers.returning[0].id,
              });
            }
          } catch (error) {
            setSubmitting(false);
            setStatus({
              variant: 'error',
              message: error.message,
            });
          }
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          status,
          setStatus,
        }) => (
          <form onSubmit={handleSubmit}>
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
                name="githubId"
                type="text"
                label="GitHub Id"
                component={TextField}
              />
              <Grid item lg={4} sm={6} xs={12}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Earliest Starting Date"
                  format="MM/DD/YYYY"
                  required
                  onChange={(date: MaterialUiPickersDate) =>
                    setFieldValue('earliestStartDate', date)
                  }
                  className={classes.dateField}
                  value={values.earliestStartDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
              <Grid item className={classes.formGroup}>
                <Field
                  component={TextField}
                  fullWidth
                  name="timezone"
                  label="Preferable Work Time Zone "
                  select
                  default={values.timezone}
                  SelectProps={{ native: true }}
                  variant="outlined"
                  onChange={handleChange}
                >
                  <option value="-12:00">
                    (GMT -12:00) Eniwetok, Kwajalein
                  </option>
                  <option value="-11:00">
                    (GMT -11:00) Midway Island, Samoa
                  </option>
                  <option value="-10:00">(GMT -10:00) Hawaii</option>
                  <option value="-09:50">(GMT -9:30) Taiohae</option>
                  <option value="-09:00">(GMT -9:00) Alaska</option>
                  <option value="-08:00">
                    (GMT -8:00) Pacific Time (US &amp; Canada)
                  </option>
                  <option value="-07:00">
                    (GMT -7:00) Mountain Time (US &amp; Canada)
                  </option>
                  <option value="-06:00">
                    (GMT -6:00) Central Time (US &amp; Canada), Mexico City
                  </option>
                  <option value="-05:00">
                    (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
                  </option>
                  <option value="-04:50">(GMT -4:30) Caracas</option>
                  <option value="-04:00">
                    (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
                  </option>
                  <option value="-03:50">(GMT -3:30) Newfoundland</option>
                  <option value="-03:00">
                    (GMT -3:00) Brazil, Buenos Aires, Georgetown
                  </option>
                  <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                  <option value="-01:00">
                    (GMT -1:00) Azores, Cape Verde Islands
                  </option>
                  <option value="+00:00">
                    (GMT) Western Europe Time, London, Lisbon, Casablanca
                  </option>
                  <option value="+01:00">
                    (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
                  </option>
                  <option value="+02:00">
                    (GMT +2:00) Kaliningrad, South Africa
                  </option>
                  <option value="+03:00">
                    (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
                  </option>
                  <option value="+03:50">(GMT +3:30) Tehran</option>
                  <option value="+04:00">
                    (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
                  </option>
                  <option value="+04:50">(GMT +4:30) Kabul</option>
                  <option value="+05:00">
                    (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
                  </option>
                  <option value="+05:50">
                    (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
                  </option>
                  <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
                  <option value="+06:00">
                    (GMT +6:00) Almaty, Dhaka, Colombo
                  </option>
                  <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
                  <option value="+07:00">
                    (GMT +7:00) Bangkok, Hanoi, Jakarta
                  </option>
                  <option value="+08:00">
                    (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
                  </option>
                  <option value="+08:75">(GMT +8:45) Eucla</option>
                  <option value="+09:00">
                    (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
                  </option>
                  <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
                  <option value="+10:00">
                    (GMT +10:00) Eastern Australia, Guam, Vladivostok
                  </option>
                  <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                  <option value="+11:00">
                    (GMT +11:00) Magadan, Solomon Islands, New Caledonia
                  </option>
                  <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                  <option value="+12:00">
                    (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
                  </option>
                  <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                  <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
                  <option value="+14:00">
                    (GMT +14:00) Line Islands, Tokelau
                  </option>
                </Field>
              </Grid>
              <Field
                fullWidth
                name="salary"
                type="number"
                label="Expected Annual Salary"
                component={TextField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
              <Field
                fullWidth
                name="noticePeriod"
                type="number"
                label="Notice Period to join fulltime from existing job (if any)"
                component={TextField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Days</InputAdornment>
                  ),
                }}
              />
              <Grid item className={classes.formGroup}>
                <Field
                  component={TextField}
                  fullWidth
                  name="country"
                  label="Country"
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  onChange={handleChange}
                >
                  {countryData.map((country: country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </Field>
                <Field
                  fullWidth
                  name="city"
                  type="text"
                  label="City"
                  component={TextField}
                />
              </Grid>
              <Grid item className={classes.formGroup}>
                <Field
                  component={TextField}
                  fullWidth
                  name="experience"
                  label="Years of development experience"
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  onChange={handleChange}
                >
                  <option key="1" value={1}>
                    1-2 years
                  </option>
                  <option key="3" value={3}>
                    3-5 years
                  </option>
                  <option key="5" value={5}>
                    5+ years
                  </option>
                </Field>
              </Grid>
              <Grid item className={classes.formGroup}>
                <Field
                  component={TextField}
                  fullWidth
                  name="source"
                  label="How did you find us?"
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  onChange={handleChange}
                >
                  <option key="StackOverflow" value="StackOverflow">
                    StackOverflow
                  </option>
                  <option key="AngelList" value="AngelList">
                    AngelList
                  </option>
                  <option key="Referral" value="Referral">
                    Referral
                  </option>
                  <option key="Website" value="Website">
                    Website
                  </option>
                </Field>
              </Grid>
              <Grid item className={classes.formGroup}>
                <Field
                  component={TextField}
                  fullWidth
                  name="skill"
                  label="Preferable Skill Track"
                  select
                  default={values.skill}
                  SelectProps={{ native: true }}
                  variant="outlined"
                  onChange={handleChange}
                >
                  <option key="hacker" value="hacker">
                    Technical Architect
                  </option>
                  <option key="client_manager" value="client_manager">
                    Product Ownership
                  </option>
                  <option key="tech_lead" value="tech_lead">
                    Management
                  </option>
                </Field>
              </Grid>
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
      heading="Create Candidate Profile"
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <CandidateForm></CandidateForm>
      </div>
    </Modal>
  );
}
