<<<<<<< HEAD
import EventBox from "../../components/EventBox";
import RowBlocks from "../../components/RowBlocks";
=======
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
>>>>>>> develop

const DayCalendar = ({events, height}) => {
  return (
<<<<<<< HEAD
    <div css={{flexGrow: 100}} id="dayCalendar">
      <RowBlocks />
      {events.map((event, index) => (
        <EventBox key={index} event={event} maxHeight={height} />
=======
    <div
      style={{ flexGrow: 100, border: "0.5px solid grey" }}
      ref={columnEl}
    >
      <RowBlocks width={width} />
      {dayEvents.map((event, index) => (
        <EventBox key={index} event={event} maxHeight={height} width={width} />
>>>>>>> develop
      ))}
    </div>
  );
};

export default DayCalendar;
