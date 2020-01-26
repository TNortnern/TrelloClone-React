export const addNewBoard = payload => {
  return {
    type: "ADD_NEW_BOARD",
    payload
  }
}

export const setUserBoard = board => {
  return {
    type: "SET_USER_BOARD",
    payload: board
  };
};

export const addLaneToBoard = payload => {
  return {
      type: 'ADD_LANE_TO_BOARD',
      payload
  }
}

export const addTaskToLane = payload => {
  return {
      type: 'ADD_TASK_TO_LANE',
      payload
  }
}

export const setUserBoardTask = (task, originalLaneIdForTask) => {
  return {
    type: "SET_USER_BOARD_TASK",
    payload: task,
    oldLaneId: originalLaneIdForTask
  };
};

export const updateUserTask = payload => (dispatch, getState) => {
  // check what the user is updating
  if (payload.update) {
    switch (payload.update) {
      case "task_name":
        dispatch({ type: "UPDATE_USER_BOARD_TASK", payload });
        break;
      case "task_archive":
        dispatch({ type: "ARCHIVE_USER_BOARD_TASK", payload });
        break;
      default:
        return;
    }
  }
};

export const setUserBoards = boards => {
  return {
    type: "SET_USER_BOARDS",
    payload: boards
  };
};
