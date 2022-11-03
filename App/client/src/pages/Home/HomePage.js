import React, { useEffect } from "react";
import "./homepage.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../../components/login/Login";

const HomePage = () => {
  const userPresent = useSelector((state) => state.user.userPresent);

  useEffect(() => {
    if (userPresent) {
    }
  }, [userPresent]);
  return (
    <div className="home-container">
      <div className="header">
        <Header text={"Welcome to QuizUp"} />
      </div>
      <div className="quote-container">
        <figure className="quote">
          <blockquote>
            "Everyone loves sport. And everyone loves a quiz."
          </blockquote>
          <figcaption>
            &mdash; Sue Barker, <cite>brainyquote</cite>
          </figcaption>
        </figure>
      </div>
      {!userPresent && (
        <div className="after-header">
          {/* <p className="after-header-para">Please SignIn to Continue</p> */}
          <div className="login">
            <LoginPage />
          </div>
        </div>
      )}
      {userPresent && (
        <div className="after-header">
          <Link className="link attempt-quizzes" to="/attempt-quizzes">
            Attempt Quizzes
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
