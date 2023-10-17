import React, { useState, useEffect } from "react";
import Answer from "./Answer";
import shuffle from "../Helpers/shuffle";
import classes from "./Question.module.css";

function Question({
  id,
  category,
  question,
  incorrectAnswers,
  correctAnswer,
  selectedAnswer,
  answerSubmitted,
  quizCompleted,
  chooseAnswer,
}) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    const answers = [...incorrectAnswers, correctAnswer];
    const shuffled = shuffle(answers);
    setShuffledAnswers(shuffled);
  }, [incorrectAnswers, correctAnswer]);

  const replaceQuotes = (text) => {
    return text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  };

  const answerElements = shuffledAnswers.map((answer, index) => (
    <Answer
      key={index}
      answer={replaceQuotes(answer)}
      onClick={() => chooseAnswer(answer)}
      disabled={answerSubmitted || quizCompleted}
      isSelected={answer === selectedAnswer}
    />
  ));

  return (
    <div className={classes.question_container}>
      <h4 className={classes.question_number}>Question {id + 1}</h4>
      <p className={classes.category}>Category: {category}</p>
      <p className={classes.question}>{replaceQuotes(question)}</p>

      {answerElements}

      {quizCompleted && (
        <p className={selectedAnswer  === correctAnswer ? classes.correct : classes.incorrect}>
          {selectedAnswer ? `Your selected answer is: ${selectedAnswer}` : "You didn't select an answer to this question!"}
          {/* Your selected answer is: {selectedAnswer ? selectedAnswer : "none"} */}
          {selectedAnswer  === correctAnswer ? " (Correct)" : " (Incorrect)" }
        </p>
      )}
    </div>
  );
}

export default Question;
