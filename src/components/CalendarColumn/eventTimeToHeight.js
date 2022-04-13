const MIN_IN_DAY = 1440

function eventHeight(duration, calHeight) {
    // returns the UI Height of an event based 
    // on its duration and the calHeight.
    return duration / MIN_IN_DAY * calHeight;
}

function eventPlacement(startTime, calHeight) {
    // returns the UI start position. i.e where the event should start
    return eventHeight(startTime, calHeight); 
}

