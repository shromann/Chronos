import React, { useRef, useState, useEffect } from "react";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import Container from "./Container";
import Column from "./Column";
import HourLabels from "../../components/HourLabels";
import DayCalendar from "./DayCalendar";
import WeekCalendar from "./WeekCalendar";

import { DAY_VIEW, WEEK_VIEW } from "../../components/utils/constants";

// convert date to a list of days in the week
const dateToWeek = (date) => {
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(new Date(date.getTime() + i * 24 * 60 * 60 * 1000));
  }
  return week;
};

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

  const [date, setDate] = useState(new Date());

  const handlePrevDay = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)));
  };

  const handleNextDay = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)));
  };

  const renderCalendar = () => {
    if (view === DAY_VIEW) {
      return (
        <DayCalendar events={allEvents} height={height} date={date} bin={10} />
      );
    }

    if (view === WEEK_VIEW) {
      return (
        <WeekCalendar
          events={allEvents}
          height={height}
          week={dateToWeek(date)}
          bin={10}
        />
      );
    }

    return null;
  };

  return (
    <div>
      <IconButton onClick={handlePrevDay}>
        <ArrowBackIos />
      </IconButton>
      <IconButton onClick={handleNextDay}>
        <ArrowForwardIos />
      </IconButton>
      <Container>
        <Column ref={calendarRef}>
          <HourLabels />
          {renderCalendar()}
        </Column>
      </Container>
    </div>
  );
};

export default Calendar;
