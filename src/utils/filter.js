export const filterCardsByTitle = (title, cards = []) =>
  cards.filter((card) => card.title.includes(title));

export const filterCardsByTags = (tags, cards = []) => {
  if (tags.length === 0) {
    return cards;
  }

  return cards.filter((card) => tags.includes(card.tag));
};
