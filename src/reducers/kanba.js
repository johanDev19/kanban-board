const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_BOARD":
      return {
        ...state,
        board: action.payload,
      };
    case "REMOVE_BOARD":
      return {
        ...state,
        board: [],
      };
    case "SET_SEARCH_VALUE":
      return {
        ...state,
        searchValue: action.payload,
      };
    case "REMOVE_SEARCH_VALUE":
      return {
        ...state,
        searchValue: null,
      };
    case "SET_FILTER_VALUE":
      return {
        ...state,
        filterValue: action.payload,
      };
    case "REMOVE_FILTER_VALUE":
      return {
        ...state,
        filterValue: [],
      };
    default:
      return state;
  }
};

export default Reducer;
