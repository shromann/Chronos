import React from 'react';
import Box from '@mui/material/Box';

const RowBlock = ({ hour }) => {
  return (
    <Box 
      sx={{
        width: '755px',
        height: 54,
        backgroundColor: "transparent",
        border: '1px solid #B9B9B9',
        margin: '-1px auto',
        zIndex: 0
      }}
    />
  )
};

export default RowBlock;