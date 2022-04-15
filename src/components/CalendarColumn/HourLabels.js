import React from 'react';
import styled from '@emotion/styled';

import { CALENDAR_ROW_GAP } from '../utils/constants';

const NUM_HOURS = 12;
const periods = ['AM', 'PM'];

const Container = styled.div`
  div {
    height: ${CALENDAR_ROW_GAP};
    padding-right: 1em;
    text-align: right;
    border: 0.5px solid transparent;
  }

  p {
    margin: 0;
    display: block;
    position: relative;
    top: -6px;
  }
`;

const HourLabels = () => {
  const allHours = [];
  const hourComponents = [];

  for (let i = 0; i < periods.length; i++) {
    allHours.push(NUM_HOURS + ' ' + periods[i]);
    for (let j = 1; j < NUM_HOURS; j++) {
      allHours.push(j + ' ' + periods[i]);
    }
  }

  let i = 0;
  allHours.forEach(h => {
    hourComponents.push(
      <div key={i}>
        <p>{h}</p>
      </div>
    );
    i++;
  })


  return (
    <Container>
      {hourComponents}
    </Container>
  )
}

export default HourLabels;