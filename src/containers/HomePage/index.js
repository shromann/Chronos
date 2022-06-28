import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

import FormatPicker from "../../components/FormatPicker";
import Header from "../../components/Header";
import AddEventForm from "./AddEventForm";
import Calendar from "./Calendar";
import { DEFAULT_VIEW } from "../../components/utils/constants";

import getAllEvents from "../../server/getAllEvents";
import { useAuth } from "../../contexts/AuthContext";
import { Container } from "@mui/material";

const Content = styled.div`
  width: 1200px;
  margin: 20px auto 0 auto;
`;

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
  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEvents(currentUid);
      setAllEvents(events);
    };
    fetchEvents();
  }, [currentUid]);

  const handleAddEvent = (event) => {
    setAllEvents([...allEvents, event]);
  };

  const [currView, setView] = useState(DEFAULT_VIEW);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Button onClick={() => logOut()}>Log Out</Button>
        <Content>
          <FormatPicker changeView={setView} view={currView} />
          <AddEventForm addNewEvent={handleAddEvent} uid={currentUid} />
          <Calendar allEvents={allEvents} view={currView} />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
