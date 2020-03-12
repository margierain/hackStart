import React, { useState, useRef, ChangeEvent } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { FormikProps, Field } from 'formik';
import {
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  Button,
  Grid,
  Select,
} from '@material-ui/core';

import { TextField } from 'formik-material-ui';

import RichEditor from 'components/RichEditor';
import InputLabel from '@material-ui/core/InputLabel';
import { Theme } from 'template/theme';
import {
  fetchClientTechnologiesTicketsReposStatusTasks_clients as Clients,
  fetchClientTechnologiesTicketsReposStatusTasks_client_repositories as ClientRepositories,
  fetchClientTechnologiesTicketsReposStatusTasks_tickets as Tickets,
  fetchClientTechnologiesTicketsReposStatusTasks_tasks_type as TaskType,
  fetchClientTechnologiesTicketsReposStatusTasks_developers as Developers,
  fetchClientTechnologiesTicketsReposStatusTasks_technologies as TaskTechnologies,
} from 'lib/graphql/roles/developer/generated/fetchClientTechnologiesTicketsReposStatusTasks';
import { fetchClientTechnologiesTicketsReposStatusTasks_tasks_status as TaskStatus } from 'lib/graphql/roles/developer/generated/fetchClientTechnologiesTicketsReposStatusTasks';
import { CustomFormikProps } from 'lib/types';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  alert: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
  },
  Select: {
    flexGrow: 0.4,
    marginRight: theme.spacing(3),
  },
  field: {
    width: '100%',
  },
  Error: {
    color: 'red',
  },
}));

type Props = {
  className: {};
  taskId?: string;
  clients: Clients[];
  technologies: TaskTechnologies[];
  tickets: Tickets[];
  client_repositories: ClientRepositories[];
  task_type: TaskType[];
  developers: Developers[];
  taskStatus: TaskStatus[];
  formik: FormikProps<CustomFormikProps>;
};
export const CreateEditTaskForm = (props: Props) => {
  const {
    className,
    formik,
    clients,
    technologies,
    tickets,
    client_repositories,
    task_type,
    developers,
    taskStatus,
    ...rest
  } = props;
  const classes = useStyles();
  const inputLabel = useRef(null);
  const [repos, setRepos] = useState<ClientRepositories[]>(client_repositories);
  const [ticketCodes, setTicketCodes] = useState<Tickets[]>(tickets);

  const updateRepoAndTicket = (
    event: ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    client_repositories: ClientRepositories[],
    tickets: Tickets[]
  ) => {
    event.preventDefault();
    const client = event.target.value;
    const filteredRepos = client_repositories.filter(
      r => r.clientId === client
    );
    const filteredTicketCodes = tickets.filter(t => t.clientId === client);
    setRepos(filteredRepos);
    setTicketCodes(filteredTicketCodes);
  };
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader />
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field
                label="Title"
                className={classes.field}
                component={TextField}
                onChange={formik.handleChange}
                name="title"
                value={formik.values.title}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                select
                SelectProps={{ native: true }}
                value={formik.values.type}
                label="Type"
                name="type"
                component={TextField}
                onChange={formik.handleChange}
                className={classes.field}
                variant="outlined"
              >
                <option value="" />
                {task_type.map(t => (
                  <option value={t.type}>{t.type}</option>
                ))}
              </Field>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field
                select
                SelectProps={{ native: true }}
                value={formik.values.developerId}
                label="Developer"
                name="developerId"
                component={TextField}
                onChange={formik.handleChange}
                className={classes.field}
                variant="outlined"
              >
                <option value="" />
                {developers.map(d => (
                  <option value={d.id}>{d.id}</option>
                ))}
              </Field>
            </Grid>
            <Grid item xs={6}>
              <Field
                select
                SelectProps={{ native: true }}
                value={formik.values.managerId}
                label="Manager"
                name="managerId"
                component={TextField}
                onChange={formik.handleChange}
                className={classes.field}
                variant="outlined"
              >
                <option value="" />
                {developers.map(d => (
                  <option value={d.id}>{d.id}</option>
                ))}
              </Field>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field
                className={classes.field}
                label="costInUSD"
                value={formik.values.costInUSD}
                name="costInUSD"
                component={TextField}
                variant="outlined"
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.field}>
                <InputLabel ref={inputLabel}>Client</InputLabel>
                <Select
                  native
                  value={formik.values.clientId}
                  name="clientId"
                  onChange={(
                    event: React.ChangeEvent<{
                      name?: string | undefined;
                      value: unknown;
                    }>
                  ) => {
                    formik.setFieldValue('clientId', event.target.value);

                    updateRepoAndTicket(event, client_repositories, tickets);
                  }}
                >
                  <option value="" />
                  {clients.map(c => (
                    <option value={c.id}>{c.name}</option>
                  ))}
                </Select>
                {formik.errors.clientId && (
                  <div className={classes.Error}>
                    {' '}
                    {formik.errors.clientId}{' '}
                  </div>
                )}
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field
                select
                SelectProps={{ native: true }}
                value={formik.values.task_technologies}
                label="Technologies"
                name="task_technologies"
                component={TextField}
                onChange={formik.handleChange}
                className={classes.field}
                variant="outlined"
              >
                <option value="" />
                {technologies.map(t => (
                  <option value={t.id}>{t.name}</option>
                ))}
              </Field>
            </Grid>
            <Grid item xs={6}>
              <Field
                select
                SelectProps={{ native: true }}
                value={formik.values.ticketCode}
                label="Ticket Code"
                name="ticketCode"
                component={TextField}
                onChange={formik.handleChange}
                className={classes.field}
                variant="outlined"
              >
                <option value="" />
                {ticketCodes.map(t => (
                  <option value={t.code}>{t.code}</option>
                ))}
              </Field>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field
                className={classes.field}
                label="Branch Name"
                value={formik.values.branchName}
                name="branchName"
                component={TextField}
                variant="outlined"
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                className={classes.field}
                label="PR Link"
                component={TextField}
                onChange={formik.handleChange}
                name="prLink"
                value={formik.values.prLink}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field
                select
                SelectProps={{ native: true }}
                value={formik.values.clientRepositoryId}
                label="Repo URL"
                name="clientRepositoryId"
                component={TextField}
                onChange={formik.handleChange}
                className={classes.field}
                variant="outlined"
              >
                <option value="" />
                {repos.map(t => (
                  <option value={t.id}>{t.clientRepoUrl}</option>
                ))}
              </Field>
            </Grid>
            <Grid item xs={6}>
              <Field
                select
                SelectProps={{ native: true }}
                value={formik.values.reviewerId}
                label="Reviewer"
                name="reviewerId"
                component={TextField}
                onChange={formik.handleChange}
                className={classes.field}
                variant="outlined"
              >
                <option value="" />
                {developers.map(d => (
                  <option value={d.id}>{d.id}</option>
                ))}
              </Field>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formik.values.isBillable || false}
                    name="isBillable"
                    value={formik.values.isBillable}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
                label="is Billable"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                select
                SelectProps={{ native: true }}
                value={formik.values.status}
                label="Status"
                name="status"
                component={TextField}
                onChange={formik.handleChange}
                className={classes.field}
                variant="outlined"
              >
                <option value="" />
                {taskStatus.map(t => (
                  <option value={t.type}>{t.type}</option>
                ))}
              </Field>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <RichEditor
                initialValue={formik.values.description}
                className={classes.fields}
                placeholder="Description"
                onChange={(v: string) => formik.setFieldValue('description', v)}
                readOnly={false}
              />
              {formik.errors.description && (
                <div className={classes.Error}>{formik.errors.description}</div>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            color="primary"
            size="small"
            variant="contained"
            className={classes.button}
          >
            Save
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
