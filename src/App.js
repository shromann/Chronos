import "./App.css";
import HomePage from "./containers/HomePage/index";
import getAllEvents from "./server/getAllEvents";
import {useEffect, useState} from "react";

// const e = [
//   {
//     name: "Event 1",
//     start_time: new Date("2022-04-14T05:00:00"),
//     end_time: new Date("2022-04-14T06:00:00"),
//   },
//   {
//     name: "Event 2",
//     start_time: new Date("2022-04-14T11:00:00"),
//     end_time: new Date("2022-04-14T13:30:00"),
//   },
//   {
//     name: "Event 3",
//     start_time: new Date("2022-04-14T13:00:00"),
//     end_time: new Date("2022-04-14T15:00:00"),
//   },
// ];

const uid = "nT6Q9UKwEQXxpl47Drbg8egap9C2";

function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEvents(uid);
      setEvents(events);
    };
    fetchEvents();
  }, []);

  return (
    <div className="App">
      <HomePage key={events} events={events} uid={uid} />
    </div>
  );
}

export default App;
