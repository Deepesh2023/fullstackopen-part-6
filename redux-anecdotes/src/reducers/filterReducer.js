const filterReducer = (state = "", action) => {
  if (action.type === "FILTER") {
    return action.payload;
  }
  return state;
};

export const textFilter = (text) => {
  return {
    type: "FILTER",
    payload: text,
  };
};

export default filterReducer;
