import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Topbar from "./components/TopBar/TopBar";
import HomePage from "./pages/Home/HomePage";
import Profile from "./pages/Profile/Profile";
import Invite from "./pages/Invite/Invite";
import Myquizzes from "./pages/MyQuizzes/Myquizzes";
import Attemptquizzes from "./pages/Attemptquizzes/Attemptquizzes";
import AttemptQuiz from "./pages/AttemptingQuiz/AttemptQuiz";
import CreateQuiz from "./pages/CreateQuiz/CreateQuiz";
import "./app.css";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="214509653579-csu8gr6mehbfhb5tgubvhajmdign5fq9.apps.googleusercontent.com">
      <Router>
        <div className="main-container">
          <Topbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/invite" element={<Invite />} />
            <Route exact path="/my-quizzes" element={<Myquizzes />} />
            <Route exact path="/attempt-quizzes" element={<Attemptquizzes />} />
            <Route exact path="/attempt-quiz/:id" element={<AttemptQuiz />} />
            <Route exact path="/create-quiz" element={<CreateQuiz />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
