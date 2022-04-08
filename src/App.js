import './App.css';
import getAllEvents from './server/getAllEvents';

function App() {
  getAllEvents();
  return (
    <div className="App">
      <header className="App-header">
        Chronos
      </header>
    </div>
  );
}

export default App;
