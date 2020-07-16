import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar">
      <div className="col-4 text-center">Clicky Game</div>
      <div className="col-4 text-center">{props.message}</div>
      <div className="col-4 text-center">Score: {props.score} | Highscore: {props.highScore}</div>
    </nav>
  );
}

export default Nav;