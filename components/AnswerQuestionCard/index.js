import { useState } from "react";

//import { StyledButton } from "../Button/Button.styled";


export default function AnswerQuestion({ question, answer1, answer2, correctAnswer }) {
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const handleAnswerClick = (answer) => {
    setSelectAnswer(answer);
    setShowResult(true);
  };
  return (
    <>
    <div>
      <h2> {question}</h2>
    </div>
      <button onClick={() => handleAnswerClick(answer1)}>{answer1}</button>
    <div>
      <button onClick={() => handleAnswerClick(answer2)}>{answer2}</button>
      { showResult && (<p>{ selectAnswer === correctAnswer ? "Richtig!!" : "Falsch!!"}</p>)}
    </div>
      </>
  )
};
