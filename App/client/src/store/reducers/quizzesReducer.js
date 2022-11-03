import * as actionType from "../constants/actionTypes";

export const myQuizReducer = (
  state = {
    myQuizzes: [],
    myQuizPresent: false,
    attemptQuizzes: [],
    attemptQuizPresent: false,
  },
  action
) => {
  switch (action.type) {
    case actionType.FETCH_ALL_MY_QUIZZES:
      // console.log(action?.data);

      return {
        ...state,
        myQuizzes: action?.data,
        myQuizPresent: true,
      };

    case actionType.FETCH_ALL_ATTEMPT_QUIZZES:
      return {
        ...state,
        attemptQuizzes: action?.data,
        attemptQuizPresent: true,
      };
    case actionType.CREATE_NEW_QUIZ:
      console.log(action?.data);

      return {
        ...state,
        myQuizzes: [state.myQuizzes, action?.data],
        myQuizPresent: true,
      };
    default:
      return state;
  }
};

export const attemptQuizReducer = (state = { AttemptQuizzes: [] }, action) => {
  return state;
};
