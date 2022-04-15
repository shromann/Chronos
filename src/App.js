import './App.css';
import Header from './components/Header';
import CalendarColumn from './components/CalendarColumn';

const events = [
  {
    name: "Event 1",
    start_time: new Date('2022-04-14T05:00:00'),
    end_time: new Date('2022-04-14T10:30:00'),
  },
  {
    name: "Event 2",
    start_time: new Date('2022-04-14T11:00:00'),
    end_time: new Date('2022-04-14T12:00:00'),
  },
  {
    name: "Event 3",
    start_time: new Date('2022-04-14T13:00:00'),
    end_time: new Date('2022-04-14T15:00:00'),
  }
];

function App() {
  // getAllEvents();
  return (
    <div className="App">
      <Header />
      <CalendarColumn events={events}/>
    </div>
  );
}

export default App;
