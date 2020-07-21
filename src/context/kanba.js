import React, { createContext, useReducer } from "react";
import Reducer from "./../reducers/kanba";

const initialStore = {
  board: [],
  searchValue: null,
  filterValue: []
};

const Context = createContext(initialStore);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialStore);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Store, Context };
