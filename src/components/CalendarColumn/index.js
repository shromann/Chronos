/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import RowBlock from './RowBlock';

const styles = css`
  max-width: 755px;
  margin: 20px auto 0 auto;
  max-height: 87vh;
  max-width: 760px;
  overflow-y: auto;
`;

const NUM_HOURS = 24;

const CalendarColumn = () => {
  let allBlocks = [];

  for (let i = 0; i < NUM_HOURS; i++) {
    allBlocks.push(<RowBlock key={i} />);
  }

  return (
  <div css={styles} >
    { allBlocks }
  </div>
)};

export default CalendarColumn;