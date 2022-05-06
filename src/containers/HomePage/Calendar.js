import React, { useRef, useState, useEffect } from 'react';

import Container from './Container';
import Column from './Column';
import HourLabels from '../../components/HourLabels';
import DayCalendar from './DayCalendar';
import WeekCalendar from './WeekCalendar';
import CalendarLabel from './CalendarLabel';

const Calendar = ({ allEvents }) => {
  // Get height of entire calendar to calculate position of events
  const calendarRef = useRef(null);
  const [height, setHeight] = useState(0);
  const getCalendarHeight = () => {
    setHeight(calendarRef.current.clientHeight);
  };

  useEffect(() => {
    getCalendarHeight();
  });

  return (
    <Container>
      <Column>
        <CalendarLabel />
      </Column>
      <Column ref={calendarRef} >
        <HourLabels />
        {/* <DayCalendar events={allEvents} height={height} date={new Date(2022, 3, 14)}/> */}
        <WeekCalendar events={allEvents} height={height} />
      </Column>
    </Container>
  )
};

export default Calendar;