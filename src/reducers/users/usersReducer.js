import { allUsers } from "../../TestingData/users";
const usersReducer = (state = allUsers, { type, payload }) => {
  switch (type) {
    case "CREATE_USER":
      return [...state, payload];
    default:
      return state;
  }
};

export default usersReducer;
