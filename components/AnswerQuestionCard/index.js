import { useState } from "react";
import styled from "styled-components";


import Quiz from "./ChangeAnswerQuestion";


export default function AnswerQuestion({ question, answer1, answer2, correctAnswer }) {
  const [selectAnswer, setSelectAnswer] = useState();
  const [showResult, setShowResult] = useState(false);
  const handleAnswerClick = (answer) => {
    setSelectAnswer(answer);
    setShowResult(true);

  };

  return (
    <>
      <div>
       
        <h2> {question}
          
          </h2>
      </div>  
        <StyledButton onClick={() => handleAnswerClick(answer1)}>{answer1}</StyledButton>
        <StyledButton onClick={() => handleAnswerClick(answer2)}>{answer2}</StyledButton>
        {showResult && (<p>{selectAnswer === correctAnswer ? "Correct!!": "False!!"}</p>)}
      
  
    </>
  )
};

/*export const StyledCard = styled.card`
   grid-template-columns: 30% 70%;
   gap: 1rem;
   align-items: center;
   justify-items: start;
   padding: 0.5rem;
   margin: 0.5rem;
   border-radius: 1.5rem;
   background-color: var(--yellow);
`;*/


export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: justify-center;
  max-height: 40px;
  background-color: #F6FEFF;
  border-radius: 15px;
  color: #000000;
  font-size: 18px;
  cursor: help;
  margin-block:10px;
  box-shadow: 5px 5px 0px RGBA(138,156,255,0.51);
`;
export const ButtonNextQuestion = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: justify-center;
  max-height: 20px;
  background-color: #35268c;
  border-radius: 100px;
  color: #efedfa;
  font-size: 10px;
  cursor: alias ;


`;