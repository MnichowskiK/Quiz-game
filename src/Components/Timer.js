import React, { useState, useEffect } from "react";

function Timer({ quizCompleted }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;

    if (!quizCompleted) {
      const startTime = new Date();

      interval = setInterval(() => {
        const endTime = new Date();
        const elapsedMilliseconds = endTime - startTime;
        const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
        setElapsedTime(elapsedSeconds);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [quizCompleted]);

  return (
    <p>
      Time Elapsed: {elapsedTime} seconds
    </p>
  );
}

export default Timer;