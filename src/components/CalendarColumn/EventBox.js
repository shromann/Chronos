import React from 'react';
import Box from '@mui/material/Box';

function EventBox(height, width) {
    return <Box
        sx={{
            width: width,
            height: height,
            backgroundColor: "blue",
            border: '2px solid #B9B9B9',
        }}
        />
}

export default EventBox;

