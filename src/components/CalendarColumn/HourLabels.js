import React from 'react';
import styled from '@emotion/styled';

const NUM_HOURS = 12;
const periods = ['AM', 'PM'];

const Container = styled.div`
  div {
    height: 54px;
    padding-right: 1em;
    text-align: right;
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
      <div>
        <p key={i}>{h}</p>
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