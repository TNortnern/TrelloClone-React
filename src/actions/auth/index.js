import { User } from "../../TestingData/users";


export const login = user => async (dispatch, getState) => {
  // if user is already logged in
  if (getState.user) {
    return;
  }
  const res = new User(user.email, user.password);
  if (typeof res != "object") {
    dispatch({ type: "SET_ERRORS", payload: 'Invalid Login Credentials' });
    return;
  }
  dispatch({ type: "SET_ERRORS", payload: [] });
  dispatch({ type: "SET_USER", payload: res });
};

// export const register = user => async (dispatch, getState) => {
//   if (getState.user) {
//     return;
//   }
//   try {
//     const response = await local.post("/register", user);
//   } catch (err) {
//     console.err(err)
//   }
//   // if credentials weren't correct or if validation failed
//   if (typeof response.data != "object") {
//     // dispatch({ type: "SET_ERRORS", payload: response.data });
//     dispatch({ type: "SET_ERRORS", payload: 'Incorrect Credentials' });
//     return;
//   }
//   dispatch({ type: "SET_USER", payload: response.data });
// };
export const register = user => (dispatch, getState) => {
  if (getState.user) {
    return;
  }
  const res = new User(user.email, user.password);
  // if credentials weren't correct or if validation failed
  if (typeof res != "object") {
    dispatch({ type: "SET_ERRORS", payload: 'Account already registered.' });
    return;
  }
  // create and set user
  dispatch({ type: "CREATE_USER", payload: res });
};

export const resetErrors = () => {
  return {
    type: "SET_ERRORS",
    payload: []
  };
};
