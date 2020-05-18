export interface Card {
  sideA: string
  sideB: string
  tags?: [string]
}

export interface Item {
  card: Card
}
