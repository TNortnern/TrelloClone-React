
const taskReducer = (state = {}, { type, payload }) => {
  let newState = state;
  switch (type) {
    case "STORE_TASK_FOR_MODAL":
      return payload;
    case "UPDATE_TASK":
      newState['checklistItems'] = payload['checklistItems']
      return newState
    default:
      return state;
  }
};

export default taskReducer;
