import React from "react";
import PropTypes from "prop-types";

import { ColumnContainer, ColumnTitle, ColumnTitleContainer } from "./styles";
import Label from "./../Ui/Label";

const Column = ({
  children,
  title,
  id,
  handleOnDrop,
  handleOnDragOver,
  labelColor,
  label
}) => {
  return (
    <ColumnContainer
      id={id}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
    >
      <ColumnTitleContainer>
        <Label color={labelColor}>{label}</Label>
        <ColumnTitle>{title}</ColumnTitle>
      </ColumnTitleContainer>
      {children}
    </ColumnContainer>
  );
};

Column.defaultProps = {
  title: "",
  labelColor: "#D8D8D8"
};

Column.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  handleOnDrop: PropTypes.func.isRequired,
  handleOnDragOver: PropTypes.func.isRequired,
  labelColor: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Column;
