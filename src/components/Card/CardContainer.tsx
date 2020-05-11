import React from 'react'
import { CardItem } from './CardItem'
import { Card } from './interfaces'

const cards: [Card] = [{ title: 'test' }]

export const CardContainer: React.FC = () => (
  <div>
    <div className="title">
      {cards.map((card, i) => (
        <CardItem key={i} {...{ card }} />
      ))}
    </div>
  </div>
)
