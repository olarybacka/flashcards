import { Routes, Route } from 'react-router-dom';
import { CardsContainer } from './components/cards/CardsContainer';
import { AddCard } from './components/cards/AddCard';
import { TopBar } from './TopBar/TopBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AddManyCards } from './components/cards/AddManyCards';
import { AppContainer } from './App.styled';
import "antd/dist/antd.css";

function App() {
  return (
    <AppContainer>
      <TopBar />
      <QueryClientProvider client={new QueryClient()}>
        <Routes>
          <Route path="/" element={<CardsContainer />} />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/addCards" element={<AddManyCards />} />
        </Routes>
      </QueryClientProvider>
    </AppContainer>
  );
}

export default App;
