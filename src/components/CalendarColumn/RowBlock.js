import React from 'react';
import Box from '@mui/material/Box';

import { CALENDAR_ROW_GAP } from '../utils/constants';

const RowBlock = ({ hour }) => {
  return (
    <Box 
      sx={{
        width: '755px',
        height: CALENDAR_ROW_GAP,
        backgroundColor: "transparent",
        border: '1px solid #B9B9B9',
        margin: '-1px auto',
      }}
    />
  )
};

export default RowBlock;