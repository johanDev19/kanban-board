import React, {useEffect, useContext} from "react";
import PropTypes from "prop-types";

import {Context} from './../../../context/kanba'
import { SearchContainer, SearchInput, CloseButton } from "./styles";

const Search = ({ toggle, onSearchChange }) => {
  const {dispatch} = useContext(Context)

  useEffect(() => {
    return () => {
      dispatch({
        type: 'REMOVE_SEARCH_VALUE',
      })
    }
  }, [dispatch])

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
