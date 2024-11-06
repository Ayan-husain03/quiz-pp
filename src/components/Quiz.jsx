import React from "react";
import questions from "../data/data.json";
import { useState } from "react";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectAns, setSelectAns] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnsclick = (ans) => {
    if (ans === questions[currQuestion].correct) {
      setScore(score + 1);
    }
    setSelectAns(ans);
  };
  const handleNextQuestion = () => {
    setSelectAns(null);
    const nextQuestion = currQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleRestart = () => {
    setScore(0);
    setCurrQuestion(0);
    setShowScore(false);
  };
  return (
    <div className="bg-[#FFF1DB] rounded-badge w-[90%] md:max-w-2xl mx-auto mt-5 p-5">
      <h1 className="text-center md:text-[5rem] text-[3rem] text-[#EF5A6F]">
        Quiz App
      </h1>
      {showScore ? (
        <div className="my-5">
          <h1 className="text-center font-semibold text-5xl">
            Your Score is : {score} out of {questions.length}
          </h1>
          <button
            className="btn btn-outline w-full rounded-full mt-10 text-xl"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      ) : (
        <div>
          <div className="text-2xl mt-5 font-semibold">
            <span>{currQuestion + 1}.</span>
            <span>{questions[currQuestion].question}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {questions[currQuestion].answers.map((ans, i) => (
              <button
                key={i}
                className={`btn text-xl shadow-2xl hover:bg-transparent ${
                  selectAns === ans
                    ? ans === questions[currQuestion].correct
                      ? "btn-success"
                      : "btn-error"
                    : ""
                }`}
                onClick={() => handleAnsclick(ans)}
              >
                {ans}
              </button>
            ))}
          </div>
          {selectAns && (
            <button
              className="btn w-full rounded-full btn-outline mt-10 text-xl"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
