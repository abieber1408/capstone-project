import { useState } from "react";
import styled from "styled-components";

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
      <h2>{question}</h2>
   </div>
      <StyledButton onClick={() => handleAnswerClick(answer1)}>{answer1}</StyledButton>
      
      <StyledButton onClick={() => handleAnswerClick(answer2)}>{answer2}</StyledButton>
      { showResult && (<p>{ selectAnswer === correctAnswer ? "Richtig!!" : "Falsch!!"}</p>)}
      </>
  )
}

/*const StyledCard = styled.card`
   grid-template-columns: 30% 70%;
   gap: 1rem;
   align-items: center;
   justify-items: start;
   padding: 0.5rem;
   margin: 0.5rem;
   border-radius: 1.5rem;
   background-color: var(--yellow);
`;*/


const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: justify-center;
  max-height: 40px;
  background-color: #F6FEFF;
  border-radius: 15px;
  color: #000000;
  font-size: 18px;
  cursor: help;
  margin-block:20px;
  box-shadow: 50px 15px 90px RGBA(138,156,255,0.51);
`;