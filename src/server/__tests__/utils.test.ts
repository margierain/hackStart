import moment from 'moment';

import {
  stringify,
  enumerateDaysBetweenDates,
  enumerateWeeks,
  getValidHolidays,
  groupUserHolidaysByWeek,
} from 'server/utils';
import { INITIAL_START_DATE } from 'lib/constants';

describe('Stringify function', () => {
  it('should stringify uri params', () => {
    const uriParams = {
      offset: 10,
      limit: 5,
    };
    expect(stringify(uriParams)).toBe('offset=10&limit=5');
  });

  it('should stringify uri params and return string type', () => {
    const uriParams = {
      offset: 10,
      limit: 5,
    };
    expect(typeof stringify(uriParams)).toBe('string');
  });

  it('should test encode url param with special character', () => {
    const uriParams = {
      offset: '1=0',
      limit: 5,
    };
    expect(stringify(uriParams)).toBe('offset=1%3D0&limit=5');
  });
});

describe('enumerateDaysBetweenDates function', () => {
  const startDate = moment('2019-07-01');
  const endDate = moment('2019-07-03');

  it('should enumerate and list all days between the two dates', () => {
    const expectedResult = ['2019-07-01', '2019-07-02', '2019-07-03'];
    expect(enumerateDaysBetweenDates(startDate, endDate)).toEqual(
      expectedResult
    );
  });

  it('should return empty array if start date is greater than end date', () => {
    expect(enumerateDaysBetweenDates(endDate, startDate)).toEqual([]);
  });
});

describe('enumerateWeeks function', () => {
  it(`should return the start date as the initial 
    start date as the first date`, () => {
    expect(enumerateWeeks()[0]['start']).toEqual(INITIAL_START_DATE);
  });

  it('should return data type of array', () => {
    expect(Array.isArray(enumerateWeeks())).toBe(true);
  });

  it('should return the proper start and end date', () => {
    const endDate = '2019-07-08';
    expect(enumerateWeeks()[0]).toEqual({
      start: INITIAL_START_DATE,
      end: endDate,
    });
  });
});

describe('getValidHolidays function', () => {
  const holiday = {
    developerId: '1',
    userId: 23,
    startDate: '2019-07-01',
    endDate: '2019-07-04',
  };
  const noHoliday = { ...holiday, startDate: '2019-07-09' };
  const weekend = {
    ...holiday,
    startDate: '2019-07-13',
    endDate: '2019-07-14',
  };
  const beforeStartDay = { ...holiday, startDate: '2019-06-13' };

  it('should get all valid holiday days', () => {
    expect(getValidHolidays(holiday)).toEqual([
      '2019-07-01',
      '2019-07-02',
      '2019-07-03',
      '2019-07-04',
    ]);
  });

  it('should get valid holidays icluding the last day of the holiday', () => {
    expect(getValidHolidays(holiday)[3]).toEqual('2019-07-04');
  });

  it('should return empty array if start date is greater than end date', () => {
    expect(getValidHolidays(noHoliday)).toEqual([]);
  });

  it('should return empty array if days fall on weekends', () => {
    expect(getValidHolidays(weekend)).toEqual([]);
  });

  it(`should return days on and after INITIAL_START_DATE only
      if passed start date that is before INITIAL_START_DATE`, () => {
    expect(getValidHolidays(beforeStartDay)).toEqual([
      '2019-07-01',
      '2019-07-02',
      '2019-07-03',
      '2019-07-04',
    ]);
  });
});

describe('groupDeveloperHolidaysByWeek function', () => {
  const holidays = [
    {
      developerId: 'xyz',
      userId: 23,
      startDate: '2019-10-29',
      endDate: '2019-11-01',
    },
  ];
  const noholidays = [
    {
      developerId: 'xyz',
      userId: 23,
      startDate: '2019-11-29',
      endDate: '2019-11-01',
    },
  ];
  const multipleHolidays = [
    {
      developerId: 'xyz',
      userId: 23,
      startDate: '2019-10-30',
      endDate: '2019-11-01',
    },
    {
      developerId: 'xyz',
      userId: 23,
      startDate: '2019-08-30',
      endDate: '2019-09-01',
    },
  ];
  const multipleNoHolidays = [
    {
      developerId: 'xyz',
      userId: 23,
      startDate: moment().format('YYYY-MM-DD'),
      endDate: '2019-11-01',
    },
    {
      developerId: 'xyzl',
      userId: 25,
      startDate: moment().format('YYYY-MM-DD'),
      endDate: '2019-11-01',
    },
  ];

  it('should get all the holiday days by week for the developer', () => {
    expect(groupUserHolidaysByWeek('xyz', holidays)).toEqual({
      '17': ['2019-10-29', '2019-10-30', '2019-10-31', '2019-11-01'],
    });
  });

  it('should return empty object if startDate is greater than endDate', () => {
    expect(groupUserHolidaysByWeek('xyz', noholidays)).toEqual({});
  });

  it('should return multiple holidays for consecutive days off', async () => {
    const response = await groupUserHolidaysByWeek('xyz', multipleHolidays);
    expect(response).toEqual({
      '17': ['2019-10-30', '2019-10-31', '2019-11-01'],
      '8': ['2019-08-30'],
    });
  });

  it('should not return data for startDate that is greater than today', () => {
    expect(groupUserHolidaysByWeek('xyz', multipleNoHolidays)).toEqual({});
  });
});
