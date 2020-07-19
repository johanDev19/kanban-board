import React from "react";

import { Store } from "./context/kanba";
import Board from "./containers/Board";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <Store>
      <GlobalStyles />
      <Board />
    </Store>
  );
}

export default App;
