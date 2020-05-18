import React from 'react'
import { CardItem } from './CardItem'
import { Card } from './interfaces'
import { styles } from './styles'

const cards: [Card] = [{ sideA: 'side A', sideB: 'side B' }]

export const CardContainer: React.FC = () => (
  <div className={styles.cardContainer}>
    {cards.map((card, i) => (
      <CardItem key={i} {...{ card }} />
    ))}
  </div>
)
