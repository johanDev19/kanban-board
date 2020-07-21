import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "./../../context/kanba";
import Column from "./../../components/Column";
import Card from "./../../components/Card";
import { handleDragOver, handleOnDrop } from "./../../utils/dragAndDrop";
import { useCardsPosition } from "./../../hook/useCards";

import { BoardColumnContainer } from "./styles";

const Board = ({ board }) => {
  const { state } = useContext(Context);
  const { changeCardPosition } = useCardsPosition();
  const [cardId, setCardId] = useState(null);
  const [finalBoard, setFinalBoard] = useState([]);

  useEffect(() => {
    if (state.searchValue) {
      return setFinalBoard(
        board.map((column) => ({
          ...column,
          cards: column.cards.filter((card) =>
            card.title.includes(state.searchValue)
          ),
        }))
      );
    }

    if (state.filterValue.length > 0) {
      return setFinalBoard(
        board.map((column) => ({
          ...column,
          cards: column.cards.filter((card) =>
          state.filterValue.includes(card.tags)
          ),
        }))
      );
    }

    setFinalBoard(board);
  }, [board, state.filterValue, state.searchValue]);

  const handleDragStart = (e) => {
    setCardId(e.target.id);
  };

  const handleOnDropWrapper = (e) => {
    const columnId = e.target.id;
    const multipleCards = document.querySelectorAll('[data-selected="true"]');

    if (multipleCards.length > 0) {
      return multipleCards.forEach((card) =>
        changeCardPosition(card.id, columnId)
      );
    }

    changeCardPosition(cardId, columnId);

    return handleOnDrop(e);
  };

  return (
    <BoardColumnContainer>
      {finalBoard.map((column) => (
        <Column
          key={column._id}
          title={column.title}
          id={column._id}
          handleOnDrop={handleOnDropWrapper}
          handleOnDragOver={(e) => e.preventDefault()}
          labelColor={column.label.color}
          label={column.cards.length}
        >
          {column.cards.map((card) => (
            <Card
              key={card._id}
              id={card._id}
              title={card.title}
              description={card.description}
              tag={card.tags}
              dueDate={card.dueDate}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
            />
          ))}
        </Column>
      ))}
    </BoardColumnContainer>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired,
};

export default Board;
