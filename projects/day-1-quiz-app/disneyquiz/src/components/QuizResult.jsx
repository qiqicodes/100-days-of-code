import React from "react";

const QuizResult = ({ score, playAgain }) => (
    <div className="score-board">
        <div className="score">You scored {score} / 5 correct answers!</div>
        <button className="playBtn" onClick={playAgain}>
            Play again!
        </button>
    </div>
)

export default QuizResult;