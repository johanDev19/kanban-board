import React from "react";
import PropTypes from "prop-types";

import { LabelContainer } from "./styles";

const Label = ({ children }) => {
  return <LabelContainer>{children}</LabelContainer>;
};

Label.propTypes = {
  children: PropTypes.node
};

export default Label;
