import React from "react";
import DayCalendar from "./DayCalendar";

const WeekCalendar = ({ events, height, week, bin }) => {
  return (
    <>
      {week.map((day) => (
        <DayCalendar
          key={day}
          date={day}
          events={events}
          height={height}
          bin={10}
        />
      ))}
    </>
  );
};

export default WeekCalendar;
