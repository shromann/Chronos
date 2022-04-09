import './App.css';
import getAllEvents from './server/getAllEvents';
import Header from './components/Header';

function App() {
  getAllEvents();
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
