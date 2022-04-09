import './App.css';
import getAllEvents from './server/getAllEvents';
import FormatPicker from './components/FormatPicker';

function App() {
  getAllEvents();
  return (
    <div className="App">
      <header className="App-header">
        Chronos
        <FormatPicker />
      </header>
    </div>
  );
}

export default App;
