import React from "react";

const QuestionCard = ({ question, options }) => {
    return (
        <div className="questionBox">
            <div className="question"> { question }</div>
        </div>
    )
}

export default QuestionCard;