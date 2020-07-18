import React, { Fragment } from "react";

import BoardMenu from "./../BoardMenu";
import BoardColumns from "./../BoardColumns";

export default () => {
  return (
    <Fragment>
      <BoardMenu />
      <BoardColumns />
    </Fragment>
  );
};
