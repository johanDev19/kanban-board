import React, { useEffect, useState, useContext } from "react";

import Column from "./../../components/Column";
import Card from "./../../components/Card";
import { API_URL } from "./../../utils/constants";

import { BoardColumnContainer } from "./styles";
import { Context } from "../../context/kanba";

export default () => {
  const { state, dispatch } = useContext(Context);
  const [kanbaCards, setKanbaCards] = useState(state.cards);

  const filterCardsByTitle = title =>
    state.cards.filter(card => card.title.includes(title));

  const filterCardsByTags = tags => {
    if (tags.length === 0) {
      return state.cards;
    }

    return state.cards.filter(card => tags.includes(card.tag));
  };

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setKanbaCards(data.cards);
        dispatch({
          type: "SET_CARDS",
          payload: data.cards
        });
      });
  }, []);

  useEffect(() => {
    setKanbaCards(filterCardsByTitle(state.searchValue));
  }, [state.searchValue]);

  useEffect(() => {
    setKanbaCards(filterCardsByTags(state.filterValue));
  }, [state.filterValue]);

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
        label={kanbaCards.length}
      >
        {kanbaCards.map((card, index) => (
          <Card
            key={index}
            id={card._id}
            isDraggable={card.isDraggable.toString()}
            title={card.title}
            description={card.description}
            tag={card.tag}
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
