/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import RowBlock from './RowBlock';
import HourLabels from './HourLabels';

const Container = styled.div`
  max-width: 45vw;
  margin: 20px auto 0 auto;
  max-height: 87vh;
  overflow-y: scroll;
  display: flex;
`;

const NUM_HOURS = 24;

const CalendarColumn = () => {
  let allBlocks = [];

  for (let i = 0; i < NUM_HOURS; i++) {
    allBlocks.push(<RowBlock key={i} />);
  }

  return (
  <Container>
    <HourLabels />
    <div css={css`
      margin-top: 10px;
    `}>
      { allBlocks }
    </div>
  </Container>
)};

export default CalendarColumn;