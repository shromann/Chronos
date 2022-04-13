const MIN_IN_DAY = 1440

export function eventHeight(duration, clientHeight) {
    // returns the UI Height of an event based 
    // on its duration and the clientHeight.
    return duration / MIN_IN_DAY * clientHeight;
}

export function eventPlacement(startTime, clientHeight) {
    // returns the UI start position. i.e where the event should start
    return eventHeight(startTime, clientHeight); 
}

