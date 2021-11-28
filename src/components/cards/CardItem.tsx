import React, { useState } from 'react'
import { Card } from './Card'
import { CardStyled } from './CardStyles.styled'

export const CardItem: React.FC<{card: Card}> = ({ card: { sideA, sideB } }) => {
  const [visibleSide, setVisibleSide] = useState(sideA)
  const switchSide = () => {
    setVisibleSide(visibleSide === sideA ? sideB : sideA)
  }
  return (
    <CardStyled onClick={switchSide}>
      <h2>{visibleSide}</h2>
    </CardStyled>
  )
}
