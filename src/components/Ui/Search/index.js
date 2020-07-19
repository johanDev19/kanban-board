import React from "react";
import PropTypes from "prop-types";

import { SearchContainer, SearchInput, CloseButton } from "./styles";

const Search = ({ toggle, onSearchChange }) => {
  return (
    <SearchContainer>
      <SearchInput autoFocus onChange={e => onSearchChange(e.target.value)} />
      <CloseButton onClick={toggle}>x</CloseButton>
    </SearchContainer>
  );
};

Search.propType = {
  toggle: PropTypes.number
};

export default Search;
