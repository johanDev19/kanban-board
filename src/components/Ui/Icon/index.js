import React from "react";
import PropTypes from "prop-types";

import { IconContainer } from "./styles";

const Icon = ({ width, src, marginRight }) => {
  return <IconContainer src={src} width={width} marginRight={marginRight} />;
};

Icon.propTypes = {
  width: PropTypes.number,
  src: PropTypes.string,
  marginRight: PropTypes.number
};

export default Icon;
