import { useState } from 'react';
import { useNavigate } from 'react-router';
import { saveNewCard } from '../../api/cardsQueries';
import { formatCards } from '../../utils/cardUtils';

export const AddManyCards = () => {
  const [cards, setCards] = useState<string>('');
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formatCards(cards).forEach(card => {
            saveNewCard(card);
          })
          navigate('/');
        }}
      >
        <label>
          jk
          <textarea
            required
            onChange={(e) => setCards(e.target.value)}
          ></textarea>
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};
