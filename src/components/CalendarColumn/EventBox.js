import React from 'react';
import { Box } from '@mui/material';

import { DAY_CALENDAR_WIDTH, DAY_CALENDAR_HEIGHT } from '../utils/constants';
import { eventHeight, eventPlacement } from '../utils/eventTimeToHeight';

const EventBox = ({startTime, duration}) => {
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

