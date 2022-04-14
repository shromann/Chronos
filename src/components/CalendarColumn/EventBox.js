import React from 'react';
import { Box } from '@mui/material';

import { DAY_CALENDAR_WIDTH, DAY_CALENDAR_HEIGHT } from '../utils/constants';
import { 
  eventHeight, 
  eventPlacement, 
  getEventDuration, 
  timeToMinutes
} from '../utils/eventTimeToHeight';

const EventBox = ({ event }) => {
  const startTime = timeToMinutes(event.start_time);
  const duration = getEventDuration(event.start_time, event.end_time);
  return <Box
    sx={{
      width: DAY_CALENDAR_WIDTH,
      height: eventHeight(duration, DAY_CALENDAR_HEIGHT),
      backgroundColor: 'gray',
      border: '1.5px solid #B9B9B9',
      position: 'relative',
      top: eventPlacement(startTime, DAY_CALENDAR_HEIGHT),
    }}
  />
}

export default EventBox;

