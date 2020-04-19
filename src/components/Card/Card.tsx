import React from 'react'
import { CardInterface } from './interfaces'
import { styles } from './styles'

export const Card: React.FC<CardInterface> = ({ title }) => (
  <div className={styles.card}>
    <div className={styles.title}>{title}</div>
  </div>
)
