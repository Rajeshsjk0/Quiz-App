import Quiz from "../models/quiz.js";
import Question from "../models/question.js";

export const createQuiz = async (req, res) => {
  const quizQuestions = req.body.quizQuestions;
  const quizOwner = req.body.quizOwner;
  const newQuiz = new Quiz(req.body);

  try {
    quizQuestions.map(async (quizQuestion) => {
      const newQuestion = new Question(quizQuestion);
      newQuestion.questionOwner = quizOwner;
      const savedQuestion = await newQuestion.save();
      newQuiz.quizQuestions.push(newQuestion._id);
      // console.log(newQuiz);
    });
    const savedQuiz = await newQuiz.save();
    res.status(200).json(savedQuiz);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

export const getAllMyQuiz = async (req, res) => {
  const userID = req.query.user;
  // console.log(userID);
  let quizzes;

  try {
    quizzes = await Quiz.find({ quizOwner: userID });
    // console.log(quizzes);
    res.status(200).json(quizzes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

export const getAllAttemptQuiz = async (req, res) => {
  const userID = req.query.user;
  // console.log(userID);
  let quizzes;

  try {
    quizzes = await Quiz.find({ quizAttendies: userID });
    // console.log(quizzes);
    res.status(200).json(quizzes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
