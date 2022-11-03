import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Question from "./Question";
import "./attemptquiz.css";
import { QuizContext } from "./../../store/context/context";

const AttemptQuiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  let currentQuestionIndex = quizState.currentQuestionIndex;

  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const attemptQuizzes = useSelector(
    (state) => state.myQuizReducer.attemptQuizzes
  );

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  let quiz = attemptQuizzes.find((attemptQuiz) => attemptQuiz._id === path);
  // console.log(quiz.quizQuestions);

  useEffect(() => {
    dispatch({ type: "LOAD_QUIZ", data: quiz });
  }, [quiz, dispatch]);

  const nextQuestionHandler = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const previousQuestionHandler = () => {
    dispatch({ type: "PREV_QUESTION" });
  };

  // console.log(currentQuestionIndex);

  return (
    <div className="quiz-container">
      {/* <div className="quiz-name">{quiz.quizName}</div> */}
      <div className="quiz-status">
        Question {currentQuestionIndex + 1}/{quiz?.quizQuestions?.length}
      </div>
      <div className="quiz-question">
        <Question question={quiz?.quizQuestions[currentQuestionIndex]} />
      </div>
      <div className="quiz-question-navigation">
        <div className="quiz-question-navigation-left">
          <button
            className="quiz-question-navigation-button"
            onClick={previousQuestionHandler}
          >
            previous
          </button>
        </div>
        <div className="quiz-question-navigation-right">
          <button
            className="quiz-question-navigation-button"
            onClick={nextQuestionHandler}
          >
            next
          </button>
        </div>
      </div>
      <div className="quiz-container-footer">
        <button className="quiz-question-submit-button">submit</button>
      </div>
    </div>
  );
};

export default AttemptQuiz;
