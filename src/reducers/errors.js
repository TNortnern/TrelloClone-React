const errorsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "SET_ERRORS":
      return payload;
    default:
      return state;
  }
};

export default errorsReducer
