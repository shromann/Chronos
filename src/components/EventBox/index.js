import React from "react";
import EventContainer from "./EventContainer";
import EventContent from "./EventContent";

import {
  eventHeight,
  eventPlacement,
  getEventDuration,
  timeToMinutes,
  eventTimes,
} from "../utils/eventTime";

const EventBox = ({ event, maxHeight, width }) => {
  const duration = getEventDuration(event.start_time, event.end_time);
  return (
    <EventContainer
      sx={{
        width: width,
        height: eventHeight(duration, maxHeight),
        top: eventPlacement(event.start_time, maxHeight)+'px',
        zIndex: timeToMinutes(event.start_time),
        userSelect: 'none',
      }}
    >
      <EventContent>{event.name}</EventContent>
      <EventContent>{eventTimes(event)}</EventContent>
    </EventContainer>
  );
};

export default EventBox;
