import React from "react";
import PropTypes from "prop-types";

import { formatDate } from "./../../helpers/date";

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

const Card = ({
  id,
  title,
  description,
  tags = [],
  dueDate,
  handleDragStart,
  handleDragOver,
  isDraggable
}) => {
  return (
    <CardContainer
      id={id}
      draggable={isDraggable}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
    >
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardAssigneeContainer>
        <Icon src={shapeIcon} width={16} marginRight={12} />
        <CardAssigneeName>{tags.join(",")}</CardAssigneeName>
      </CardAssigneeContainer>
      <CardDueDateContainer>
        <Icon src={calendarIcon} width={16} marginRight={12} />
        <CardDueDate>{formatDate(dueDate)}</CardDueDate>
      </CardDueDateContainer>
    </CardContainer>
  );
};

Card.defaultProps = {
  title: "undefined title",
  description: "undefined description",
  tags: [],
  dueData: new Date()
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  dueDate: PropTypes.number,
  handleDragStart: PropTypes.func.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  isDraggable: PropTypes.string.isRequired
};

export default Card;
