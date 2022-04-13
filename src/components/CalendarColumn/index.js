/** @jsxImportSource @emotion/react */
import React, {useState, useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import EventBox from "./EventBox";
import RowBlock from "./RowBlock";
import HourLabels from "./HourLabels";
import { eventPlacement, eventHeight } from '../utils/eventTimeToHeight';

const Container = styled.div`
  max-width: 80vw;
  max-height: 85vh;
  overflow-y: scroll;
  margin: 0 auto;
  margin-top: 20px;
`;

const Content = styled.article`
  width: 860px;
  margin: 20px auto 0 auto;
  display: flex;
`;

const NUM_HOURS = 24;

const CalendarColumn = ({ events }) => {
  // Get height of calendar
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null);

  // Stores components
  const allBlocks = [];
  const allEventComponents = [];

  // Saves calendar height to variable 'height'
  useEffect(() => {
    setHeight(containerRef.current.clientHeight);
  }, []);

  for (let i = 0; i < NUM_HOURS; i++) {
    allBlocks.push(<RowBlock key={i} hour={i} />);
  }

  // Create a component for each event in events and add them to an array
  // TODO: eventDuration should be calculated in eventHeight, eventHeight takes start_time, end_time as arguments
  events.forEach(event => {
    const eventDuration = events[0].end_time - events[0].start_time;
    allEventComponents.push(
      <EventBox 
        height={eventHeight(eventDuration, height)}
        top={eventPlacement(event[0].start_time, height)}
      />
    );
  });

  return (
    <Container ref={containerRef}>
      <Content>
        <HourLabels />
        <div
          css={css`
          margin-top: 10px;
          `}
        >

          {/* {allBlocks} */}
          {allEventComponents}

          {/* NOTE: startTime and duration here are scaled to 1440 ticks.
          Will change to pass in time in and scale internally the EventBox component */}
          <EventBox startTime={500} duration={50}/>
        </div>
      </Content>
    </Container>
  );
};

export default CalendarColumn;
