const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  //   const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  //   const isWrongAnswer =
  //   currentAnswer === answerText && currentAnswer !== correctAnswer;
  const isSelectedAnswer = currentAnswer && answerText === answerText;
  //   const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  //   const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const selectedAnswerClass = isSelectedAnswer ? "answer class" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
    <div
      className={`answer ${selectedAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;