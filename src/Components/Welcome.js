import React from "react";
import classes from "./Welcome.module.css";

function Welcome(props) {
  const { isStarted, setIsStarted } = props.isStarted;
  function startGame() {
    setIsStarted(true);
  }

  <div className={classes.welcome_box}>
    <h1>Welcome to the quiz!</h1>
    <button onClick={startGame}>Start</button>
  </div>;
}

export default Welcome;
