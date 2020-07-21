import React, { useState } from "react";
import PropTypes from "prop-types";

import Column from "./../../components/Column";
import Card from "./../../components/Card";
import {
  handleDragOver,
  handleOnDrop,
} from "./../../utils/dragAndDrop";
import {useCardsPosition} from './../../hook/useCards'

import { BoardColumnContainer } from "./styles";

const Board = ({ board }) => {
  const {changeCardPosition} = useCardsPosition();
  const [cardId, setCardId] = useState(null);

  const handleDragStart = (e) => {
    setCardId(e.target.id)
  }
  
  const handleOnDropWrapper = (e) => {
    const columnId = e.target.id;
    const multipleCards = document.querySelectorAll('[data-selected="true"]');

    if(multipleCards.length > 0) {
      return multipleCards.forEach(card => changeCardPosition(card.id, columnId))
    }

    changeCardPosition(cardId, columnId)

    return handleOnDrop(e)
  }

  return (
    <BoardColumnContainer>
      {board.map((column) => (
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
