import React, { useContext } from "react";

import { Context } from "./../../context/kanba";

import MenuList from "./../../components/MenuList";
import Icon from "../../components/Ui/Icon";
import { BoardMenuContainer, BoardTitleContainer, BoardTitile } from "./styles";

import ayesIcon from "./../../assets/icons/ayes-icon.svg";

export default () => {
  const {dispatch} = useContext(Context);

  const handleFilter = value =>
    dispatch({
      type: "SET_FILTER_VALUE",
      payload: value
    });

  const handleSearch = value => {
    dispatch({
      type: "SET_SEARCH_VALUE",
      payload: value
    });
  };

  return (
    <BoardMenuContainer>
      <BoardTitleContainer>
        <Icon width={22} src={ayesIcon} marginRight={7} />
        <BoardTitile>Statuses</BoardTitile>
      </BoardTitleContainer>
      <MenuList
        handleFilter={handleFilter}
        handleSearch={handleSearch}
        filterOptions={[]}
      />
    </BoardMenuContainer>
  );
};
