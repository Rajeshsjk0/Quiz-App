import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./createquiz.css";

import Modal from "./../../components/UI/Modal";
import Card from "../../components/UI/Card";
import { createNewQuiz } from "../../store/actions/quizzActions";

const CreateQuiz = () => {
  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modalAnswer, setModalAnswer] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [quizName, setQuizName] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [modalAnswerArray, setModalAnswerArray] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [questionArray, setQuestionArray] = useState([]);

  const handleQuestionSubmit = () => {
    let question = {
      questionName,
      questionDescription,
      questionAnswers: modalAnswerArray,
      questionCorrectAnswer: correctAnswer,
    };
    setIsOpen(false);
    setQuestionArray((prevState) => [...prevState, question]);
    setQuestionName("");
    setQuestionDescription("");
    setModalAnswerArray([]);
    setCorrectAnswer("");
  };

  const handleAddAnswer = () => {
    setModalAnswerArray((prevState) => [...prevState, modalAnswer]);
    setModalAnswer("");
  };

  const removeAnswerHandler = (index) => {
    console.log("removed", index);
    const list = [...modalAnswerArray];
    list.splice(index, 1);
    setModalAnswerArray(list);
  };
  const selectAnswerHandler = (modalAnswerArrayElement) => {
    setCorrectAnswer(modalAnswerArrayElement);
  };

  const submitQuizHandler = () => {
    let quiz = {
      quizName,
      quizQuestions: questionArray,
      quizOwner: userData?._id,
    };
    dispatch(createNewQuiz(quiz));
    navigate("/my-quizzes");
  };

  return (
    <div className="createForm">
      <div className="createForm-heading">
        <h1>Create New Quiz</h1>
      </div>
      <div className="quiz-name-form">
        <input
          style={{ width: "400px", height: "50px", border: "none" }}
          type="text"
          //   defaultValue={user.name}
          //   className={styles.input}
          placeholder="Quiz Name"
          onChange={(e) => setQuizName(e.target.value)}
        />
      </div>
      <div className="createForm-questions">
        {questionArray.map((questionArrayElement, index) => (
          <Card key={index} style={{ width: "fit-content" }}>
            <div key={index}>{questionArrayElement.questionName}</div>
          </Card>
        ))}
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modal-form">
          <div className="modal-form-question">
            <input
              style={{ width: "400px", height: "50px", border: "none" }}
              type="text"
              placeholder="Question Name"
              onChange={(e) => setQuestionName(e.target.value)}
            />
            <input
              style={{ width: "400px", height: "50px", border: "none" }}
              type="text"
              placeholder="Type Your Question Here"
              onChange={(e) => setQuestionDescription(e.target.value)}
            />
          </div>
          <div className="modal-form-answers">
            <input
              style={{ width: "400px", height: "50px", border: "none" }}
              type="text"
              placeholder="Write Answer"
              value={modalAnswer}
              onChange={(e) => setModalAnswer(e.target.value)}
            />
            <button
              className="modal-form-answers-btn"
              onClick={handleAddAnswer}
            >
              add
            </button>
          </div>
          <ul className="modal-form-display-answers">
            {modalAnswerArray.map((modalAnswerArrayElement, index) => (
              <div key={index} className="modal-form-display-answers-answer">
                <li
                  className={
                    modalAnswerArrayElement === correctAnswer
                      ? "modal-form-display-answers-answer-li-selected"
                      : "modal-form-display-answers-answer-li"
                  }
                  onClick={() =>
                    selectAnswerHandler(modalAnswerArrayElement, index)
                  }
                >
                  <span>{modalAnswerArrayElement}</span>
                </li>
                <button
                  className="modal-form-answers-btn-remove"
                  onClick={removeAnswerHandler}
                >
                  remove
                </button>
              </div>
            ))}
          </ul>
        </div>
        <div className="Modal-footer">
          <button
            className="createForm-footer-btn"
            onClick={handleQuestionSubmit}
          >
            Save Question
          </button>
          <button
            className="createForm-footer-btn"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
      <div className="createForm-footer">
        <div className="createForm-footer-right">
          <button
            className="createForm-footer-btn"
            onClick={() => setIsOpen(true)}
          >
            Add Question
          </button>
        </div>
        <div className="createForm-footer-left">
          <button className="createForm-footer-btn" onClick={submitQuizHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
