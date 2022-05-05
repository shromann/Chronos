import React, { useRef, useState, useEffect } from 'react';

import Container from './Container';
import Column from './Column';
import HourLabels from '../../components/HourLabels';
import DayCalendar from './DayCalendar';
import WeekCalendar from './WeekCalendar';

const Calendar = ({ allEvents }) => {
  // Get height of entire calendar to calculate position of events
  const calendarRef = useRef();
  const [height, setHeight] = useState(0);
  const getCalendarHeight = () => {
    setHeight(calendarRef.current.clientHeight);
  };

  useEffect(() => {
    getCalendarHeight();
  });

  return (
    <Container>
      <Column ref={calendarRef} >
        <HourLabels />
        <WeekCalendar events={allEvents} height={height} />
      </Column>
    </Container>
  )
};

export default Calendar;