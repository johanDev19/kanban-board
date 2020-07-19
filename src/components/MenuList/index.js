import React, { Fragment } from "react";

import Icon from "./../Ui/Icon";
import { MenuContainer, MenuItem } from "./styles";

import filterIcon from "./../../assets/icons/filter-icon.svg";
import sortIcon from "./../../assets/icons/sort-icon.svg";
import searchIcon from "./../../assets/icons/search-icon.svg";
import Search from "../Ui/Search";

export default () => {
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
          <Search icon="search" />
          {/*<Icon width={18} marginRight={9} src={searchIcon} />
          Search*/}
        </MenuItem>
      </MenuContainer>
    </Fragment>
  );
};
