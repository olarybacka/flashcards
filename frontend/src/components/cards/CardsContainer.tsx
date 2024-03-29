import { useState } from 'react';
import { useQuery } from 'react-query';
import { getCards } from '../../api/cardsQueries';
import { CardItem } from './CardItem';
import {
  Button,
  CardWithButtons,
} from './CardsContainer.styled';
import { ProgressBar } from './ProgressBar';

export const CardsContainer = () => {
  const [index, setIndex] = useState(0);
  const { data } = useQuery('cards', getCards);

  const showNextCard = () => {
    setIndex(index === data?.allCards.length - 1 ? 0 : index + 1);
  };
  const showPrevCard = () => {
    setIndex(index === 0 ? data?.allCards.length - 1 : index - 1);
  };

  const card = data?.allCards[index];
  return (
    <section>
      <CardWithButtons>
        <Button onClick={showPrevCard}> ❮ </Button>
        {card && <CardItem key={card.id} card={card} />}
        <Button onClick={showNextCard}> ❯ </Button>
      </CardWithButtons>

      <ProgressBar current={index} all={data?.allCards.length}/>
    </section>
  );
};
