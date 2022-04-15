import React from 'react';
import styled from "@emotion/styled";
import { Box } from '@mui/material';

import { DAY_CALENDAR_WIDTH, DAY_CALENDAR_HEIGHT } from '../utils/constants';
import { 
  eventHeight, 
  eventPlacement, 
  getEventDuration, 
} from '../utils/eventTimeToHeight';

const EventName = styled.div`
  margin: 1% 1%;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

const EventTimes = styled.div`
  margin: 1% 1%;
  color: white;
  font-family: 'Roboto', sans-serif
`;

// 

const eventTimeDetails = (time) => {
  return (time.getHours() % 12 === 0 ? 12 : time.getHours() % 12) + ':' + time.getMinutes() + (time.getMinutes() < 10 ? '0' : '') + ' ' + (time.getHours() <= 12 ? 'am' : 'pm');
}

const eventTimes = (event) => {
  return eventTimeDetails(event.start_time) + ' - ' + eventTimeDetails(event.end_time);
}


const EventBox = ({ event }) => {
  const duration = getEventDuration(event.start_time, event.end_time);
  console.log(event);
  return <Box
    sx={{
      width: DAY_CALENDAR_WIDTH,
      height: eventHeight(duration, DAY_CALENDAR_HEIGHT),
      backgroundColor: 'gray',
      position: 'absolute',
      top: eventPlacement(event.start_time, DAY_CALENDAR_HEIGHT),
      textAlign: 'left',
      // border: '1.5px solid #B9B9B9',
      // opacity: '1'
      display: 'block'
    }}>
      <EventName>{event.name}</EventName>
      <EventTimes>{eventTimes(event)}</EventTimes>
    </Box>
}



export default EventBox;

