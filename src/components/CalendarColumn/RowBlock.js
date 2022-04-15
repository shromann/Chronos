import React from 'react';
import Box from '@mui/material/Box';

import { CALENDAR_ROW_GAP, ROW_GAP_BORDER_SIZE } from '../utils/constants';

const RowBlock = ({ hour }) => {
  return (
    <Box 
      sx={{
        width: '755px',
        height: CALENDAR_ROW_GAP + 'px',
        backgroundColor: "transparent",
        border: ROW_GAP_BORDER_SIZE + 'px solid #B9B9B9',
        margin: '-1px auto',
      }}
    />
  )
};

export default RowBlock;