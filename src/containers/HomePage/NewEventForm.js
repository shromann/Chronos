import React from "react";

import addEvent from "../../server/addEvent";

import {
  Button,
  Popover,
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  RadioGroup,
  Radio,
} from "@mui/material";

const NewEventForm = ({ formAnchor, handleCloseForm, newEvent, setNewEvent }) => {
  const getTime = date => {
    const options = { hour12: false, hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString(date, options);
  }

  const formOpen = Boolean(formAnchor);

  const handleFormChange = (event) => {
    const {name} = event.target;
    if (name === "start_time" || name === "end_time") {
      const time = event.target.value.split(":");
      console.log(time);
      newEvent[name].setHours(time[0], time[1]);
      setNewEvent({ ...newEvent });
    } else {
      const value = event.target.value;
      setNewEvent({
        ...newEvent,
        [name]: value,
      });
    }
  };

  const handleAddEvent = (event) => {
    event.preventDefault();
    // addEvent(newEvent, props.uid);
    // props.addNewEvent(newEvent);
    // setFormAnchor(null);
    setNewEvent({
      name: "",
      start_time: null,
      end_time: null,
      focus: 0,
    });
  };
  return (
    <Popover
      id="add-event-form"
      aria-labelledby="add-event-form"
      anchorEl={formAnchor}
      open={formOpen}
      onClose={handleCloseForm}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      disableScrollLock
    >
      <h2>Add New Event</h2>
      <form onSubmit={handleAddEvent}>
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
          <Grid container spacing={0} sx={{maxWidth: "600px"}}>
            <Grid item xs={6}>
            <TextField
                id="date"
                label="Date"
                type="date"
                sx={{width: 250, marginBottom: 3}}
                InputLabelProps={{
                  shrink: true,
                }}
                name="date"
                onChange={handleFormChange}
                value={newEvent.start_time.toISOString().substr(0, 10)}
                required
              />
              <TextField
                id="start-time"
                label="Start Time"
                type="time"
                sx={{width: 250, marginBottom: 3}}
                InputLabelProps={{
                  shrink: true,
                }}
                name="start_time"
                onChange={handleFormChange}
                value={getTime(newEvent.start_time)}
                required
              />
              <TextField
                id="end-time"
                label="End Time"
                type="time"
                sx={{width: 250, marginBottom: 3}}
                InputLabelProps={{
                  shrink: true,
                }}
                name="end_time"
                onChange={handleFormChange}
                value={getTime(newEvent.end_time)}
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
        <Button variant="contained" type="submit" sx={{display: "block"}}>
          Add Event
        </Button>
      </form>
    </Popover>
  );
}

export default NewEventForm;