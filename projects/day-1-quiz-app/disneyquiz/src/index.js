import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionCard from "./components/QuestionCard";

class Quiz extends Component {
  state = {
    questionBank: [],
    score: 0,
    response: 0
  };

  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      response: this.state.response < 5 ? this.state.response + 1 : 5
    })
  }
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className="container">
        <div className="title">Quiz</div>
        {this.state.questionBank.length > 0 &&
        this.state.response < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionCard
                question={question}
                options={answers}
                key={questionId}
                selected={answer => this.computeAnswer(answer, correct)}
              />
            )
          )}


          {this.state.response === 5 ? (<h2>Hiyo, you scored {this.state.score}!</h2>) : null }
      </div>
    );
  }
}

ReactDOM.render(<Quiz />, document.getElementById("root"));
