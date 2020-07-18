import React from "react";

import { ColumnContainer, ColumnTitle, ColumnTitleContainer } from "./styles";
import Label from "./../Ui/Label";

export default ({ children, title, id, handleOnDrop, handleOnDragOver }) => {
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
