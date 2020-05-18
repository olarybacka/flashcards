import React, { useState } from 'react'
import { Item } from './interfaces'
import { styles } from './styles'

export const CardItem: React.FC<Item> = ({ card: { sideA, sideB } }) => {
  const [showedSide, setShowedSide] = useState(sideA)
  const switchSide = () => {
    setShowedSide(showedSide === sideA ? sideB : sideA)
  }
  return (
    <div className={styles.card} onClick={switchSide}>
      <div className={styles.title}>{showedSide}</div>
    </div>
  )
}
