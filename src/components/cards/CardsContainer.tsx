import { CardItem } from './CardItem';
import { Container } from './CardStyles.styled';

export const CardsContainer = () => (
  <Container>
    <CardItem card={{sideA: "a", sideB: "b"}}/>
  </Container>
);
