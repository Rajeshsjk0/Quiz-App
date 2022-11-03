import express from "express";
const router = express.Router();

import {
  createQuiz,
  getAllMyQuiz,
  getAllAttemptQuiz,
} from "./../contollers/quiz.js";

router.post("/createQuiz", createQuiz);
router.get("/createdQuizzes", getAllMyQuiz);
router.get("/attemptQuizzes", getAllAttemptQuiz);

export default router;
