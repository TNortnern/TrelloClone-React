import authReducer from './auth/authReducer'
import { combineReducers } from "redux";
import errorsReducer from './errors';
import userBoardReducer from './boards/userBoard';
import userBoardsReducer from './boards/userBoards';
import usersReducer from './users/usersReducer';

const allReducers = combineReducers({
  user: authReducer,
  errors: errorsReducer,
  userBoards: userBoardsReducer,
  userBoard: userBoardReducer,
  users: usersReducer
});

export default allReducers;
