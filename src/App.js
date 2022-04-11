import './App.css';
import getAllEvents from './server/getAllEvents';
import Header from './components/Header';
import CalendarColumn from './components/CalendarColumn';

function App() {
  getAllEvents();
  return (
    <div className="App">
      <Header />
      <CalendarColumn />
    </div>
  );
}

export default App;
