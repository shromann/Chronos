import React from 'react';
import styled from '@emotion/styled';

const NUM_HOURS = 12;
const periods = ['AM', 'PM'];

const Container = styled.div`
  margin-right: 1rem;

  p {
    margin-top: 0;
    margin-bottom: 36.5px;
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
  allHours.push(NUM_HOURS + ' ' + periods[1]);

  allHours.forEach(h => {
    hourComponents.push(
      <p>{h}</p>
    );
  })


  return (
    <Container>
      {hourComponents}
    </Container>
  )
}

export default HourLabels;