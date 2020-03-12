import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Theme } from 'template/theme';
import Page from 'components/Page';
import Paginate from 'components/Paginate';
import { Dashboard } from 'components/layouts/Dashboard';
import { useRouter } from 'next/router';
import { useAuth } from 'components/auth';
import { NextPageContext } from 'next';
import {
  fetchClientTickets,
  fetchClientTicketsVariables,
  fetchClientTickets_tickets,
} from 'lib/graphql/roles/client/generated/fetchClientTickets';
import TicketCard from 'components/TicketList/TicketCard';
import TicketFilter from './Filter';
import {
  ClienTicketStateType,
  TicketFilterType,
  FilterDataType,
  TicketStatus,
} from 'lib/types';
import {
  getClientRepository,
  getSortedTicketStatus,
  getKeywordSearchQuery,
  getStatusFilter,
  getRepoSearchFilter,
  getSortedTickets,
} from 'lib/client/filters';
import { useQuery } from 'lib/client/utils';
import { FETCH_CLIENT_TICKET_FILTER_GQL } from 'lib/graphql/roles/client/queries';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
}));

type Props = { clientId: string };

export default function ClientTicketsPage({ clientId }: Props) {
  const classes = useStyles();

  const [rowsPerPage] = useState(25);
  const [page, setPage] = useState(0);
  const [clientTicket, setClientTickets] = useState<ClienTicketStateType>({});
  const [clientRepos, setClientRepos] = useState<string[]>([]);
  const [ticketStatus, setTicketStatus] = useState<TicketStatus[]>([]);

  const ctx = useAuth('client', true);
  const router = useRouter();

  const { fetchQuery } = useQuery<
    fetchClientTickets,
    fetchClientTicketsVariables
  >({
    ctx,
    role: 'client',
    query: FETCH_CLIENT_TICKET_FILTER_GQL,
    variables: {
      clientId,
    },
    setData: ticketsData => setClientTickets({ clientTickets: ticketsData }),
    setError: fetchError => setClientTickets({ error: fetchError }),
  });

  const queryClientTicket = (filterOptions: TicketFilterType = {}) =>
    fetchQuery({
      clientId,
      ...filterOptions,
    });

  const { error, clientTickets: data } = clientTicket;

  useEffect(() => {
    if (!clientRepos.length && data)
      setClientRepos(getClientRepository(data.tickets));
  }, [clientTicket.clientTickets]);

  useEffect(() => {
    if (!ticketStatus.length && data) {
      setTicketStatus(getSortedTicketStatus(data.tickets));
    }
  }, [data]);

  const handleFilter = (filterData: FilterDataType) => {
    const filterOptions: TicketFilterType = {};
    if ('keyword' in filterData)
      filterOptions.keywordFilter = getKeywordSearchQuery(filterData.keyword);
    if ('status' in filterData)
      filterOptions.statusFilter = getStatusFilter(filterData.status);
    if ('repo' in filterData)
      filterOptions.repositoryFilter = getRepoSearchFilter(filterData.repo);

    queryClientTicket(filterOptions);
  };

  if (error) {
    return (
      <Dashboard
        selected={{
          type: 'client',
          clientId,
        }}
      >
        <Page className={classes.root}>
          <pre>{JSON.stringify(error, null, 4)}</pre>
        </Page>
      </Dashboard>
    );
  }

  if (!data || !data.tickets) {
    return (
      <Dashboard
        selected={{
          type: 'client',
          clientId,
        }}
        loading
      >
        <Page className={classes.root}> </Page>
      </Dashboard>
    );
  }

  const tickets = getSortedTickets(data.tickets);

  const handleViewTicket = (ticket: fetchClientTickets_tickets) => {
    router.push(
      '/clients/[clientId]/tickets/[ticketCode]',
      `/clients/${clientId}/tickets/${ticket.code}`
    );
  };

  return (
    <Dashboard
      selected={{
        type: 'client',
        clientId,
      }}
    >
      <Page className={classes.root}>
        <Typography component="h1" variant="h3" className={classes.title}>
          Tickets
        </Typography>
        <TicketFilter
          filterHandler={handleFilter}
          ticketStatus={ticketStatus}
          repos={clientRepos}
        />
        {/* {true && <SearchBar onFilter={handleFilter} onSearch={handleSearch} />} */}
        <div className={classes.results}>
          <Typography color="textSecondary" gutterBottom variant="body2">
            {tickets.length} Records found. Page {page + 1} of{' '}
            {Math.ceil(tickets.length / rowsPerPage)}
          </Typography>
          {tickets
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(ticket => (
              <TicketCard
                handleViewTicket={() => handleViewTicket(ticket)}
                clientId={clientId}
                key={ticket.id}
                ticket={ticket}
              />
            ))}
        </div>
        {Math.ceil(tickets.length / rowsPerPage) > 1 && (
          <div className={classes.paginate}>
            <Paginate
              initialPage={page}
              onPageChange={pageOpts => {
                setPage(+pageOpts.selected);
                window.scrollTo(0, 0);
              }}
              pageCount={Math.ceil(tickets.length / rowsPerPage)}
              pageRangeDisplayed={5}
              disableInitialCallback
            />
          </div>
        )}
      </Page>
    </Dashboard>
  );
}

ClientTicketsPage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { clientId } = query;

  return { clientId };
};
