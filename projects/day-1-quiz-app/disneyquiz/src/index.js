import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

class DisneyQuiz extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">Disney Quiz</div>
      </div>
    )
  }
}

ReactDOM.render(<DisneyQuiz />, document.getElementById("root"));





