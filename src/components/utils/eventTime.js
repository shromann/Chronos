import { DAY_TICKS, ROW_GAP_BORDER_SIZE} from "./constants";

// Note: Changed 'clientHeight' to 'calHeight' 
export const eventHeight = (duration, calHeight) => {
  // returns the UI Height of an event based 
  // on its duration and the calHeight.
  return (calHeight / DAY_TICKS * duration) - ROW_GAP_BORDER_SIZE + 'px';
}

export const eventPlacement = (startTime, calHeight) => {
  // returns the UI start position. i.e where the event should start
  const inMinutes = timeToMinutes(startTime);
  return (calHeight / DAY_TICKS * inMinutes) + ROW_GAP_BORDER_SIZE + 'px';

}

export const getEventTime = (position, calHeight) => {
  const inMinutes =  (position - ROW_GAP_BORDER_SIZE) * DAY_TICKS / calHeight;
  return minutesToTime(inMinutes);
}

export const getEventDuration = (start, end) => (
  (end.getHours() * 60 + end.getMinutes()) - (start.getHours() * 60 + start.getMinutes())
);
  
export const timeToMinutes = (time) => (
  time.getHours() * 60 + time.getMinutes()
);

const minutesToTime = (minutes) => (
  {hour: Math.floor(minutes / 60), minute: Math.floor(minutes % 60)}
);

const eventTimeDetails = (time) => {
  return (time.getHours() % 12 === 0 ? 12 : time.getHours() % 12) + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes() + ' ' + (time.getHours() <= 12 ? 'am' : 'pm');
}

export const eventTimes = (event) => {
  return eventTimeDetails(event.start_time) + ' - ' + eventTimeDetails(event.end_time);
}
  