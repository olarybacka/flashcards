import React from 'react'
import { CardInterface } from './interfaces'

export const Card: React.FC<CardInterface> = ({ title }) => (
  <div className="card">
    <div className="title">{title}</div>
  </div>
)
