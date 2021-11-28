import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CardsContainer } from './components/cards/CardsContainer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
