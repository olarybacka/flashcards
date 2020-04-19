import React from 'react'
import { Card } from './Card'
import { CardInterface } from './interfaces'

const cards: [CardInterface] = [{ title: 'test' }]

export const CardContainer: React.FC = () => (
  <div>
    <div className="title">
      {cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  </div>
)
