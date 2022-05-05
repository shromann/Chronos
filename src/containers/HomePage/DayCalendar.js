import React from "react";

import EventBox from "../../components/EventBox";
import RowBlocks from "../../components/RowBlocks";

const DayCalendar = ({ date, events, height, width }) => {
  const dayEvents = events.filter(event => (
    event.start_time.getMonth() === date.getMonth() && event.start_time.getDay() === date.getDay()
  ));

  return (
    <div
      style={{ flexGrow: 100, border: "1px solid black" }}
      id="dayCalendar"
    >
      <RowBlocks width={width} />
      {dayEvents.map((event, index) => (
        <EventBox key={index} event={event} maxHeight={height} width={width} />
      ))}
    </div>
  );
};

export default DayCalendar;
