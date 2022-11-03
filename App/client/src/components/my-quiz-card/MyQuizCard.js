import React from "react";
import Card from "../UI/Card";

import "./myquizcard.css";

const MyQuizCard = (props) => {
  return (
    <div className="my-quiz-card">
      <Card>
        <div className="my-quiz-container">
          <div className="my-quiz-container-left">{props.myQuiz.quizName}</div>
          <div className="my-quiz-container-right">
            <div
              className="my-quiz-container-right-icons"
              onClick={props.editQuizHanlder}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <div
              className="my-quiz-container-right-icons"
              onClick={props.scoreCardHandler}
            >
              <i className="fa-solid fa-users"></i>
            </div>
            <div
              className="my-quiz-container-right-icons"
              onClick={props.addUsersHandler}
            >
              <i className="fa-solid fa-user-plus"></i>
            </div>
            <div
              className="my-quiz-container-right-icons"
              onClick={props.addUsersHandler}
            >
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MyQuizCard;
