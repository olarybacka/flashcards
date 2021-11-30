import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Card, CardData } from '../types/Card';

interface CardState {
  cards: Card[];
  addCard: (card: CardData) => void;
  removeCard: (id: string) => void;
}

export const useStore = create<CardState>((set) => ({
  cards: [],
  addCard: ({sideA, sideB}: CardData) => {
    set((state) => ({
      cards: [
        ...state.cards,
        {
          id: uuidv4(),
          sideA,
          sideB,
        } as Card,
      ],
    }));
  },
  removeCard: (id) => {
    set((state) => ({
      cards: state.cards.filter((card) => card.id !== id),
    }));
  },
}));