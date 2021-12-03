import { CardData } from "../types/Card";
const headers = { 'Content-Type': 'application/json' };

export const saveNewCard = ({ sideA, sideB }: CardData) =>
fetch('http://localhost:4000/', {
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
})

export const getCards = () => {
  fetch('http://localhost:4000/', {
    method: "POST",
    headers,
    body: JSON.stringify({ query: "{ allCards { id sideA sideB} }" }),
  })
    .then((response) => response.json())
    .then(({ data }) => console.log(data));
}
