import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "./../../context/kanba";
import Icon from "./../Ui/Icon";
import {
  FilterContainer,
  Options,
  ItemsContainer,
  Item,
  Title,
} from "./styles";

import filterIcon from "./../../assets/icons/filter-icon.svg";
import checkIcon from "./../../assets/icons/check-icon.svg";
import unCheckIcon from "./../../assets/icons/uncheck-icon.svg";

const Filter = ({ title, onFilterChange, options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { dispatch } = useContext(Context);

  useEffect(() => {
    return () => {
      dispatch({
        type: "REMOVE_SEARCH_VALUE",
      });
    };
  }, [dispatch]);

  const toggleSelectedOption = (option) =>
    selectedOptions.filter((selectedOption) => selectedOption !== option);

  const handleSelectedOptions = (option) => {
    let selectedOptionsMutated = selectedOptions;

    if (selectedOptions.includes(option)) {
      selectedOptionsMutated = toggleSelectedOption(option);
    } else {
      selectedOptionsMutated.push(option);
    }

    onFilterChange([...selectedOptionsMutated]);

    return setSelectedOptions([...selectedOptionsMutated]);
  };

  const toggleOptions = () => {
    if (!showOptions === false) {
      setSelectedOptions([]);

      dispatch({
        type: "REMOVE_FILTER_VALUE",
      });
    }

    setShowOptions(!showOptions);
  };

  return (
    <FilterContainer>
      <Title onClick={toggleOptions}>
        <Icon width={18} marginRight={9} src={filterIcon} />
        {title}
      </Title>

      {showOptions && (
        <Options>
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
        </Options>
      )}
    </FilterContainer>
  );
};

Filter.defaultProps = {
  options: [],
};

Filter.propType = {
  title: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
  options: PropTypes.array,
};

export default Filter;
