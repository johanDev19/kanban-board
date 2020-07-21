import React, { useEffect, useState, useContext } from "react";

import Column from "./../../components/Column";
import Card from "./../../components/Card";
import {
  handleDragOver,
  handleOnDrop,
  handleDragStart,
} from "./../../utils/dragAndDrop";
import { filterCardsByTags, filterCardsByTitle } from "./../../utils/filter";
import { getCards } from "./../../services/kanba";

import { BoardColumnContainer } from "./styles";
import { Context } from "../../context/kanba";

export default () => {
  const { state, dispatch } = useContext(Context);
  const [kanbaCards, setKanbaCards] = useState(state.cards);

  useEffect(() => {
    getCards().then((data) => {
      setKanbaCards(data.cards);
      dispatch({
        type: "SET_CARDS",
        payload: data.cards,
      });
    });
  }, [dispatch]);

  useEffect(() => {
    setKanbaCards(filterCardsByTitle(state.searchValue, state.cards));
  }, [state.cards, state.searchValue]);

  useEffect(() => {
    setKanbaCards(filterCardsByTags(state.filterValue, state.cards));
  }, [state.cards, state.filterValue]);

  return (
    <BoardColumnContainer>
      <Column
        title="Requested"
        id="column-1"
        handleOnDrop={handleOnDrop}
        handleOnDragOver={(e) => e.preventDefault()}
        labelColor="#D8D8D8"
        label={kanbaCards.length}
      >
        {kanbaCards.map((card, index) => (
          <Card
            key={index}
            id={card._id}
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
        handleOnDragOver={(e) => e.preventDefault()}
        labelColor="#FFCCD3"
        label="0"
      ></Column>
      <Column
        title="In Revision"
        id="column-3"
        handleOnDrop={handleOnDrop}
        handleOnDragOver={(e) => e.preventDefault()}
        labelColor="#FBEDCE"
        label="0"
      ></Column>
      <Column
        title="Pending Approval"
        id="column-4"
        handleOnDrop={handleOnDrop}
        handleOnDragOver={(e) => e.preventDefault()}
        labelColor="#D1E4F9"
        label="0"
      ></Column>
      <Column
        title="Pending Implementation"
        id="column-5"
        handleOnDrop={handleOnDrop}
        handleOnDragOver={(e) => e.preventDefault()}
        labelColor="#FEDFD0"
        label="0"
      ></Column>
    </BoardColumnContainer>
  );
};
