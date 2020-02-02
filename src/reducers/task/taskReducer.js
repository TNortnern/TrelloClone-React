
const taskReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "STORE_TASK_FOR_MODAL":
      return payload;
    default:
      return state;
  }
};

export default taskReducer;
