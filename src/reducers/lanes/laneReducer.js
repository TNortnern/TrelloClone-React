
const laneReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case "STORE_LANE_FOR_MODAL":
        return payload;
      default:
        return state;
    }
  };
  
  export default laneReducer;
  