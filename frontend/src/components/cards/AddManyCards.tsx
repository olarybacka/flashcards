import { useState } from 'react';
import { formatCards } from '../../utils/cardUtils';

export const AddManyCards = () => {
  const [cards, setCards] = useState<string>('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formatCards(cards));
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
