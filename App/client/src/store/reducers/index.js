import { combineReducers } from "redux";

import { myQuizReducer, attemptQuizReducer } from "./quizzesReducer";
import user from "./userReducer";

export const reducers = combineReducers({
  attemptQuizReducer,
  myQuizReducer,
  user,
});
