import './App.css';
import Header from './components/Header';
import CalendarColumn from './components/CalendarColumn';

const events = [
  // {
  //   start_time: new Date('2022-04-14T10:00:00'),
  //   end_time: new Date('2022-04-14T11:00:00'),
  // },
  // {
  //   start_time: new Date('2022-04-14T11:00:00'),
  //   end_time: new Date('2022-04-14T12:00:00'),
  // },
  {
    start_time: new Date('2022-04-14T12:00:00'),
    end_time: new Date('2022-04-14T13:00:00'),
  },
  {
    start_time: new Date('2022-04-14T13:00:00'),
    end_time: new Date('2022-04-14T14:00:00'),
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
