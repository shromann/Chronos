import React from 'react';
import DayCalendar from './DayCalendar';

import { DAY_CALENDAR_WIDTH } from '../../components/utils/constants';


const WeekCalendar = ({ events, height }) => {
  const blockWidth = DAY_CALENDAR_WIDTH / 7;

  return (
    <>
      <DayCalendar events={events} height={height} width={blockWidth}/>
      <DayCalendar events={events} height={height} width={blockWidth}/>
      <DayCalendar events={events} height={height} width={blockWidth}/>
      <DayCalendar events={events} height={height} width={blockWidth}/>
      <DayCalendar events={events} height={height} width={blockWidth}/>
      <DayCalendar events={events} height={height} width={blockWidth}/>
      <DayCalendar events={events} height={height} width={blockWidth}/>
    </>
  )
}

export default WeekCalendar;