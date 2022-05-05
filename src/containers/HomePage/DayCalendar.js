import React from 'react';

import EventBox from '../../components/EventBox';
import RowBlocks from '../../components/RowBlocks';

const DayCalendar = ({ events, height, width }) => {

  return (
    <div
      style={{flexGrow: 100, border: '1px solid black'}}
      id="dayCalendar"
    >
      <RowBlocks width={width}/>
      {events.map((event, index) => <EventBox key={index} event={event} maxHeight={height} />)}
    </div>
  );
};

export default DayCalendar;
