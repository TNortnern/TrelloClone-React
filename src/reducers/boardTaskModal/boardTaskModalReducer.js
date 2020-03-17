
const boardTaskModalReducer = (state = false, { type, payload }) => {
    switch (type) {
      case "SET_MODAL_VISIBILITY":
        return payload;
      default:
        return state;
    }
  };
  
  export default boardTaskModalReducer;