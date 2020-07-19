import React, { useContext } from "react";

import { Context } from "./../../context/kanba";

import MenuList from "./../../components/MenuList";
import Icon from "../../components/Ui/Icon";
import { BoardMenuContainer, BoardTitleContainer, BoardTitile } from "./styles";

import ayesIcon from "./../../assets/icons/ayes-icon.svg";

export default () => {
  const kanbaContext = useContext(Context);
  console.log(kanbaContext);
  const handleFilter = value =>
    kanbaContext.dispatch({
      type: "SET_FILTER_VALUE",
      payload: value
    });

  const handleSearch = value =>
    kanbaContext.dispatch({
      type: "SET_SEARCH_VALUE",
      payload: value
    });

  return (
    <BoardMenuContainer>
      <BoardTitleContainer>
        <Icon width={22} src={ayesIcon} marginRight={7} />
        <BoardTitile>Statuses</BoardTitile>
      </BoardTitleContainer>
      <MenuList handleFilter={handleFilter} handleSearch={handleSearch} />
    </BoardMenuContainer>
  );
};
