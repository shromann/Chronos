import React, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import FormatPicker from '../../components/FormatPicker';
import Header from '../../components/Header';
import HourLabels from '../../components/HourLabels';
import Container from './Container';
import Column from './Column';
import AddEventForm from './AddEventForm';
import DayCalendar from './DayCalendar';

const Content = styled.div`
  width: 860px;
  margin: 20px auto 0 auto;
`

const theme = createTheme({
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          padding: '2em',
        },
      },
    },
  },
});

const HomePage = ({ events }) => {

  const [allEvents, setAllEvents] = useState(events);

  // Get height of entire calendar to calculate position of events
  const calendarRef = useRef();
  const [height, setHeight] = useState(0);
  const getCalendarHeight = () => {
    setHeight(calendarRef.current.clientHeight);
  };

  useEffect(() => {
    getCalendarHeight();
  });

  const handleAddEvent = event => {
    setAllEvents([...allEvents, event]);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content>
        <FormatPicker/>
        <AddEventForm addNewEvent={handleAddEvent} />
      </Content>
      <Container>
        <Content>
          <Column ref={calendarRef} >
            <HourLabels />
            <DayCalendar events={allEvents} height={height} />
          </Column>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
