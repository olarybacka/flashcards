import { useState } from 'react';
import { useNavigate } from 'react-router';
import { saveNewCard } from '../../api/cardsQueries';
import { formatCards } from '../../utils/cardUtils';
import { ButtonStyled, FormContainer, LabelStyled } from './Forms.styled';

export const AddManyCards = () => {
  const [cards, setCards] = useState<string>('');
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formatCards(cards).forEach((card) => {
            saveNewCard(card);
          });
          navigate('/');
        }}
      >
        <FormContainer>
          <LabelStyled>
            Add list of cards
            <textarea
              required
              onChange={(e) => setCards(e.target.value)}
            ></textarea>
          </LabelStyled>

          <ButtonStyled type="submit">Add</ButtonStyled>
        </FormContainer>
      </form>
    </div>
  );
};
