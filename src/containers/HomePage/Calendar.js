import React, { useRef, useState, useEffect } from 'react';

import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';
import { IconButton } from '@mui/material';

import Container from './Container';
import Column from './Column';
import HourLabels from '../../components/HourLabels';
import DayCalendar from './DayCalendar';
import WeekCalendar from './WeekCalendar';
import CalendarLabel from './CalendarLabel';
import { DAY_VIEW, WEEK_VIEW } from '../../components/utils/constants';

const getCurrentWeek = () => {
  const curr = new Date();
  const week = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first));
    week.push(day);
  }

  return week;
}

const Calendar = ({ allEvents, view }) => {
  // Get height of entire calendar to calculate position of events
  const calendarRef = useRef(null);
  const [height, setHeight] = useState(0);
  const getCalendarHeight = () => {
    setHeight(calendarRef.current.clientHeight);
  };

  useEffect(() => {
    getCalendarHeight();
  });

  const [week, setWeek] = useState(getCurrentWeek());

  const handlePrevDay = () => {
    week.pop();
    const first = new Date(week[0]);
    const oneBefore = first.getDate() - 1;
    const date = new Date(first.setDate(oneBefore));
    setWeek([date, ...week]);
  }

  const handleNextDay = () => {
    week.shift();
    const last = new Date(week[week.length - 1]);
    const oneAfter = last.getDate() + 1;
    const date = new Date(last.setDate(oneAfter));
    setWeek([...week, date]);
  }

  const renderCalendar = () => {
    if (view === DAY_VIEW) {
      return (<DayCalendar events={allEvents} height={height} date={new Date(2022, 3, 14)}/>);
    }

    if (view === WEEK_VIEW) {
      return (<WeekCalendar events={allEvents} height={height} week={week} />);
    }

    return null;
  }

  return (
    <div>
      <IconButton onClick={handlePrevDay}><ArrowBackIos /></IconButton>
      <IconButton onClick={handleNextDay}><ArrowForwardIos /></IconButton>
    <Container>
      <Column>
        {view === WEEK_VIEW ? <CalendarLabel week={week} /> : null}
      </Column>
      <Column ref={calendarRef} >
        <HourLabels />
        {renderCalendar()}
      </Column>
    </Container>
    </div>
  )
};

export default Calendar;