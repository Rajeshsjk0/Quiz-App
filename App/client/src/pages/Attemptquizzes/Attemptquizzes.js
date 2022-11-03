import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAttemptQuizzes } from "../../store/actions/quizzActions";
import "./attemptquizzes.css";
import Card from "../../components/UI/Card";

const Attemptquizzes = () => {
  const userData = useSelector((state) => state.user.userData);
  const attemptQuizzes = useSelector(
    (state) => state.myQuizReducer.attemptQuizzes
  );
  const dispatch = useDispatch();

  console.log(attemptQuizzes);

  useEffect(() => {
    // console.log(userData);
    dispatch(getAttemptQuizzes(userData?._id));
  }, [userData?._id, dispatch]);

  return (
    <div className="attemptquizzes-container">
      {attemptQuizzes.map((attemptQuiz, index) => (
        <Card key={index} style={{ width: "fit-content" }}>
          <div>
            <img
              className="attemptquizzes-img"
              src={attemptQuiz.quizImage}
              alt="quizImage"
            ></img>
          </div>
          <div className="attemptquizzes-footer">
            <div>{attemptQuiz.quizName}</div>
            <Link
              className="attemptquizzes-link"
              to={`/attempt-quiz/${attemptQuiz._id}`}
            >
              Attempt
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Attemptquizzes;
