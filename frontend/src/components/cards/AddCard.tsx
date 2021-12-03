import { useState } from 'react';
import { CardData } from '../../types/Card';
import { useNavigate } from 'react-router-dom';
import { saveNewCard } from '../../api/cardsQueries';

export const AddCard = () => {
  const navigate = useNavigate();

  const initialState = {
    sideA: '',
    sideB: '',
  };
  const [card, setCard] = useState<CardData>(initialState);



  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNewCard(card);
          navigate('/');
        }}
      >
        <label>
          Side A:{' '}
          <input
            required
            onChange={(e) => setCard({ ...card, sideA: e.target.value })}
          ></input>
        </label>
        <label>
          Side B:{' '}
          <input
            required
            onChange={(e) => setCard({ ...card, sideB: e.target.value })}
          ></input>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
