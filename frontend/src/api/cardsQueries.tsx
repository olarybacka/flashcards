import { Card } from '../types/Card';

const apiUrl = 'http://localhost:4000/';
const headers = { 'Content-Type': 'application/json' };

export const saveNewCard = ({ sideA, sideB }: Card) =>
  fetch(apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: `mutation ($sideA: String! $sideB: String!) {
      createCard(sideA: $sideA sideB: $sideB) {
        id
        sideA
        sideB
      }
    }`,
      variables: JSON.stringify({
        sideA: sideA,
        sideB: sideB,
      }),
    }),
  });

export const getCards = () => {
  return fetch(apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query: '{ allCards { id sideA sideB} }' }),
  })
    .then((response) => response.json())
    .then(({ data }) => data);
};
