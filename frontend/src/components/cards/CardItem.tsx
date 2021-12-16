import React, { useState } from 'react';
import { Card } from '../../types/Card';
import { CardContainer, CardFront, CardBack, Inner } from './CardItem.styled';

export const CardItem: React.FC<{ card: Card }> = ({
  card: { sideA, sideB, tags },
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
      {!!tags.length && <div>tags: {tags.map(tag => <span>{tag} </span>)}  </div>}
    </CardContainer>
  );
};
