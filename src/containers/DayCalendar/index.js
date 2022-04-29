/** @jsxImportSource @emotion/react */
import { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FormControl,
  TextField,
  Popover,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from '@mui/material';

import FormatPicker from '../../components/FormatPicker';
import Header from '../../components/Header';
import EventBox from '../../components/EventBox';
import RowBlocks from '../../components/RowBlocks';
import HourLabels from '../../components/HourLabels';

const Container = styled.div`
  max-width: 100vw;
  max-height: 80vh;
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

const DayCalendar = ({ events }) => {

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

  const [newEvent, setNewEvent] = useState({
    name: '',
    start_time: '',
    end_time: '',
    focus: 0,
  });

  const handleFormChange = event => {
    const { name } = event.target;
    let value;
    if (name === 'start_time' || name === 'end_time') {
      value = new Date(event.target.value);
    } else {
      value = event.target.value;
    }
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleAddEvent = event => {
    event.preventDefault();
    allEvents.push(newEvent);
    setAllEvents(allEvents);
    setFormAnchor(null);
    setNewEvent({
      name: '',
      start_time: null,
      end_time: null,
      focus: 0
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <FormatPicker/>
      <Content>
        <Button
          variant='contained'
          aria-controls={formOpen ? 'add-event-form' : undefined}
          aria-haspopup="true"
          aria-expanded={formOpen ? 'true' : undefined}
          onClick={handleOpenForm}
          sx={{
            marginRight: 0,
            marginLeft: 'auto',
            display: 'block',
          }}
        >
          +
        </Button>
        <Popover
          id="add-event-form"
          aria-labelledby="add-event-form"
          anchorEl={formAnchor}
          open={formOpen}
          onClose={handleCloseForm}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          disableScrollLock
        >
          <h2>Add New Event</h2>
          <form onSubmit={handleAddEvent} >
            <FormControl>
              <TextField 
                value={newEvent.name}
                id="event-title"
                label="Event Title"
                variant="outlined"
                name="name"
                onChange={handleFormChange}
                sx={{marginBottom: 3}}
                required
              />
              <Grid container spacing={0} sx={{ maxWidth: '600px'}}>
                <Grid item xs={6}>
                  <TextField
                    id="start-time"
                    label="Start Time"
                    type="datetime-local"
                    sx={{ width: 250, marginBottom: 3 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="start_time"
                    onChange={handleFormChange}
                    required
                  />
                  <TextField
                    id="end-time"
                    label="End Time"
                    type="datetime-local"
                    sx={{ width: 250, marginBottom: 3 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="end_time"
                    onChange={handleFormChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormLabel id="form-radio-buttons-label">Focus</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="form-radio-buttons-label"
                      name="focus"
                      onChange={handleFormChange}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="1" />
                      <FormControlLabel value={2} control={<Radio />} label="2" />
                      <FormControlLabel value={3} control={<Radio />} label="3" />
                      <FormControlLabel value={4} control={<Radio />} label="4" />
                      <FormControlLabel value={5} control={<Radio />} label="5" />
                    </RadioGroup>
                </Grid>
              </Grid>
            </FormControl>
            <Button
              variant='contained'
              type='submit'
              sx={{display: 'block'}}
            >
              Add Event
            </Button>
          </form>
        </Popover>
      </Content>
      <Container>
        <Content>
          <Calendar ref={calendarRef} >
            <HourLabels />
            <div
              css={{flexGrow: 100}}
              id="dayCalendar"
            >
              <RowBlocks />
              {allEvents.map(event => <EventBox event={event} maxHeight={height} />)}
            </div>
          </Calendar>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default DayCalendar;
