import { Card } from '../types/Card';

const apiUrl = 'http://localhost:4000/';
const headers = { 'Content-Type': 'application/json' };

export const saveNewCard = ({ sideA, sideB, tags }: Card) =>
  fetch(apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: `mutation ($sideA: String! $sideB: String! $tags: [String]!) {
      createCard(sideA: $sideA sideB: $sideB tags: $tags) {
        id
        sideA
        sideB
        tags
      }
    }`,
      variables: JSON.stringify({
        sideA: sideA,
        sideB: sideB,
        tags: tags,
      }),
    }),
  });

export const getCards = () => {
  return fetch(apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query: '{ allCards { id sideA sideB tags} }' }),
  })
    .then((response) => response.json())
    .then(({ data }) => data);
};
