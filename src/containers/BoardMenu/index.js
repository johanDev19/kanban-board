import React from "react";

import MenuList from "./../../components/MenuList";
import Icon from "../../components/Ui/Icon";
import { BoardMenuContainer, BoardTitleContainer, BoardTitile } from "./styles";

import ayesIcon from "./../../assets/icons/ayes-icon.svg";

export default () => {
  return (
    <BoardMenuContainer>
      <BoardTitleContainer>
        <Icon width={22} src={ayesIcon} marginRight={7} />
        <BoardTitile>Statuses</BoardTitile>
      </BoardTitleContainer>
      <MenuList />
    </BoardMenuContainer>
  );
};
