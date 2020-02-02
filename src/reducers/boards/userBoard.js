import { boardItems } from "../../TestingData/Boards/boardItems";

const userBoardReducer = (state = boardItems, { type, payload, ...args }) => {
  // avoid mutating state, always create a copy
  let newState = state;
  let task;
  let lane;
  switch (type) {
    case "SET_USER_BOARD":
      return payload;
    case "ADD_TASK_TO_LANE":
      lane = findLane(newState, payload.lane);
      lane.tasks = [...lane.tasks, payload.newTask]
      return [...newState]
    case "ADD_LANE_TO_BOARD":
      newState = [...newState, payload]
      return newState
    case "SET_USER_BOARD_TASK":
      
      let newLaneId = args['newLaneId'];
      if (newLaneId) {
        for(let i = 0; i<payload.length; i++) {
          if (payload[i].laneId !== newLaneId) {
            payload[i].laneId = newLaneId
            
          }
        };
        lane = findLane(newState, newLaneId);
        lane.tasks = payload
      }

      return [...newState]
    case "UPDATE_USER_BOARD_TASK":
      // get list of current boards and find the one to update
      // passing all lanes, the land that needs to be found, and the task that needs to be found
      task = getTask(newState, payload.lane, payload.task);
      task.name = payload.name;
      return newState;
    case "ARCHIVE_USER_BOARD_TASK":
      lane = findLane(newState, payload.lane);
      task = lane.tasks.filter(l => l.id !== payload.task);
      newState[newState.indexOf(lane)].tasks = task
      return [...newState];
    default:
      return state;
  }
};

const findLane = (lanes, laneID) => {
  return lanes.find(l => l.id === laneID);
};
const findTask = (board, task) => {
  return board.tasks.find(bT => bT.id === task);
};

const getTask = (lanes, laneID, taskID) => {
  const theBoard = findLane(lanes, laneID);
  const task = findTask(theBoard, taskID);
  return task;
};

export default userBoardReducer;
