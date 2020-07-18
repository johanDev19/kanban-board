import React from "react";

import Column from "./../../components/Column";
import { BoardColumnContainer } from "./styles";
import Card from "./../../components/Card";

export default () => {
  return (
    <BoardColumnContainer>
      <Column title="Requested">
        <Card />
      </Column>
      <Column title="Edits Requested">
        <Card />
      </Column>
      <Column title="In Revision">
        <Card />
      </Column>
      <Column title="Prending Approval">
        <Card />
      </Column>
      <Column title="Pending Implementation">
        <Card />
      </Column>
      <Column title="Implemented">
        <Card />
      </Column>
    </BoardColumnContainer>
  );
};
