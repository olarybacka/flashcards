import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CardsContainer } from './components/cards/CardsContainer';
import { AddCard } from './components/cards/AddCard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardsContainer />} />
        <Route path="/addCard" element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;
