import React from "react";

import { ColumnContainer, ColumnTitle, ColumnTitleContainer } from "./styles";
import Label from "./../Ui/Label";

export default ({ children, title }) => {
  return (
    <ColumnContainer>
      <ColumnTitleContainer>
        <Label>24</Label>
        <ColumnTitle>{title}</ColumnTitle>
      </ColumnTitleContainer>
      {children}
    </ColumnContainer>
  );
};
