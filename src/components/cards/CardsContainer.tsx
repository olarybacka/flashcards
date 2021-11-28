import { useStore } from '../../store/useStore';
import { CardItem } from './CardItem';
import { Container } from './CardStyles.styled';
import { Link } from 'react-router-dom';
export const CardsContainer = () => {
  const { cards } = useStore();
  return (
    <Container>
      <Link to="/addCard">Add Card </Link>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </Container>
  );
};
