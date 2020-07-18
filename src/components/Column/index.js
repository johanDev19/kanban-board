import React from "react";
import PropTypes from "prop-types";

import { ColumnContainer, ColumnTitle, ColumnTitleContainer } from "./styles";
import Label from "./../Ui/Label";

const Column = ({ children, title, id, handleOnDrop, handleOnDragOver }) => {
  return (
    <ColumnContainer
      id={id}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
    >
      <ColumnTitleContainer>
        <Label>24</Label>
        <ColumnTitle>{title}</ColumnTitle>
      </ColumnTitleContainer>
      {children}
    </ColumnContainer>
  );
};

Column.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  id: PropTypes.string,
  handleOnDrop: PropTypes.func,
  handleOnDragOver: PropTypes.func
};

export default Column;
