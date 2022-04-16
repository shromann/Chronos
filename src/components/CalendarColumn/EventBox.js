import React from 'react';
import styled from "@emotion/styled";
import { Box } from '@mui/material';

import { DAY_CALENDAR_WIDTH } from '../utils/constants';
import { 
  eventHeight, 
  eventPlacement, 
  getEventDuration,
  timeToMinutes
} from '../utils/eventTimeToHeight';

const EventName = styled.div`
  margin: 0.6% 1%;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

const EventTimes = styled.div`
  margin: 0.6% 1%;
  color: white;
  font-family: 'Roboto', sans-serif
`;

const eventTimeDetails = (time) => {
  return (time.getHours() % 12 === 0 ? 12 : time.getHours() % 12) + ':' + time.getMinutes() + (time.getMinutes() < 10 ? '0' : '') + ' ' + (time.getHours() <= 12 ? 'am' : 'pm');
}

const eventTimes = (event) => {
  return eventTimeDetails(event.start_time) + ' - ' + eventTimeDetails(event.end_time);
}


const EventBox = ({ event, maxHeight }) => {
  const duration = getEventDuration(event.start_time, event.end_time);
  console.log(event);
  return <Box
    sx={{
      width: DAY_CALENDAR_WIDTH + 'px',
      height: eventHeight(duration, maxHeight),
      backgroundColor: `rgb(0, 0, 0, 0.5)`,
      position: 'absolute',
      top: eventPlacement(event.start_time, maxHeight),
      textAlign: 'left',
      border: '0.5px solid black',
      display: 'block',
      margin: '0px auto',
      zIndex: timeToMinutes(event.start_time),
      borderRadius: 7 + 'px',
    }}>
      <EventName>{event.name}</EventName>
      <EventTimes>{eventTimes(event)}</EventTimes>
    </Box>
}



export default EventBox;

