import React from "react";
import PropTypes from "prop-types";

import Icon from "./../Ui/Icon";
import {
  CardContainer,
  CardTitle,
  CardDescription,
  CardAssigneeContainer,
  CardAssigneeName,
  CardDueDateContainer,
  CardDueDate
} from "./styles";

import shapeIcon from "./../../assets/icons/shape-icon.svg";
import calendarIcon from "./../../assets/icons/calendar-icon.svg";

const Card = ({ id, handleDragStart, handleDragOver, isDraggable }) => {
  return (
    <CardContainer
      id={id}
      draggable={isDraggable}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
    >
      <CardTitle>Flow Meter Measurement Errors</CardTitle>
      <CardDescription>https://blog.gesrepair.com/</CardDescription>
      <CardAssigneeContainer>
        <Icon src={shapeIcon} width={16} marginRight={12} />
        <CardAssigneeName>Longform</CardAssigneeName>
      </CardAssigneeContainer>
      <CardDueDateContainer>
        <Icon src={calendarIcon} width={16} marginRight={12} />
        <CardDueDate>09/15/2019</CardDueDate>
      </CardDueDateContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  handleDragStart: PropTypes.func,
  handleDragOver: PropTypes.func,
  isDraggable: PropTypes.string
};

export default Card;
