import React from "react";

import Column from "./../../components/Column";
import { BoardColumnContainer } from "./styles";
import Card from "./../../components/Card";

import { cardsData } from "./../../assets/data/kanbaCardList";

export default () => {
  const handleDragStart = e => {
    const target = e.target;

    e.dataTransfer.setData("card-reference", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const handleDragOver = e => {
    e.stopPropagation();
  };

  const handleOnDrop = e => {
    e.preventDefault();

    const cardId = e.dataTransfer.getData("card-reference");
    const card = document.getElementById(cardId);

    card.style.display = "block";

    e.target.appendChild(card);
  };

  return (
    <BoardColumnContainer>
      <Column
        title="Requested"
        id="column-1"
        handleOnDrop={handleOnDrop}
        handleOnDragOver={e => e.preventDefault()}
        labelColor="#D8D8D8"
        label={cardsData.length}
      >
        {cardsData.map((card, index) => (
          <Card
            key={index}
            id={card._id}
            isDraggable={card.isDraggable.toString()}
            title={card.title}
            description={card.description}
            tags={card.tags}
            dueDate={card.dueDate}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
          />
        ))}
      </Column>
      <Column
        title="Edits Requested"
        id="column-2"
        handleOnDrop={handleOnDrop}
        handleOnDragOver={e => e.preventDefault()}
        labelColor="#FFCCD3"
        label="0"
      ></Column>
      <Column
        title="In Revision"
        id="column-3"
        handleOnDrop={handleOnDrop}
        handleOnDragOver={e => e.preventDefault()}
        labelColor="#FBEDCE"
        label="0"
      ></Column>
      <Column
        title="Pending Approval"
        id="column-4"
        handleOnDrop={handleOnDrop}
        handleOnDragOver={e => e.preventDefault()}
        labelColor="#D1E4F9"
        label="0"
      ></Column>
      <Column
        title="Pending Implementation"
        id="column-5"
        handleOnDrop={handleOnDrop}
        handleOnDragOver={e => e.preventDefault()}
        labelColor="#FEDFD0"
        label="0"
      ></Column>
    </BoardColumnContainer>
  );
};
