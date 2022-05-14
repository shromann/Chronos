import React, { useRef, useState, useEffect } from "react";

import EventBox from "../../components/EventBox";
import RowBlocks from "../../components/RowBlocks";

const DayCalendar = ({ date, events, height }) => {
  const dayEvents = events.filter(event => (
    event.start_time.getMonth() === date.getMonth() && event.start_time.getDate() === date.getDate()
  ));

  // Get the correct width for EventBox
  const columnEl = useRef(null);
  const [width, setWidth] = useState(0);
  const getColumnWidth = () => {
    setWidth(columnEl.current.clientWidth);
  };
  useEffect(() => {
    getColumnWidth();
  });

  return (
    <div
      style={{ flexGrow: 100, border: "0.5px solid grey" }}
      ref={columnEl}
    >
      <RowBlocks width={width} />
      {dayEvents.map((event, index) => (
        <EventBox key={index} event={event} maxHeight={height} width={width} />
      ))}
    </div>
  );
};

export default DayCalendar;
