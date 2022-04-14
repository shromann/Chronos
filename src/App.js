import './App.css';
import Header from './components/Header';
import CalendarColumn from './components/CalendarColumn';

const testEvents = [
  {
    start_time: new Date('2022-04-14T13:00:00'),
    end_time: new Date('2022-04-14T15:30:00'),
  }
];

function App() {
  // getAllEvents();
  return (
    <div className="App">
      <Header />
      <CalendarColumn events={testEvents}/>
    </div>
  );
}

export default App;
