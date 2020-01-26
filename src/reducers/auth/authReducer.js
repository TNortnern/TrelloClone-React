const authReducer = (state = null, { type, payload }) => {
  let newState = state;
  switch (type) {
    case "ADD_NEW_BOARD":
      newState.involvedBoards = [...newState.involvedBoards, payload.id];
      return newState;
    case "SET_USER":
      return payload;

    default:
      return state;
  }
};

export default authReducer;
