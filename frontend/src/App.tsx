import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CardsContainer } from './components/cards/CardsContainer';
import { AddCard } from './components/cards/AddCard';
import { AppContainer } from './AppContainer/AppContainer';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  return (
    <div className="App">
      <AppContainer />
      <QueryClientProvider client={new QueryClient()}>
        <Routes>
          <Route path="/" element={<CardsContainer />} />
          <Route path="/addCard" element={<AddCard />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
