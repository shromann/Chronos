import { DAY_TICKS } from "./constants";

// Note: Changed 'clientHeight' to 'calHeight' 
export const eventHeight = (duration, calHeight) => {
  // returns the UI Height of an event based 
  // on its duration and the calHeight.
  return (calHeight / DAY_TICKS * duration) + 'px';
}

export const eventPlacement = (startTime, calHeight) => {
  // returns the UI start position. i.e where the event should start
  const inMinutes = timeToMinutes(startTime);
  return eventHeight(inMinutes, calHeight); 
}

export const getEventDuration = (start, end) => (
  (end.getHours() * 60 + end.getMinutes()) - (start.getHours() * 60 + start.getMinutes())
);
  
export const timeToMinutes = (time) => (
  time.getHours() * 60 + time.getMinutes()
);
  