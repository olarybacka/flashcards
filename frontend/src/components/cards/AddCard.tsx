import { useState } from 'react';
import { Card } from '../../types/Card';
import { useNavigate } from 'react-router-dom';
import { saveNewCard } from '../../api/cardsQueries';
import { ButtonStyled, FormContainer, LabelStyled } from './Forms.styled';

export const AddCard = () => {
  const navigate = useNavigate();

  const initialState = {
    sideA: '',
    sideB: '',
  };
  const [card, setCard] = useState<Card>(initialState);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNewCard(card);
          navigate('/');
        }}
      >
        <FormContainer>
          <LabelStyled>
            Side A:
            <input
              required
              onChange={(e) => setCard({ ...card, sideA: e.target.value })}
            ></input>
          </LabelStyled>
          <LabelStyled>
            Side B:
            <input
              required
              onChange={(e) => setCard({ ...card, sideB: e.target.value })}
            ></input>
          </LabelStyled>
          <ButtonStyled type="submit">Add</ButtonStyled>
        </FormContainer>
      </form>
    </div>
  );
};
