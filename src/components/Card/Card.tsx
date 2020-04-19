import React from 'react'

interface CardProps {
  title: string;
}

export const Card: React.FC<CardProps> = ({ title }) => (
  <div className="card">
    <div className="title">{title}</div>
  </div>
)
