import React from "react";
import PropTypes from "prop-types";

import { LabelContainer } from "./styles";

const Label = ({ children, color }) => {
  return <LabelContainer color={color} >{children}</LabelContainer>;
};

Label.propTypes = {
  children: PropTypes.node.isRequired
};

export default Label;
