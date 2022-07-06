import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

import FormatPicker from "../../components/FormatPicker";
import AddEventForm from "./Calendar/AddEventForm";
import Calendar from "./Calendar/Calendar";
import Header from "./Header/Header";
import Picker from "./Picker/Picker";
import {
  DAY_VIEW,
  WEEK_VIEW,
  MONTH_VIEW,
  DEFAULT_VIEW,
} from "../../components/utils/constants";

import getAllEvents from "../../server/getAllEvents";
import { useAuth } from "../../contexts/AuthContext";

const theme = createTheme({
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          padding: "2em",
        },
      },
    },
  },
});

const HomePage = () => {
  const { currentUid, logOut } = useAuth();
  console.log(currentUid);
  const [allEvents, setAllEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const [currView, setView] = useState();

  const handlePrevDay = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)));
  };

  const handleNextDay = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)));
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEvents(currentUid);
      setAllEvents(events);
    };
    fetchEvents();
    setView(DEFAULT_VIEW);
  }, [currentUid]);

  const handleAddEvent = (event) => {
    setAllEvents([...allEvents, event]);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="mx-52">
        {/* <Button onClick={() => logOut()}>Log Out</Button> */}
        <div>
          <Picker
            handlePrevDay={handlePrevDay}
            handleNextDay={handleNextDay}
            currView={currView}
            setDay={() => setView(DAY_VIEW)}
            setWeek={() => setView(WEEK_VIEW)}
            setMonth={() => setView(MONTH_VIEW)}
          />
        </div>
        <div>
          {/* <FormatPicker changeView={setView} view={currView} />
          <AddEventForm addNewEvent={handleAddEvent} uid={currentUid} /> */}
          <div className="bg-gray-100 p-4">
            <Calendar allEvents={allEvents} currView={currView} date={date} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
