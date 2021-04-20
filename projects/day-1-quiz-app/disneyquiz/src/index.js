import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionCard from "./components/QuestionCard";
import QuizResult from "./components/QuizResult";

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

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      response: 0
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


          {this.state.response === 5 ? (<QuizResult score={this.state.score} playAgain={this.playAgain} />) : null }
      </div>
    );
  }
}

ReactDOM.render(<Quiz />, document.getElementById("root"));
