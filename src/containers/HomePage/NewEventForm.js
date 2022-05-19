import React, {useState} from "react";

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
  const formOpen = Boolean(formAnchor);

  const handleFormChange = (event) => {
    const {name} = event.target;
    let value;
    if (name === "start_time" || name === "end_time") {
      value = new Date(event.target.value);
    } else {
      value = event.target.value;
    }
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
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
                id="start-time"
                label="Start Time"
                type="datetime-local"
                sx={{width: 250, marginBottom: 3}}
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
                sx={{width: 250, marginBottom: 3}}
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
        <Button variant="contained" type="submit" sx={{display: "block"}}>
          Add Event
        </Button>
      </form>
    </Popover>
  );
}

export default NewEventForm;