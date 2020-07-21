import React, { Fragment, useContext, useEffect } from "react";

import { Context } from "./../../context/kanba";
import { getBoard } from "./../../services/kanba";
import BoardMenu from "./../BoardMenu";
import BoardColumns from "./../BoardColumns";

export default () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    getBoard().then((data) => {
      dispatch({
        type: "SET_BOARD",
        payload: data,
      });
    })
  }, [dispatch])

  return (
    <Fragment>
      <BoardMenu />
      <BoardColumns board={state.board} />
    </Fragment>
  );
};
