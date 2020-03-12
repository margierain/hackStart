import React from 'react';
import _ from 'lodash';
import Router from 'next/router';

import TicketFilter from 'components/TicketFilter/index';
import { TicketFilterMultiSelectType, TicketStatus } from 'lib/types';

const getSelects = (
  repo: Array<string>,
  status: TicketStatus[]
): TicketFilterMultiSelectType[] => [
  {
    label: 'Status',
    name: 'status',
    options: status.map(({ status }) => {
      return status;
    }),
  },
  {
    label: 'Repository',
    name: 'repo',
    options: repo,
  },
];

type Props = {
  filterHandler: Function;
  repos: string[];
  ticketStatus: TicketStatus[];
};

type ChipsType = {
  [key: string]: string | string[];
};

const Filter: React.FC<Props> = (props: Props) => {
  const { filterHandler, repos, ticketStatus } = props;

  const changeUrl = (searchParams: ChipsType) => {
    const { pathname } = window.location;
    if (Object.keys(searchParams).length)
      Router.push(
        Router.pathname,
        `${pathname}?search=${JSON.stringify(searchParams)}`,
        { shallow: true }
      );
    else Router.push(Router.pathname, pathname, { shallow: true });
  };
  const getFilterFromUrl = () => {
    if (!window) return;
    const urlParams = new URLSearchParams(window.location.search);

    const filterParam = _.attempt(JSON.parse, urlParams.get('search'));

    return filterParam instanceof Error ? null : filterParam;
  };

  const onFilter = (value: ChipsType) => {
    const data = Object.entries(value).reduce(
      (acc, [filterKey, filterValue]) => {
        if (!filterValue || (Array.isArray(filterValue) && !filterValue.length))
          return acc;
        if (!Array.isArray(filterValue)) filterValue = [filterValue];

        return { ...acc, [filterKey]: filterValue };
      },
      {}
    );
    changeUrl(data);
    filterHandler(data);
  };

  return (
    <>
      {repos && (
        <TicketFilter
          selects={getSelects(repos, ticketStatus)}
          onFilter={onFilter}
          getInitFilter={getFilterFromUrl}
        />
      )}
    </>
  );
};

export default Filter;
