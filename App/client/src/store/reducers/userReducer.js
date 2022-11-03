import * as actionType from "../constants/actionTypes";

const userReducer = (
  state = { userData: null, userPresent: false },
  action
) => {
  switch (action.type) {
    case actionType.LOGINSUCESS:
      // console.log(action?.data.result);
      localStorage.setItem(
        "token",
        JSON.stringify(action?.data.result.userToken)
      );

      return {
        ...state,
        userData: action.data.result,
        userPresent: true,
        loading: false,
        errors: null,
      };
    case actionType.LOGOUT:
      localStorage.clear();

      return {
        ...state,
        userPresent: false,
        userData: null,
        loading: false,
        errors: null,
      };
    default:
      return state;
  }
};

export default userReducer;
