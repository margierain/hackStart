import { NextApiRequest } from 'next';
import moment, { Moment } from 'moment';
import lodash, { flatten } from 'lodash';
import { isArray } from 'util';
import { HolidaysResponse } from 'lib/types';
import { DATE_FORMAT, ONE_WEEK, INITIAL_START_DATE } from 'lib/constants';
import fetch from 'node-fetch';
import initClient from 'lib/graphql/init-apollo';
import { FETCH_TIMEDOCTOR_REFRESH_TOKEN } from 'lib/graphql/roles/admin/queries';
import { UPDATE_TIMEDOCTOR_REFRESH_TOKEN } from 'lib/graphql/roles/admin/mutations';
import { TimeDoctorAuthCredentials } from 'lib/types';

import { fetchTimeDoctorRefreshToken } from 'lib/graphql/roles/admin/generated/fetchTimeDoctorRefreshToken';
import {
  updateAuthSettings,
  updateAuthSettingsVariables,
} from 'lib/graphql/roles/admin/generated/updateAuthSettings';

const TIMEDOCTOR_ACCESS_TOKEN_EXPIRATION: number = 432000;
const timeDoctorAuthDetails: TimeDoctorAuthCredentials = {
  createdAt: undefined,
  access_token: '',
};

require('dotenv').config();

const {
  TIMETASTIC_API_DOMAIN,
  TIMETASTIC_API_TOKEN,
  TIMEDOCTOR_API_URL,
  TIMEDOCTOR_CLIENT_ID,
  TIMEDOCTOR_SECRET_KEY,
  TIMEDOCTOR_COMPANY_ID,
} = process.env;

type StringMapType = {
  [key: string]: string;
};

type ParamMapType = {
  [key: string]: string | number;
};
type User = {
  id: number;
  email: string;
  [key: string]: number | string;
};

const adminMap: StringMapType = {
  'hamza@gitstart.com': 'hamza.zia',
  'rowland@gitstart.com': 'rowland.ekemezie',
  'arslan@gitstart.com': 'arslan.arshad',
};

export const stringify = (obj: ParamMapType): string => {
  return Object.keys(obj)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    })
    .join('&');
};

export const enumerateDaysBetweenDates = (
  startDate: Moment,
  endDate: Moment
) => {
  const now = startDate.clone();
  const dates = [];

  while (now.isSameOrBefore(endDate)) {
    dates.push(now.format(DATE_FORMAT));
    now.add(1, 'days');
  }
  return dates;
};

export const enumerateWeeks = () => {
  let startDate = INITIAL_START_DATE;
  let endDate = moment(new Date())
    .endOf('week')
    .format(DATE_FORMAT);

  const weeks = [];
  while (startDate < endDate) {
    const endDate = moment(startDate)
      .add(ONE_WEEK, 'days')
      .format(DATE_FORMAT);
    weeks.push({ start: startDate, end: endDate });
    startDate = endDate;
  }

  return weeks;
};

export const timetasticApiRequest = async (
  url: string,
  options = {},
  params = {}
) => {
  return fetch(`${TIMETASTIC_API_DOMAIN}${url}?${stringify(params)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TIMETASTIC_API_TOKEN}`,
    },
    ...options,
  });
};

export const fetchHolidays = async (
  startDate: string,
  endDate: string
): Promise<HolidaysResponse[]> => {
  const [holidayPromise, usersPromise] = await Promise.all([
    timetasticApiRequest('/holidays', {}, { Start: startDate, End: endDate }),
    timetasticApiRequest('/users'),
  ]);

  const [{ holidays }, users] = await Promise.all([
    holidayPromise.json(),
    usersPromise.json(),
  ]);

  const getUserEmail = (users: User[], userId: number) => {
    const user = users.find(t => t.id === userId);

    if (user) {
      return adminMap[user.email] || user.email.replace(/@gitstart.dev$/, '');
    }
  };

  return holidays.map((i: HolidaysResponse) => ({
    developerId: getUserEmail(users, i.userId),
    userId: i.userId,
    startDate: i.startDate,
    endDate: i.endDate,
  }));
};

export const getValidHolidays = (holiday: HolidaysResponse) => {
  const allHolidays = enumerateDaysBetweenDates(
    moment(holiday.startDate),
    moment(holiday.endDate)
  );

  const weekRange = enumerateWeeks();
  const holidaysInRange = allHolidays.filter(h => {
    const date = moment(new Date(h));
    const isBusinessDay = date.day() < 6 && date.day() > 0;
    const isWithinWeekRange =
      date.isSameOrAfter(INITIAL_START_DATE) &&
      date.isSameOrBefore(weekRange[weekRange.length - 1].end);

    return (
      isWithinWeekRange &&
      isBusinessDay &&
      date.isSameOrAfter(holiday.startDate) &&
      date.startOf('day').isSameOrBefore(holiday.endDate)
    );
  });

  return holidaysInRange;
};

export const groupUserHolidaysByWeek = (
  developerId: string,
  holidays: HolidaysResponse[]
) => {
  const weekRanges = enumerateWeeks();

  return lodash
    .chain(
      flatten(
        holidays
          .filter(holiday => holiday.developerId === developerId)
          .map(getValidHolidays)
      )
    )
    .groupBy((date: string) =>
      weekRanges.findIndex(
        (i: { start: string; end: string }) =>
          moment(date).isSameOrAfter(i.start) && moment(date).isBefore(i.end)
      )
    )
    .value();
};

export function initApolloClient(req: NextApiRequest) {
  const host = process.env.HASURA_GRAPHQL_ENGINE_DOMAIN as string;
  let token,
    secret = req.headers['x-hasura-admin-secret'];

  if (secret) {
    return initClient({ secret: isArray(secret) ? secret[0] : secret, host });
  }

  if (req.headers.authorization) {
    token = req.headers.authorization.replace('Bearer ', '');

    return initClient({ token, host });
  }

  return initClient({ host });
}

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

export type GraphqlClient = ReturnType<typeof initClient>;

export const getTimeDoctorRefreshtoken = async (
  client: GraphqlClient
): Promise<{
  id: number;
  value: string;
}> => {
  const { data } = await client.query<fetchTimeDoctorRefreshToken>({
    query: FETCH_TIMEDOCTOR_REFRESH_TOKEN,
  });
  return data.auth_settings[0];
};

export const getTimeDoctorAccessToken = async (client: GraphqlClient) => {
  // Improvement to avoid fetching unique access_token and refreshToken for each iteration.
  if (
    timeDoctorAuthDetails.access_token &&
    moment().diff(timeDoctorAuthDetails.createdAt, 'seconds') <
      TIMEDOCTOR_ACCESS_TOKEN_EXPIRATION
  )
    return timeDoctorAuthDetails.access_token;
  const { id, value } = await getTimeDoctorRefreshtoken(client);

  const url = `https://webapi.timedoctor.com/oauth/v2/token?client_id=${TIMEDOCTOR_CLIENT_ID}&client_secret=${TIMEDOCTOR_SECRET_KEY}&grant_type=refresh_token&refresh_token=${value}`;
  const { access_token, refresh_token } = await (await fetch(url)).json();

  // Add to cache
  timeDoctorAuthDetails['createdAt'] = moment();
  timeDoctorAuthDetails['access_token'] = access_token;

  const variables = {
    id,
    authValues: { value: refresh_token },
  };

  await client.mutate<updateAuthSettings, updateAuthSettingsVariables>({
    mutation: UPDATE_TIMEDOCTOR_REFRESH_TOKEN,
    variables,
  });

  return access_token;
};

export const timeDoctorApiRequest = async (
  client: GraphqlClient,
  url: string,
  method: string,
  options = {},
  params = {}
) => {
  const access_token = await getTimeDoctorAccessToken(client);
  if (method === 'POST' || method === 'PUT') {
    return fetch(
      `${TIMEDOCTOR_API_URL}/${TIMEDOCTOR_COMPANY_ID}${url}?access_token=${access_token}&${stringify(
        params
      )}`,
      {
        method: method,
        body: JSON.stringify(options),
      }
    );
  } else {
    return fetch(
      `${TIMEDOCTOR_API_URL}/${TIMEDOCTOR_COMPANY_ID}${url}?access_token=${access_token}&${stringify(
        params
      )}`,
      {
        method: method,
        ...options,
      }
    );
  }
};
