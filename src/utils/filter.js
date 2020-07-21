export const filterCardsByTitle = (title, cards = []) =>
  cards.filter((card) => card.title.includes(title));

export const filterCardsByTags = (tags, cards = []) => {
  if (tags.length === 0) {
    return cards;
  }

  return cards.filter((card) => tags.includes(card.tag));
};

// TODO: refactor this code to consume less memory
export const findCard = (board, cardId) =>
  board.reduce((acc, curr) => {
    const currentCards = curr.cards;
    const findCard = currentCards.filter(
      (currentCard) => currentCard._id === cardId
    );

    if (findCard.length > 0) {
      return {
        column: curr,
        card: findCard[0],
      };
    }

    return {
      ...acc,
    };
  }, {});

export const removeCard = (board, column, card) =>
  board[column.index].cards.filter(
    (cardMutated) => cardMutated._id !== card._id
  );
