import React from 'react';
import styled from '@emotion/styled';

import { CALENDAR_WIDTH } from '../../components/utils/constants';

const HoursGap = styled.div`
  width: 60px;
  padding-right: 1em;
`;

const DateString = styled.h2`
  font-size: 1em;
  flex-grow: 100;
`;

const CalendarLabel = () => {
  const options = { weekday: 'short', day: 'numeric'};
  
  const day1 = new Intl.DateTimeFormat('en-us', options).format(new Date(2022, 3, 11));
  const day2 = new Intl.DateTimeFormat('en-us', options).format(new Date(2022, 3, 12));
  const day3 = new Intl.DateTimeFormat('en-us', options).format(new Date(2022, 3, 13));
  const day4 = new Intl.DateTimeFormat('en-us', options).format(new Date(2022, 3, 14));
  const day5 = new Intl.DateTimeFormat('en-us', options).format(new Date(2022, 3, 15));
  const day6 = new Intl.DateTimeFormat('en-us', options).format(new Date(2022, 3, 16));
  const day7 = new Intl.DateTimeFormat('en-us', options).format(new Date(2022, 3, 17));

  return (
    <>
      <HoursGap></HoursGap>
      <DateString>{day1}</DateString>
      <DateString>{day2}</DateString>
      <DateString>{day3}</DateString>
      <DateString>{day4}</DateString>
      <DateString>{day5}</DateString>
      <DateString>{day6}</DateString>
      <DateString>{day7}</DateString>
    </>
  )
}

export default CalendarLabel;