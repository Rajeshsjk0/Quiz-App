import React from "react";

import "./answer.css";
import Card from "../../components/UI/Card";

const Answer = (props) => {
  return (
    <div className="answer">
      <div className="answer-text">{props.answerText}</div>
    </div>
  );
};

export default Answer;
