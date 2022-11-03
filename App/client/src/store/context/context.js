import React, { createContext, useReducer } from "react";
// import { shuffleAnswers } from "./helpers";

const initialState = {
  quiz: {},
  currentQuestionIndex: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_QUIZ": {
      // console.log(action.data);
      return {
        ...state,
        quiz: action.data,
      };
    }
    case "NEXT_QUESTION": {
      let maxLength = false;
      if (state.quiz.quizQuestions.length === state.currentQuestionIndex + 1) {
        maxLength = true;
      }

      const currentQuestionIndex = maxLength
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      return {
        ...state,
        currentQuestionIndex,
      };
    }
    case "PREV_QUESTION": {
      let minLength = false;
      if (state.currentQuestionIndex === 0) {
        minLength = true;
      }

      const currentQuestionIndex = minLength
        ? state.currentQuestionIndex
        : state.currentQuestionIndex - 1;

      return {
        ...state,
        currentQuestionIndex,
      };
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
