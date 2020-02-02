import authReducer from './auth/authReducer'
import { combineReducers } from "redux";
import errorsReducer from './errors';
import userBoardReducer from './boards/userBoard';
import userBoardsReducer from './boards/userBoards';
import usersReducer from './users/usersReducer';
import boardTaskModalReducer from './boardTaskModal/boardTaskModalReducer';
import taskReducer from './task/taskReducer';
import laneReducer from './lanes/laneReducer';

const allReducers = combineReducers({
  user: authReducer,
  errors: errorsReducer,
  userBoards: userBoardsReducer,
  userBoard: userBoardReducer,
  users: usersReducer,
  taskModalVisible: boardTaskModalReducer,
  taskData: taskReducer,
  laneData: laneReducer
});

export default allReducers;
