import React from "react";

function Question(props) {
  console.log(props);
  return (
    <div>
      <h2>Question</h2>
      <p>Category: {props.category}</p>
      <p>Question: {props.question}</p>
    </div>
  );
}

export default Question;
