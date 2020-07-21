import React, { useState } from "react";
import PropTypes from "prop-types";

import Column from "./../../components/Column";
import Card from "./../../components/Card";
import {
  handleDragOver,
  handleOnDrop,
  handleDragStart,
} from "./../../utils/dragAndDrop";
import {useCardsPosition} from './../../hook/useCards'

import { BoardColumnContainer } from "./styles";

const Board = ({ board }) => {
  const {changeCardPosition} = useCardsPosition();
  const [cardId, setCardId] = useState(null);

  const handleDragStartWrapper = (e) => {
    setCardId(e.target.id)
    
    return handleDragStart(e)
  }
  
  const handleOnDropWrapper = (e) => {
    const columnId = e.target.id;
    changeCardPosition(cardId, columnId)

    return handleOnDrop(e)
  }

  return (
    <BoardColumnContainer>
      {board.map((column) => (
        <Column
          title={column.title}
          id={column._id}
          handleOnDrop={handleOnDropWrapper}
          handleOnDragOver={(e) => e.preventDefault()}
          labelColor={column.label.color}
          label={column.cards.length}
        >
          {column.cards.map((card, index) => (
            <Card
              key={index}
              id={card._id}
              title={card.title}
              description={card.description}
              tag={card.tags}
              dueDate={card.dueDate}
              handleDragStart={handleDragStartWrapper}
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
