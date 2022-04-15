/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

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
  position: relative
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
          id="dayCalendar"
        >
          {allBlocks}
          {events.map(event => <EventBox event={event} />)}
        </div>
      </Content>
    </Container>
  );
};

export default CalendarColumn;
