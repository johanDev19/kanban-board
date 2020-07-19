import React from "react";

import Icon from "./../Icon";
import { SearchContainer, SearchInput } from "./styles";

import searchIcon from "./../../../assets/icons/search-icon.svg";

export default ({ icon }) => {
  return (
    <SearchContainer>
      <Icon width={18} marginRight={9} src={searchIcon} />

      <SearchInput />
    </SearchContainer>
  );
};
