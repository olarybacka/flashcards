import React, { useState } from 'react';
import { Card } from '../../types/Card';
import { CardContainer, CardFront, CardBack, Inner } from './CardItem.styled';

export const CardItem: React.FC<{ card: Card }> = ({
  card: { sideA, sideB },
}) => {
  const [visibleSide, setVisibleSide] = useState('front');
  const switchSide = () => {
    setVisibleSide(visibleSide === 'front' ? 'back' : 'front');
  };
  return (
    <CardContainer onClick={switchSide}>
      <Inner visibleSide={visibleSide}>
        <CardFront>{sideA}</CardFront>
        <CardBack>{sideB}</CardBack>
      </Inner>
    </CardContainer>
  );
};
