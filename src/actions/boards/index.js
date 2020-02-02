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

export const toggleTaskEditModalVisibility = payload => {
  return {
      type: 'TOGGLE_TASK_EDIT_MODAL_VISIBILITY',
      payload
  }
}

export const setModalVisibility = payload => {
  return {
    type: 'SET_MODAL_VISIBILITY',
    payload
  }
}

export const updateTask = payload => {
  return {
    type: 'UPDATE_TASK',
    payload
  }
}

export const setUserBoardTask = (task, newLaneIdForTask) => {
  return {
    type: "SET_USER_BOARD_TASK",
    payload: task,
    newLaneId: newLaneIdForTask
  };
};

export const storeTaskForModal = (payload) => {
  return {
    type: "STORE_TASK_FOR_MODAL",
    payload
  }
}

export const storeLaneForModal = (payload) => {
  return {
    type: "STORE_LANE_FOR_MODAL",
    payload
  }
}

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
