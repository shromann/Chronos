/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import EventBox from "./EventBox";
import RowBlock from "./RowBlock";
import HourLabels from "./HourLabels";

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
  // Stores components
  const allBlocks = [];

  for (let i = 0; i < NUM_HOURS; i++) {
    allBlocks.push(<RowBlock key={i} hour={i} />);
  }

  return (
    <Container>
      <Content>
        <HourLabels />
        <div
          css={css`
          margin-top: 10px;
          `}
        >

          {/* {allBlocks} */}

          {/* NOTE: startTime and duration here are scaled to 1440 ticks.
          Will change to pass in time in and scale internally the EventBox component */}
          <EventBox startTime={500} duration={50}/>
        </div>
      </Content>
    </Container>
  );
};

export default CalendarColumn;
