import React from 'react'
import { Item } from './interfaces'
import { styles } from './styles'

export const CardItem: React.FC<Item> = ({ card: { title } }) => (
  <div className={styles.card}>
    <div className={styles.title}>{title}</div>
  </div>
)
