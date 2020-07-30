import { useContext } from "react";

import { Context } from "./../context/kanba";
import { findCard, removeCard } from "../utils/filter";

export function useCardsPosition() {
  const { state, dispatch } = useContext(Context);

  const changeCardPosition = (cardId, columnId) => {
    let boardMutated = state.board;
    const columnToMove = state.board.filter(
      column => column._id === columnId
    )[0];
    const { column, card } = findCard(state.board, cardId);

    boardMutated[column.index].cards = removeCard(boardMutated, column, card);
    boardMutated[columnToMove.index].cards.push(card);

    dispatch({
      type: "SET_BOARD",
      payload: boardMutated
    });
  };

  return {
    changeCardPosition
  };
}
