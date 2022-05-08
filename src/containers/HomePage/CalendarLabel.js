import React from 'react';
import styled from '@emotion/styled';

const HoursGap = styled.div`
  width: 60px;
  padding-right: 1em;
`;

const DateString = styled.h2`
  font-size: 1em;
  flex-grow: 100;
`;

const CalendarLabel = ({ week }) => {
  const options = { weekday: 'short', day: 'numeric'};
  const labels = week.map(day => day = new Intl.DateTimeFormat('en-us', options).format(day));

  return (
    <>
      <HoursGap></HoursGap>
      {labels.map(day => (
        <DateString key={day}>{day}</DateString>
      ))}
    </>
  )
}

export default CalendarLabel;