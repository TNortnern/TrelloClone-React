const userBoardsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "SET_USER_BOARDS":
      return payload;
    case "ADD_NEW_BOARD":
      return [...state, payload]
    default:
      return state;
  }
};

export default userBoardsReducer;
