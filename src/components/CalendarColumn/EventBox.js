import React from 'react';
import { Box } from '@mui/material';

const EventBox = ({ height, top }) => {
  console.log(top);
  return <Box
    sx={{
      width: '755px',
      height: height,
      backgroundColor: "blue",
      border: '2px solid #B9B9B9',
      position: 'relative',
      top: {top},
    }}
  />
}

export default EventBox;

