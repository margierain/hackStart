import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import { useAuth } from 'components/auth';
import { Dashboard } from 'components/layouts/Dashboard';
import Page from 'components/Page';
import { CreateEditTaskForm } from 'components/CreateEditTaskForm';
import { Theme } from 'template/theme';
import Error500 from 'template/views/Error500';
import { useQuery, useMutation } from 'lib/client/utils';

import {
  tasks_constraint,
  tasks_update_column,
  task_technologies_constraint,
  task_technologies_update_column,
  tasks_type_enum,
} from 'lib/graphql/roles/developer/generated/globalTypes';
import * as Yup from 'yup';
import Alert from 'components/Alert';
import { Divider } from '@material-ui/core';
import { FETCH_CLIENTS_TECHNOLOGIES_TICKETS_REPOSITORIES_STATUS_TASKS } from 'lib/graphql/roles/developer/queries';
import { fetchClientTechnologiesTicketsReposStatusTasks } from 'lib/graphql/roles/developer/generated/fetchClientTechnologiesTicketsReposStatusTasks';
import { fetchClientTechnologiesTicketsReposStatusTasksVariables } from 'lib/graphql/roles/developer/generated/fetchClientTechnologiesTicketsReposStatusTasks';
import {
  upsertTasksVariables,
  upsertTasks,
} from 'lib/graphql/roles/developer/generated/upsertTasks';
import { UPSERT_TASKS } from 'lib/graphql/roles/developer/mutations';
import { CustomFormikProps } from 'lib/types';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3),
  },
  editor: {
    maxHeight: '300px',
    margin: '20px 0',
  },
  taskInputFields: {
    marginTop: theme.spacing(3),
  },
  alert: {
    marginTop: theme.spacing(3),
  },
}));

type Props = {
  taskId?: string;
  developerId: string;
};
function EditTask(props: Props) {
  const developerId = props.developerId;
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [notification, setNotification] = useState<{
    variant: string;
    message: string;
  } | null>(null);
  const ctx = useAuth('developer', true);
  const [error, setError] = useState<Error | null>(null);
  const classes = useStyles();

  const { taskId } = props;

  const { data } = useQuery<
    fetchClientTechnologiesTicketsReposStatusTasks,
    fetchClientTechnologiesTicketsReposStatusTasksVariables
  >({
    ctx,
    role: 'developer',
    query: FETCH_CLIENTS_TECHNOLOGIES_TICKETS_REPOSITORIES_STATUS_TASKS,
    variables: {
      taskId: Number(taskId || 0),
    },
    setLoading: val => setLoading(val),
  });

  const { issueMutation } = useMutation<upsertTasks, upsertTasksVariables>({
    ctx,
    role: 'developer',
    mutation: UPSERT_TASKS,
    setError: error => {
      setNotification({
        variant: 'error',
        message: error.message,
      });
    },
    defaultVariables: {
      tasks: [],
      onTaskConflict: {
        constraint: tasks_constraint.PK_8d12ff38fcc62aaba2cab748772,
        update_columns: [],
      },
    },
  });

  const validationSchema = Yup.object().shape({
    type: Yup.string()
      .nullable()
      .notOneOf([''])
      .required('Please Select Type'),
    costInUSD: Yup.number()
      .notOneOf([0], 'Cost must be greater then 0')
      .required('Required'),
    description: Yup.string()
      .nullable()
      .required('Required'),
    title: Yup.string().required('Required'),
    ticketCode: Yup.string()
      .nullable()
      .required('Required'),
    prLink: Yup.string()
      .matches(
        new RegExp('^(.*?(https://github.com/GitStartHQ/)?.*[^$]*)$'),
        'Invalid URL'
      )
      .nullable()
      .url('Invalid Url'),
    managerId: Yup.string()
      .nullable()
      .required('Select Manager'),
    reviewerId: Yup.string().nullable(),
    developerId: Yup.string().nullable(),
    branchName: Yup.string().required('Required'),
    clientRepositoryId: Yup.string()
      .nullable()
      .notOneOf([''])
      .required('Select Repo'),
    clientId: Yup.string()
      .nullable()
      .notOneOf([''])
      .required('Please Select Client'),
    status: Yup.string()
      .nullable()
      .notOneOf([''])
      .required('Select Status'),
  });
  if (error) {
    return (
      <Dashboard loading={false} selected={{ type: 'developer', developerId }}>
        <Error500 error={error} />
      </Dashboard>
    );
  }
  if (
    !data ||
    !data.clients.length ||
    !data.client_repositories.length ||
    !data.technologies.length ||
    !data.tickets.length ||
    !data.tasks_type.length ||
    !data.developers.length
  ) {
    return (
      <Dashboard loading selected={{ type: 'developer', developerId }}>
        <Page className={classes.root}> </Page>
      </Dashboard>
    );
  }

  const {
    clients,
    technologies,
    tickets,
    client_repositories,
    tasks_type,
    developers,
    tasks_status,
    tasks,
  } = data;

  const handleAlertClose = () => setNotification(null);

  const onSubmitHandler = async (values: CustomFormikProps) => {
    try {
      const result = await issueMutation({
        tasks: [
          {
            type: values.type as tasks_type_enum,
            description: values.description,
            title: values.title,
            clientId: values.clientId,
            ticketCode: values.ticketCode,
            branchName: values.branchName,
            clientRepositoryId: values.clientRepositoryId,
            prLink: values.prLink,
            developerId: values.developerId,
            managerId: values.managerId,
            reviewerId: values.reviewerId,
            costInUSD: Number(values.costInUSD),
            ...(taskId && {
              id: Number(taskId),
            }),
            task_technologies: {
              data: [
                {
                  technologiesId: Number(values.task_technologies),
                },
              ],
              on_conflict: {
                constraint:
                  task_technologies_constraint.PK_d093d12bdef63226744f923d35c,
                update_columns: [
                  task_technologies_update_column.technologiesId,
                ],
              },
            },
            isBillable: values.isBillable,
            status: values.status,
          },
        ],
        onTaskConflict: {
          constraint: tasks_constraint.PK_8d12ff38fcc62aaba2cab748772,
          update_columns: [
            tasks_update_column.type,
            tasks_update_column.description,
            tasks_update_column.title,
            tasks_update_column.ticketCode,
            tasks_update_column.prLink,
            tasks_update_column.costInUSD,
            tasks_update_column.clientId,
            tasks_update_column.managerId,
            tasks_update_column.reviewerId,
            tasks_update_column.developerId,
            tasks_update_column.branchName,
            tasks_update_column.clientRepositoryId,
            tasks_update_column.isBillable,
            tasks_update_column.status,
          ],
        },
      });
      console.log(result);
      if (result) {
        console.log('not found');
        setNotification({
          variant: 'success',
          message: taskId
            ? 'Ticket Updated successfully'
            : 'Ticket Created successfully',
        });
        setTimeout(() => {
          router.push('/developers/tasks/available');
        }, 1500);
      }
    } catch (exp) {
      console.log(exp);
      setError(exp);
    }
  };

  const initialValues: CustomFormikProps = {
    type: tasks[0]?.type,
    description: tasks[0]?.description,
    title: tasks[0]?.title,
    clientId: tasks[0]?.clientId,
    ticketCode: tasks[0]?.ticketCode,
    branchName: tasks[0]?.branchName,
    clientRepositoryId: tasks[0]?.clientRepositoryId,
    prLink: tasks[0]?.prLink,
    developerId: tasks[0]?.developerId,
    managerId: tasks[0]?.managerId,
    reviewerId: tasks[0]?.reviewerId,
    costInUSD: tasks[0]?.costInUSD,
    task_technologies: tasks[0]?.task_technologies[0].technologiesId,
    isBillable: false,
    status: tasks[0] && tasks[0].status,
  };

  return (
    <Dashboard loading={loading} selected={{ type: 'developer', developerId }}>
      <Page>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmitHandler}
        >
          {props => (
            <CreateEditTaskForm
              formik={props}
              developers={developers}
              task_type={tasks_type}
              clients={clients}
              technologies={technologies}
              tickets={tickets}
              client_repositories={client_repositories}
              taskId={taskId}
              taskStatus={tasks_status}
              className={classes.taskInputFields}
            />
          )}
        </Formik>
        <Divider className={classes.divider} />
        {notification && (
          <Alert
            className={classes.alert}
            variant={notification.variant}
            message={notification.message}
            onClose={handleAlertClose}
          />
        )}
      </Page>
    </Dashboard>
  );
}

EditTask.getInitialProps = (ctx: NextPageContext) => {
  const {
    query: { taskId, developerId },
  } = ctx;
  return {
    taskId: taskId as string | undefined,
    developerId: developerId as string,
  };
};

export default EditTask;
