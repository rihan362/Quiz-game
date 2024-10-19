import React from 'react';

const Question = ({ data, onAnswer }) => {
  return (
    <div className="question">
      <h2>{data.question}</h2>
      <div className="choices-container">
        {data.choices.map((choice, index) => (
          <button
            key={index}
            className="choice-btn"
            onClick={() => onAnswer(index)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
