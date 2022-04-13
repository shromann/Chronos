import { DAY_TICKS } from "./constants";

// Note: Changed 'clientHeight' to 'calHeight' 
export const eventHeight = (duration, calHeight) => {
    // returns the UI Height of an event based 
    // on its duration and the calHeight.
    return (calHeight / DAY_TICKS * duration) + 'px';
}

export const eventPlacement = (startTime, calHeight) => {
    // returns the UI start position. i.e where the event should start
    return eventHeight(startTime, calHeight); 
}