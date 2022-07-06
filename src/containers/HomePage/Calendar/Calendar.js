import React, { useRef, useState, useEffect } from "react";

import HourLabels from "../../../components/HourLabels";
import DayCalendar from "./DayCalendar";
import WeekCalendar from "./WeekCalendar";
import CalendarLabel from "./CalendarLabel";

import { DAY_VIEW, WEEK_VIEW } from "../../../components/utils/constants";

// convert date to a list of days in the week
const dateToWeek = (date) => {
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(new Date(date.getTime() + i * 24 * 60 * 60 * 1000));
  }
  return week;
};

const Calendar = ({ allEvents, currView, date }) => {
  // Get height of entire calendar to calculate position of events
  const calendarRef = useRef(null);
  const [height, setHeight] = useState(0);
  const getCalendarHeight = () => {
    setHeight(calendarRef.current.clientHeight);
  };

  useEffect(() => {
    getCalendarHeight();
  });
  const renderCalendar = () => {
    if (currView === DAY_VIEW) {
      return (
        <DayCalendar events={allEvents} height={height} date={date} bin={10} />
      );
    }

    if (currView === WEEK_VIEW) {
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
    <>
      {currView === DAY_VIEW && (
        <div className="absolute -mt-14 ml-3 text-xl font-bold">
          {date.toLocaleDateString("en-AU", {
            weekday: "short",
            day: "numeric",
          })}
        </div>
      )}
      <div className="absolute -mt-14 right-60 text-xl font-bold">
        {date.toLocaleDateString("en-AU", {
          month: "long",
        })}
      </div>
      <div className="flex relative select-none" ref={calendarRef}>
        <HourLabels />
        {renderCalendar()}
      </div>
    </>
  );
};

export default Calendar;
