import './App.css';
import getAllEvents from './server/getAllEvents';
import Header from './components/Header';
import CalendarColumn from './components/CalendarColumn';

const currTime = new Date();

const testEvents = [
  {
    start_time: currTime,
    end_time: new Date(currTime.getTime() + 60*60000),
  }
];

function App() {
  // getAllEvents();
  return (
    <div className="App">
      <Header />
      <CalendarColumn events={testEvents} />
    </div>
  );
}

export default App;
