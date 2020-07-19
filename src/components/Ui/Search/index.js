import React from "react";
import PropTypes from "prop-types";

import Icon from "./../Icon";
import { SearchContainer, SearchInput } from "./styles";

import searchIcon from "./../../../assets/icons/search-icon.svg";

const Search = ({ toggle }) => {
  return (
    <SearchContainer>
      <Icon width={18} marginRight={9} src={searchIcon} />
      <SearchInput onBlur={toggle} autoFocus />
    </SearchContainer>
  );
};

Search.propType = {
  toggle: PropTypes.number
};

export default Search;
