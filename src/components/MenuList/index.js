import React, { Fragment, useState } from "react";

import Icon from "./../Ui/Icon";
import Search from "../Ui/Search";
import Filter from "./../Filter";
import { MenuContainer, MenuItem, SearchMenuItemContainer } from "./styles";

import sortIcon from "./../../assets/icons/sort-icon.svg";
import searchIcon from "./../../assets/icons/search-icon.svg";

export default ({handleFilter, handleSearch}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchBar = () => setShowSearchInput(!showSearchInput);

  return (
    <Fragment>
      <MenuContainer>
        <MenuItem>
          <Filter title="Filter" onFilterChange={handleFilter} />
        </MenuItem>
        <MenuItem>
          <Icon width={18} marginRight={9} src={sortIcon} />
          Sort
        </MenuItem>
        <MenuItem>
          {showSearchInput && <Search icon="search" toggle={toggleSearchBar} onSearchChange={handleSearch} />}

          {!showSearchInput && (
            <SearchMenuItemContainer onClick={toggleSearchBar}>
              <Icon width={18} marginRight={9} src={searchIcon} />
              Search
            </SearchMenuItemContainer>
          )}
        </MenuItem>
      </MenuContainer>
    </Fragment>
  );
};
