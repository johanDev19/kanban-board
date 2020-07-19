import React, { createContext, useReducer } from "react";
import Reducer from "./../reducers/kanba";

const initialStore = {
  cards: [],
  searchValue: null,
  filterValue: null
};

const Context = createContext(initialStore);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialStore);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Store, Context };
