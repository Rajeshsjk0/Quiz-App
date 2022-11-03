import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyQuizCard from "../../components/my-quiz-card/MyQuizCard";
import { Link } from "react-router-dom";

import { getMyQuizzes } from "../../store/actions/quizzActions";
import "./myquizzes.css";

const Myquizzes = () => {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const myQuizzes = useSelector((state) => state.myQuizReducer.myQuizzes);
  console.log(myQuizzes);
  useEffect(() => {
    // console.log(userData);
    dispatch(getMyQuizzes(userData?._id));
  }, [userData?._id, dispatch]);

  const addUsersHandler = () => {
    console.log("addUsersHandler");
  };
  const scoreCardHandler = () => {
    console.log("scoreCardHandler");
  };
  const editQuizHanlder = () => {
    console.log("editQuizHanlder");
  };

  return (
    <div>
      <div className="myQuizzes">
        {myQuizzes.map((myQuiz) => (
          <MyQuizCard
            key={myQuiz._id}
            myQuiz={myQuiz}
            editQuizHanlder={editQuizHanlder}
            scoreCardHandler={scoreCardHandler}
            addUsersHandler={addUsersHandler}
          />
        ))}
      </div>
      <div className="createQuiz">
        <Link className="link" to="/create-quiz">
          <button className="createQuiz-btn">Create a New quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Myquizzes;
