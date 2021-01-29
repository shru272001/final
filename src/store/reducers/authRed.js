const initstate = {
  authError: null,
};
const authRed = (state = initstate, action) => {
  switch (action.type) {
    case "LOGIN_ERR":
      return {
        ...state,
        authError: "Oops Check the Username Or Password",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: "Login success, Here We go!!",
      };
    case "SIGNOUT_SUCCESS":
      return state;
    default:
      return state;
  }
};
export default authRed;
