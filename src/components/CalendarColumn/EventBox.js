import React from 'react';
import { Box } from '@mui/material';

import { DAY_CALENDAR_WIDTH } from '../utils/constants';

const EventBox = ({ height, top }) => {
  return <Box
    sx={{
      width: DAY_CALENDAR_WIDTH,
      height: height,
      backgroundColor: 'blue',
      border: '2px solid #B9B9B9',
      position: 'relative',
      top: top,
    }}
  />
}

export default EventBox;

