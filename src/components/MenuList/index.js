import React, { Fragment, useState } from "react";

import Icon from "./../Ui/Icon";
import { MenuContainer, MenuItem, SearchMenuItemContainer } from "./styles";

import filterIcon from "./../../assets/icons/filter-icon.svg";
import sortIcon from "./../../assets/icons/sort-icon.svg";
import searchIcon from "./../../assets/icons/search-icon.svg";
import Search from "../Ui/Search";

export default () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchBar = () => setShowSearchInput(!showSearchInput);

  return (
    <Fragment>
      <MenuContainer>
        <MenuItem>
          <Icon width={18} marginRight={9} src={filterIcon} />
          Filter
        </MenuItem>
        <MenuItem>
          <Icon width={18} marginRight={9} src={sortIcon} />
          Sort
        </MenuItem>
        <MenuItem>
          {showSearchInput && <Search icon="search" toggle={toggleSearchBar} />}

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
