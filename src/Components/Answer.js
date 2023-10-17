import React from 'react';
import classes from './Answer.module.css';

function Answer({ answer, onClick, disabled, isSelected }) {
  const answerClasses = `${classes.answer} ${isSelected ? classes.selected : ''} `

  return (
    <div
      className={answerClasses}
      onClick={onClick}
    >
      {answer}
    </div>
  );
}

export default Answer;