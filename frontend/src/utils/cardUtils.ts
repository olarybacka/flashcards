export const formatCards = (cards: string) => {
  const pairs = cards.split('\n');
  let splitter = '';
  if (pairs.every((e) => e.includes('='))) {
    splitter = '=';
  } else if (pairs.every((e) => e.includes('-'))) {
    splitter = '-';
  } else if (pairs.every((e) => e.includes(':'))) {
    splitter = ':';
  }

  return pairs.map((e) => {
    const [sideA, sideB] = e.split(splitter);
    return { sideA, sideB };
  });
};
