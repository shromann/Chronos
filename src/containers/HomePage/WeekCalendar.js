import React from 'react';
import DayCalendar from './DayCalendar';

const WeekCalendar = ({ events, height }) => {

  const day1 = new Date(2022, 3, 11);
  const day2 = new Date(2022, 3, 12);
  const day3 = new Date(2022, 3, 13);
  const day4 = new Date(2022, 3, 14);
  const day5 = new Date(2022, 3, 15);
  const day6 = new Date(2022, 3, 16);
  const day7 = new Date(2022, 3, 17);

  return (
    <>
      <DayCalendar date={day2} events={events} height={height} />
      <DayCalendar date={day1} events={events} height={height} />
      <DayCalendar date={day3} events={events} height={height} />
      <DayCalendar date={day4} events={events} height={height} />
      <DayCalendar date={day5} events={events} height={height} />
      <DayCalendar date={day6} events={events} height={height} />
      <DayCalendar date={day7} events={events} height={height} />
    </>
  )
}

export default WeekCalendar;