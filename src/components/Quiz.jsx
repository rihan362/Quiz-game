import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';


const questions = [
  {
    question: "Who holds the record for the highest individual point in ODI cricket?",
    choices: ["Rohit Sharma", "Sachin Tendulkar", "Virat Kohli", "Chris Gayle"],
    answer: 0,
  },
  {
    question: "What is the maximum number of overs allowed for a bowler in a T20 match?",
    choices: ["2", "4", "6", "10"],
    answer: 1,
  },
  {
    question: "Which team won the ICC Cricket World Cup in 2019?",
    choices: ["India", "England", "Australia", "New Zealand"],
    answer: 1,
  },
  {
    question: "Which of the following is a NoSQL database?",
    choices: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    answer: 1,
  },
  {
    question: "What does CSS stand for in web development?",
    choices: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Compact Style Sheets"],
    answer: 1,
  },
  {
    question: "Which company developed the Android operating system?",
    choices: ["Apple", "Microsoft", "Google", "IBM"],
    answer: 2,
  },
];


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [point, setpoint] = useState(0);
  const [IsResult, setIsResult] = useState(false);

  const handleAnswer = (chosenAnswer) => {
    if (chosenAnswer === questions[currentQuestion].answer) {
      setpoint(point + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsResult(true);
    }
  };

  return (
    <div>
      {IsResult ? (
        <Result point={point} total={questions.length} />
      ) : (
        <Question
          data={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
