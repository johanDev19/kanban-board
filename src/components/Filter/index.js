import React, { useState } from "react";
import PropTypes from "prop-types";

import Icon from "./../Ui/Icon";
import { FilterContainer, Result, ItemsContainer, Item, Title } from "./styles";

import filterIcon from "./../../assets/icons/filter-icon.svg";
import checkIcon from "./../../assets/icons/check-icon.svg";
import unCheckIcon from "./../../assets/icons/uncheck-icon.svg";

const Filter = ({ title, onFilterChange, options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleSelectedOption = option =>
    selectedOptions.filter(selectedOption => selectedOption !== option);

  const handleSelectedOptions = option => {
    let selectedOptionsMutated = selectedOptions;

    if (selectedOptions.includes(option)) {
      selectedOptionsMutated = toggleSelectedOption(option);
    } else {
      selectedOptionsMutated.push(option);
    }

    onFilterChange([...selectedOptionsMutated]);

    return setSelectedOptions([...selectedOptionsMutated]);
  };

  return (
    <FilterContainer>
      <Title onClick={() => setShowOptions(!showOptions)}>
        <Icon width={18} marginRight={9} src={filterIcon} />
        {title}
      </Title>

      {showOptions && (
        <Result>
          <ItemsContainer>
            {options.map((option, index) => (
              <Item key={index} onClick={() => handleSelectedOptions(option)}>
                <Icon
                  src={
                    selectedOptions.includes(option) ? checkIcon : unCheckIcon
                  }
                  width={20}
                  marginRight={10}
                />
                {option}
              </Item>
            ))}
          </ItemsContainer>
        </Result>
      )}
    </FilterContainer>
  );
};

Filter.defaultProps = {
  options: []
};

Filter.propType = {
  title: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
  options: PropTypes.array
};

export default Filter;
