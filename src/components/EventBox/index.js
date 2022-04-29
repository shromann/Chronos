import React from 'react';
import StyledBox from './StyledBox';
import EventContent from './EventContent';

import { DAY_CALENDAR_WIDTH } from '../../components/utils/constants';
import { 
  eventHeight, 
  eventPlacement, 
  getEventDuration,
  timeToMinutes,
  eventTimes,
} from '../utils/eventTime';

const EventBox = ({ event, maxHeight }) => {
  const duration = getEventDuration(event.start_time, event.end_time);
  return <StyledBox
    sx={{
      width: DAY_CALENDAR_WIDTH + 'px',
      height: eventHeight(duration, maxHeight),
      top: eventPlacement(event.start_time, maxHeight),
      zIndex: timeToMinutes(event.start_time),
    }}>
      <EventContent>{event.name}</EventContent>
      <EventContent>{eventTimes(event)}</EventContent>
    </StyledBox>
}

export default EventBox;

