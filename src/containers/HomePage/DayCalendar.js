import React, { useRef, useState, useEffect } from "react";

import EventBox from "../../components/EventBox";
import RowBlocks from "../../components/RowBlocks";
import { getEventTime } from "../../components/utils/eventTime";

const eventSchema = {
  name: "New Event",
  start_time: "",
  end_time: "",
  focus: 0,
}

const DayCalendar = ({ date, events, height }) => {
  const [dayEvents, setDayEvents] = useState(events.filter(
    (event) =>
      event.start_time.getMonth() === date.getMonth() &&
      event.start_time.getDate() === date.getDate()
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

  const [newEvent, setNewEvent] = useState(eventSchema);
  const [hasNewEvent, setHasNewEvent] = useState(false);

  const createNewEvent = e => {
    const clickPosition = e.clientY - e.target.parentNode.getBoundingClientRect().top;
    const event_start = getEventTime(clickPosition, height);
    event_start.setMonth(date.getMonth());
    event_start.setDate(date.getDate());

    const event_end = new Date(event_start);
    event_end.setMinutes(event_end.getMinutes() + 15); 

    setNewEvent({...newEvent, start_time: event_start, end_time: event_end});
    setHasNewEvent(true);
  }

  return (
    <div
      style={{ flexGrow: 100, border: "0.5px solid grey" }}
      ref={columnEl}
      onClick={createNewEvent}
    >
      <RowBlocks width={width} />
      {dayEvents.map((event, index) => (
        <EventBox key={index} event={event} maxHeight={height} width={width} />
      ))}
      {hasNewEvent ? 
        <>
          <EventBox event={newEvent} maxHeight={height} width={width} />
        </>
        : null}
    </div>
  );
};

export default DayCalendar;
