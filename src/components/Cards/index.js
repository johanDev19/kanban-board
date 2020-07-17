import React from "react";

import {
  CardContainer,
  CardTitle,
  CardDescription,
  CardAssigneeContainer,
  CardAssigneeName,
  CardDueDateContainer,
  CardDueDate,
} from "./styles";

export default () => {
  return (
    <CardContainer>
      <CardTitle>Flow Meter Measurement Errors</CardTitle>
      <CardDescription>https://blog.gesrepair.com/</CardDescription>
      <CardAssigneeContainer>
        <CardAssigneeName>Longform</CardAssigneeName>
      </CardAssigneeContainer>
      <CardDueDateContainer>
        <CardDueDate>09/15/2019</CardDueDate>
      </CardDueDateContainer>
    </CardContainer>
  );
};
