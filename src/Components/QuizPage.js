import React, { useState, useEffect } from "react";
import Question from "./Question";
import classes from "./QuizPage.module.css";
import { Link } from "react-router-dom";
import LoadingSpinner from "./Spinner";

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  const getQuestions = async () => {
    try {
      const res = await fetch(
        "https://the-trivia-api.com/v2/questions"
      );
      const data = await res.json();
      setQuestions(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching questions:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const chooseAnswer = (questionId, answer) => {
    if (!answerSubmitted && !quizCompleted) {
      setSelectedAnswers((prevSelectedAnswers) => ({
        ...prevSelectedAnswers,
        [questionId]: answer,
      }));
    }
  };

  const convertText = (inputText) => {
    let words = inputText.split('_');
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    const result = words.join(' ');

    return result;
  }



  const submitQuiz = () => {
    setAnswerSubmitted(true);
    setQuizCompleted(true);

    const correctAnswersCount = questions.reduce((count, question, index) => {
      const selectedAnswer = selectedAnswers[index];
      const isCorrect = selectedAnswer === question.correctAnswer;
      return isCorrect ? count + 1 : count;
    }, 0);

    saveResults(correctAnswersCount);
  };

  const saveResults = (newResults) => {
    const savedResults = localStorage.getItem("quizResults");
    const updatedResults = savedResults ? JSON.parse(savedResults) : [];
    updatedResults.push(newResults);
    localStorage.setItem("quizResults", JSON.stringify(updatedResults));
  };

  const questionElements = questions.map((question, index) => (
    <Question
      key={index}
      id={index}
      category={convertText(question.category)}
      question={question.question.text}
      incorrectAnswers={question.incorrectAnswers}
      correctAnswer={question.correctAnswer}
      selectedAnswer={selectedAnswers[index]}
      answerSubmitted={answerSubmitted}
      quizCompleted={quizCompleted}
      chooseAnswer={(answer) => chooseAnswer(index, answer)}
    />
  ));

  const correctAnswersCount = questions.reduce((count, question, index) => {
    const selectedAnswer = selectedAnswers[index];
    const isCorrect = selectedAnswer === question.correctAnswer;
    return isCorrect ? count + 1 : count;
  }, 0);

  const restartQuiz = () => {
    setSelectedAnswers({});
    setAnswerSubmitted(false);
    setQuizCompleted(false);
    getQuestions(); // Fetch new questions
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.container}>
      <Link to={"/"} className="back"><span className="material-symbols-outlined">
        arrow_back
      </span> Main page</Link>
      <h1>QuizPage</h1>
      {loading ? (
        <>
          <p>Loading...</p>
          <LoadingSpinner />
        </>
      ) : (
        <>
          {questionElements}
          {quizCompleted && (
            <>
              <p>Number of Correct Answers: {correctAnswersCount}</p>
              <button onClick={restartQuiz} className="button">New Game</button>
            </>
          )}
          {!quizCompleted && !answerSubmitted && (
            <button onClick={submitQuiz} className="button">Submit Quiz</button>
          )}
        </>
      )}
    </div>
  );
}

export default QuizPage;
