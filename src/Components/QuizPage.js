import React, { useState } from "react";
import Question from "./Question";
import classes from "./QuizPage.module.css";

function QuizPage() {
  const [questions, setQuestions] = useState([]);

  React.useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const data = await res.json();
      console.log(data);
      setQuestions(data.results);
    }
    getQuestions();
  }, []);

  console.log(questions);
  const questionElements = questions.map((question) => {
    return (
      <Question category={question.category} question={question.question} />
    );
  });

  return (
    <div className={classes.container}>
      <h1>QuizPage</h1>
      {questionElements}
    </div>
  );
}

export default QuizPage;
