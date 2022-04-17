/** @jsxImportSource @emotion/react */
import { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FormControl, TextField, Popover } from '@mui/material';

import Button from '../../components/Button';
import FormatPicker from '../../components/FormatPicker';
import Header from '../../components/Header';
import EventBox from './EventBox';
import RowBlocks from '../../components/RowBlocks';
import HourLabels from '../../components/HourLabels';

const Container = styled.div`
  max-width: 100vw;
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

const EventFormButton = styled(Button)`
  margin: 0 auto;
`;

const theme = createTheme({
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          padding: '5em',
        },
      },
    },
  },
});


const DayCalendar = ({ events }) => {
  // Get height of entire calendar to calculate position of events
  const calendarRef = useRef();
  const [height, setHeight] = useState(0);
  const getCalendarHeight = () => {
    setHeight(calendarRef.current.clientHeight);
  };
  useEffect(() => {
    getCalendarHeight();
  });

  // Opens and closes add event form
  const [formAnchor, setFormAnchor] = useState(null);
  const formOpen = Boolean(formAnchor);
  
  const handleOpenForm = event => {
    document.body.style.overflow = "scroll";
    setFormAnchor(event.currentTarget);
  };

  const handleCloseForm = () => {
    setFormAnchor(null);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <FormatPicker/>
      <EventFormButton
        aria-controls={formOpen ? 'add-event-form' : undefined}
        aria-haspopup="true"
        aria-expanded={formOpen ? 'true' : undefined}
        onClick={handleOpenForm}
      >
        +
      </EventFormButton>
      <Popover
        id="add-event-form"
        aria-labelledby="add-event-form"
        anchorEl={formAnchor}
        open={formOpen}
        onClose={handleCloseForm}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        disableScrollLock
      >
        <h2>Add New Event</h2>
        <FormControl>
          <TextField id="event-title" label="Event Title" variant="outlined" />
        </FormControl>
      </Popover>
      <Container>
        <Content>
          <Calendar ref={calendarRef} >
            <HourLabels />
            <div
              css={{flexGrow: 100}}
              id="dayCalendar"
            >
              <RowBlocks />
              {events.map(event => <EventBox event={event} maxHeight={height} />)}
            </div>
          </Calendar>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default DayCalendar;
