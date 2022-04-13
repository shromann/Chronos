import './App.css';
import getAllEvents from './server/getAllEvents';
import Header from './components/Header';
import CalendarColumn from './components/CalendarColumn';

// TODO: create test cases
const testEvents = [];

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
