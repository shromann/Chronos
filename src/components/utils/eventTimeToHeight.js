import { DAY_TICKS, ROW_GAP_BORDER_SIZE} from "./constants";

// Note: Changed 'clientHeight' to 'calHeight' 
export const eventHeight = (duration, calHeight) => {
  // returns the UI Height of an event based 
  // on its duration and the calHeight.
  return (calHeight / DAY_TICKS * duration) + 'px';
}

export const eventPlacement = (startTime, calHeight) => {
  // returns the UI start position. i.e where the event should start
  const inMinutes = timeToMinutes(startTime);
  return (calHeight / DAY_TICKS * inMinutes) + ROW_GAP_BORDER_SIZE + 1 + 'px';

}

export const getEventDuration = (start, end) => (
  (end.getHours() * 60 + end.getMinutes()) - (start.getHours() * 60 + start.getMinutes())
);
  
export const timeToMinutes = (time) => (
  time.getHours() * 60 + time.getMinutes()
);
  