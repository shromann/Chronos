import React, { useState } from 'react';
import styled from '@emotion/styled';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import FormatPicker from '../../components/FormatPicker';
import Header from '../../components/Header';
import AddEventForm from './AddEventForm';
import Calendar from './Calendar';

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

  const handleAddEvent = event => {
    setAllEvents([...allEvents, event]);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content>
        <FormatPicker/>
        <AddEventForm addNewEvent={handleAddEvent} />
        <Calendar allEvents={allEvents} />
      </Content>
    </ThemeProvider>
  );
};

export default HomePage;
