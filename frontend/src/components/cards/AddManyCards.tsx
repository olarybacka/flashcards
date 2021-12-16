import { useState } from 'react';
import { useNavigate } from 'react-router';
import { saveNewCard } from '../../api/cardsQueries';
import { formatCards } from '../../utils/cardUtils';
import { FormContainer, LabelStyled } from './Forms.styled';
import { Button, Input } from 'antd';

const { TextArea } = Input;

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
            <TextArea
              required
              onChange={(e) => setCards(e.target.value)}
            ></TextArea>
          </LabelStyled>

          <Button htmlType="submit" type="primary">
            Add
          </Button>
        </FormContainer>
      </form>
    </div>
  );
};
