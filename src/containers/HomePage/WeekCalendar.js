import React from 'react';
import DayCalendar from './DayCalendar';

const WeekCalendar = ({ events, height, week }) => {
  return (
    <>
      {week.map(day => (
        <DayCalendar key={day} date={day} events={events} height={height} />
      ))}
    </>
  )
}

export default WeekCalendar;