import React from "react";
import PropTypes from "prop-types";

import Column from "./../../components/Column";
import Card from "./../../components/Card";
import {
  handleDragOver,
  handleOnDrop,
  handleDragStart,
} from "./../../utils/dragAndDrop";

import { BoardColumnContainer } from "./styles";

const Board = ({ board }) => {
  return (
    <BoardColumnContainer>
      {board.map((column) => (
        <Column
          title={column.title}
          id={column._id}
          handleOnDrop={handleOnDrop}
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
