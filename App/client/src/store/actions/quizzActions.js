import {
  // CREATE_NEW_QUIZ,
  FETCH_ALL_ATTEMPT_QUIZZES,
  FETCH_ALL_MY_QUIZZES,
} from "../constants/actionTypes";
import * as api from "../../api/";

export const getMyQuizzes = (userID) => async (dispatch) => {
  try {
    console.log(userID);
    const { data } = await api.getMyQuizzes(userID);
    dispatch({ type: FETCH_ALL_MY_QUIZZES, data: data });
  } catch (error) {
    console.log(error);
  }
};

export const createNewQuiz = (quiz) => async (dispatch) => {
  try {
    console.log(quiz);
    const { data } = await api.createQuiz(quiz);
    console.log(data);
    // dispatch({ type: CREATE_NEW_QUIZ, data: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAttemptQuizzes = (userID) => async (dispatch) => {
  try {
    const { data } = await api.getAttemptQuizzes(userID);
    dispatch({ type: FETCH_ALL_ATTEMPT_QUIZZES, data: data });
  } catch (error) {
    console.log(error);
  }
};
