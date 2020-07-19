import React from "react";
import PropTypes from "prop-types";

import Icon from "./../Ui/Icon";
import { FilterContainer, Result, ItemsContainer, Item } from "./styles";

import filterIcon from "./../../assets/icons/filter-icon.svg";
import checkIcon from "./../../assets/icons/check-icon.svg";
import unCheckIcon from "./../../assets/icons/uncheck-icon.svg";

const Filter = ({ title, items }) => {
  return (
    <FilterContainer>
      <Icon width={18} marginRight={9} src={filterIcon} />
      {title}
      <Result>
        <ItemsContainer>
          <Item>
            <Icon src={checkIcon} width={20} marginRight={10} />
            Longform
          </Item>
          <Item>
            <Icon src={checkIcon} width={20} marginRight={10} />
            Longform
          </Item>
        </ItemsContainer>
      </Result>
    </FilterContainer>
  );
};

Filter.defaultProps = {
  items: []
};

Filter.propType = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default Filter;
