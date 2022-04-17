/** @jsxImportSource @emotion/react */
import { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Button from '../../components/Button';
import FormatPicker from '../../components/FormatPicker';
import Header from '../../components/Header';
import EventBox from './EventBox';
import RowBlock from '../../components/RowBlock';
import HourLabels from '../../components/HourLabels';

import { NUM_HOURS } from '../../components/utils/constants';

const Container = styled.div`
  max-width: 80vw;
  max-height: 85vh;
  overflow-y: scroll;
  margin: 0 auto;
  margin-top: 20px;
`;

const Content = styled.div`
  width: 860px;
  margin: 20px auto 0 auto;
`

const Calendar = styled.article`
  margin-top: 1em;
  display: flex;
  position: relative;
`;

const AddEventButton = styled(Button)`
  margin-right: 0;
  margin-left: auto;
`;

const DayCalendar = ({ events }) => {
  const calendarRef = useRef();

  const [height, setHeight] = useState(0);
  const [formOpen, setFormOpen] = useState(false);

  const getCalendarHeight = () => {
    setHeight(calendarRef.current.clientHeight);
  };

  const handleOpenForm = () => {
    setFormOpen(formOpen === false);
    console.log(formOpen);
  }

  useEffect(() => {
    getCalendarHeight();
  });
  // Stores components
  const allBlocks = [];

  for (let i = 0; i < NUM_HOURS; i++) {
    allBlocks.push(<RowBlock key={i} hour={i} />);
  }

  return (
    <>
      <Header />
      <FormatPicker/>
      <Container>
        <Content>
          <AddEventButton onClick={handleOpenForm}>+</AddEventButton>
          <Calendar ref={calendarRef} >
            <HourLabels />
            <div
              css={{flexGrow: 100}}
              id="dayCalendar"
            >
              {allBlocks}
              {events.map(event => <EventBox event={event} maxHeight={height} />)}
            </div>
          </Calendar>
        </Content>
      </Container>
    </>
  );
};

export default DayCalendar;
