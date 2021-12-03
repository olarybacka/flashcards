import { useEffect, useState } from 'react';
import { getCards } from '../../api/cardsQueries';
import { useStore } from '../../store/useStore';
import { CardItem } from './CardItem';
import { Container, Slider, PrevButton, NextButton } from './CardStyles.styled';

export const CardsContainer = () => {
  const { cards } = useStore();
  const [index, setIndex] = useState(0);

  const getNextCard = () => {
    setIndex(index === cards.length - 1 ? 0 : index + 1);
  }
  const getPrevCard = () => {
    setIndex(index === 0 ? cards.length - 1 : index - 1);
  }
  
  useEffect(() => getCards(), [])

  return (
    <Container>
      <Slider>
        <PrevButton onClick={getPrevCard}> prev </PrevButton>
        {cards[index] && <CardItem key={cards[index].id} card={cards[index]} />}
        <NextButton onClick={getNextCard}> next </NextButton>
      </Slider>
    </Container>
  );
};
