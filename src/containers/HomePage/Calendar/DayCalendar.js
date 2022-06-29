import React, { useRef, useState, useEffect } from "react";

import EventBox from "../../../components/EventBox";
import RowBlocks from "../../../components/RowBlocks";
import { getEventTime } from "../../../components/utils/eventTime";
import NewEventForm from "./NewEventForm";
import CalendarLabel from "./CalendarLabel";

const eventSchema = {
  name: "New Event",
  start_time: "",
  end_time: "",
  focus: 0,
};

const roundToNearest = (num, nearest) => {
  return Math.round(num / nearest) * nearest;
};

const DayCalendar = ({ date, events, height, bin }) => {
  // Filter out the current day's event
  const [dayEvents, setDayEvents] = useState(
    events.filter(
      (event) =>
        event.start_time.getMonth() === date.getMonth() &&
        event.start_time.getDate() === date.getDate()
    )
  );

  // Get the correct width for EventBox
  const columnEl = useRef(null);
  const [width, setWidth] = useState(0);
  const getColumnWidth = () => {
    setWidth(columnEl.current.clientWidth);
  };
  useEffect(() => {
    getColumnWidth();
  });

  /* New event creation through dragging on calendar */
  const [newEvent, setNewEvent] = useState(eventSchema);
  const [hasNewEvent, setHasNewEvent] = useState(false);
  const [editingEvent, setEditingEvent] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const newEventEl = useRef(null);
  const [formAnchor, setFormAnchor] = useState(null);

  /* Starts creation of new event when calendar area is clicked */
  const createNewEvent = (e) => {
    if (!editingEvent) {
      // Position of mouse click
      const clickPosition =
        e.clientY - columnEl.current.getBoundingClientRect().top;
      setStartPosition(clickPosition);

      // Set event start time based on position of mouse click
      const start_time = getEventTime(clickPosition, height);
      const event_start = new Date(date);
      event_start.setHours(start_time.hour);
      event_start.setMinutes(roundToNearest(start_time.minute, bin));

      // Default event has duration of 30 minutes
      const event_end = new Date(event_start);
      event_end.setMinutes(event_end.getMinutes() + 30);

      // Update new event, display new event on screen
      setNewEvent({
        ...newEvent,
        start_time: event_start,
        end_time: event_end,
      });
      setHasNewEvent(true);
      setEditingEvent(true);
    }
  };

  /* Change end time of event during event creation dragging */
  const changeDuration = (e) => {
    if (hasNewEvent) {
      // Position of mouse click
      const mousePosition =
        e.clientY - columnEl.current.getBoundingClientRect().top;

      // console.log(startPosition, mousePosition);
      if (startPosition <= mousePosition) {
        // Update event end time
        const end_time = getEventTime(mousePosition, height);
        newEvent.end_time.setHours(end_time.hour);
        newEvent.end_time.setMinutes(roundToNearest(end_time.minute, bin));
      } else if (startPosition > mousePosition) {
        // Dragged above initial click, update event start time
        const start_time = getEventTime(mousePosition, height);
        newEvent.start_time.setHours(start_time.hour);
        newEvent.start_time.setMinutes(roundToNearest(start_time.minute, bin));
      }

      setNewEvent({ ...newEvent });
    }
  };

  /* Handles when mouse is lifted */
  const addEvent = () => {
    if (hasNewEvent) {
      setFormAnchor(newEventEl.current);
      dayEvents.push(newEvent);
      setDayEvents([...dayEvents]);
      // setNewEvent(eventSchema);
      setHasNewEvent(false);
    }
  };

  const handleCloseForm = () => {
    setFormAnchor(null);
    dayEvents.pop(newEvent);
    setDayEvents([...dayEvents]);
    setNewEvent(eventSchema);
    setEditingEvent(false);
  };

  return (
    <div
      style={{ flexGrow: 100, border: "0.5px solid grey" }}
      onMouseDown={createNewEvent}
      onMouseMove={changeDuration}
      onMouseUp={addEvent}
      ref={columnEl}
    >
      {/* <CalendarLabel day={date} /> */}
      <RowBlocks width={width} />
      {dayEvents.map((event, index) => (
        <EventBox key={index} event={event} maxHeight={height} width={width} />
      ))}
      {/* Display new event on screen */}
      {editingEvent ? (
        <>
          <EventBox
            event={newEvent}
            maxHeight={height}
            width={width}
            ref={newEventEl}
          />
          <NewEventForm
            formAnchor={formAnchor}
            handleCloseForm={handleCloseForm}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
          />
        </>
      ) : null}
    </div>
  );
};

export default DayCalendar;
