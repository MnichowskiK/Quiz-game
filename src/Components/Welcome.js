import React from "react";
import classes from "./Welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={classes.welcome_box}>
      <h1>Welcome to the quiz!</h1>
      <div className={classes.button_container}>
        <Link to={"/quiz"} className="button">
          Start
        </Link>
        <Link to={"/results"} className="button-sec">
          My results
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
