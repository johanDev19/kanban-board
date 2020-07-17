import React from "react";

import Icon from './../Ui/Icon'

import {
  CardContainer,
  CardTitle,
  CardDescription,
  CardAssigneeContainer,
  CardAssigneeName,
  CardDueDateContainer,
  CardDueDate,
} from "./styles";

import shapeIcon from './../../assets/icons/shape-icon.svg'
import calendarIcon from './../../assets/icons/calendar-icon.svg'

export default () => {
  return (
    <CardContainer>
      <CardTitle>Flow Meter Measurement Errors</CardTitle>
      <CardDescription>https://blog.gesrepair.com/</CardDescription>
      <CardAssigneeContainer>
        <Icon src={shapeIcon} width="16px" />
        <CardAssigneeName>Longform</CardAssigneeName>
      </CardAssigneeContainer>
      <CardDueDateContainer>
      <Icon src={calendarIcon} width="16px" />

        <CardDueDate>09/15/2019</CardDueDate>
      </CardDueDateContainer>
    </CardContainer>
  );
};
