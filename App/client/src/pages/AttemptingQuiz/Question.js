import React from "react";
import "./Question.css";
import Card from "../../components/UI/Card";
import Answer from "./Answer";

const Question = (props) => {
  const currentQuestion = props.question;
  console.log(currentQuestion.questionAnswers);
  return (
    <div className="question-container">
      <div className="question">
        <Card>
          <div>{currentQuestion.questionName}</div>
        </Card>
      </div>
      <div className="answers">
        {currentQuestion.questionAnswers.map((questionAnswer) => {
          return <Answer answerText={questionAnswer} />;
        })}
      </div>
    </div>
  );
};

export default Question;
