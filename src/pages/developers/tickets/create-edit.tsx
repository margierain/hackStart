import React, { useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import { NextPageContext } from 'next';

import Error500 from 'template/views/Error500';
import Page from 'components/Page';
import { Theme } from 'template/theme';
import { useAuth } from 'components/auth';
import { Dashboard } from 'components/layouts/Dashboard';

import CreateEditTicketForm, {
  ticketProps,
} from 'components/forms/createEditTicketForm';
import {
  upsertTicket,
  upsertTicketVariables,
} from 'lib/graphql/roles/developer/generated/upsertTicket';
import {
  tickets_constraint,
  tickets_update_column,
} from 'lib/graphql/roles/developer/generated/globalTypes';
import {
  fetchDevelopersClientsAndTicketDetails,
  fetchDevelopersClientsAndTicketDetailsVariables,
} from 'lib/graphql/roles/developer/generated/fetchDevelopersClientsAndTicketDetails';
import { useQuery } from 'lib/client/utils';
import { useMutation } from 'lib/client/utils';
import { FETCH_DEVELOPERS_CLIENTS_AND_TICKET_DETAILS } from 'lib/graphql/roles/developer/queries';
import { UPSERT_TICKET } from 'lib/graphql/roles/developer/mutations';

type Props = {
  className?: string;
  ticketId?: string;
};
interface notificationProps {
  variant: string;
  message: string;
}

let initialValue: ticketProps = {
  code: '',
  description: null,
  title: '',
  clientId: '',
  managerId: '',
  costInCredits: 0,
  completedAt: null,
  ticketLink: '',
  createdAt: new Date().toJSON(),
  isInternal: false,
  discount: 0,
};

const Ticket = ({ ticketId, className }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [
    data,
    setData,
  ] = useState<fetchDevelopersClientsAndTicketDetails | null>(null);
  const [notification, setNotification] = useState<notificationProps | null>(
    null
  );
  const classes = useStyles();
  const ctx = useAuth('developer', true);
  const router = useRouter();

  useQuery<
    fetchDevelopersClientsAndTicketDetails,
    fetchDevelopersClientsAndTicketDetailsVariables
  >({
    ctx,
    role: 'developer',
    query: FETCH_DEVELOPERS_CLIENTS_AND_TICKET_DETAILS,
    variables: {
      ticketId: ticketId ? +ticketId : 0,
    },
    setData: data => setData(data),
    setError: error => setError(error),
    setLoading: val => setLoading(val),
  });

  const { issueMutation } = useMutation<upsertTicket, upsertTicketVariables>({
    ctx,
    role: 'developer',
    mutation: UPSERT_TICKET,
    setError: error => setError(error),
    defaultVariables: {
      ticket: [],
      onConflict: {
        constraint: tickets_constraint.UQ_c6e20a830c0f8b571abd331b775,
        update_columns: [],
      },
    },
  });

  if (error) {
    return (
      <Dashboard loading={false}>
        <Error500 error={error} />
      </Dashboard>
    );
  }

  if (!data || !data.developers.length) {
    return (
      <Dashboard loading={loading}>
        <Page className={classes.root}> </Page>
      </Dashboard>
    );
  }

  const handleAlertClose = () => setNotification(null);

  const onSave = async (values: ticketProps) => {
    try {
      const result = await issueMutation({
        ticket: [values],
        onConflict: {
          constraint: tickets_constraint.UQ_c6e20a830c0f8b571abd331b775,
          update_columns: [
            tickets_update_column.code,
            tickets_update_column.title,
            tickets_update_column.discount,
            tickets_update_column.clientId,
            tickets_update_column.managerId,
            tickets_update_column.isInternal,
            tickets_update_column.ticketLink,
            tickets_update_column.completedAt,
            tickets_update_column.description,
            tickets_update_column.costInCredits,
          ],
        },
      });

      if (!result) {
        setNotification({
          variant: 'error',
          message: 'Something went wrong. Try again!',
        });
      } else {
        if (result.insert_tickets?.returning[0]) {
          setNotification({
            variant: 'success',
            message: ticketId
              ? 'Ticket Updated successfully'
              : 'Ticket Created successfully',
          });
          setTimeout(() => {
            router.push(
              `/developers/tickets/${result.insert_tickets?.returning[0]?.code}/overview`
            );
          }, 3000);
        } else {
          setNotification({
            variant: 'error',
            message: 'Ticket can only be updated by ticket manager',
          });
        }
      }
    } catch (error) {
      setNotification({
        variant: 'error',
        message: error.message,
      });
    }
  };

  const { clients, developers, tickets } = data;
  let ticket: ticketProps = tickets[0];
  if (ticket) {
    ticket = {
      code: ticket['code'],
      description: ticket['description'],
      title: ticket['title'],
      clientId: ticket['clientId'],
      managerId: ticket['managerId'],
      costInCredits: ticket['costInCredits'],
      completedAt: ticket['completedAt'],
      ticketLink: ticket['ticketLink'],
      isInternal: ticket['isInternal'],
      discount: ticket['discount'],
      createdAt: ticket['createdAt'],
    };
  }

  return (
    <Dashboard loading={loading}>
      <Page>
        <Card className={clsx(classes.root, className)}>
          <CreateEditTicketForm
            ticket={ticket || initialValue}
            onSave={onSave}
            developers={developers}
            clients={clients}
            userId={ctx.user?.developerId}
            className={className}
            notification={notification}
            handleAlertClose={handleAlertClose}
          />
        </Card>
      </Page>
    </Dashboard>
  );
};

Ticket.getInitialProps = (ctx: NextPageContext) => {
  const {
    query: { ticketId },
  } = ctx;
  return { ticketId };
};

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  actions: {
    marginTop: theme.spacing(3),
  },
  alert: {
    marginTop: theme.spacing(3),
  },
}));

export default Ticket;
