import { useState } from "react";
import styled from "styled-components";


export default function Quiz ({data, id, onAnswered, onNext}) {

  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  


  const handleAnswerClick = (answer) => {
    if (showAnswer) {
      // Already answered.
      return;
    }
    setUserAnswer(answer);
    setShowAnswer(true);
    onAnswered(id, answer === data.correctAnswer);
  };

  return (
  <StyledSection>
    {data && (
      <div>
          <h1>{data.question}</h1><ButtonNextQuestion onClick={onNext}>Next Question</ButtonNextQuestion>
        <article>
          <StyledButton onClick={() => handleAnswerClick(data.answer1)}>
            {data.answer1}
          </StyledButton>
          <StyledButton onClick={() => handleAnswerClick(data.answer2)}>
            {data.answer2}
          </StyledButton>
        </article>
        {showAnswer && (
          <AnswerContainer> 
            {userAnswer === data.correctAnswer ? (
              <h1>Right!!</h1>
            ) : (
              <h1>False!!</h1>
            )}
          </AnswerContainer>
        )}
      </div>
      )}
  </StyledSection>
);
};
export const StyledSection = styled.section`
display: flex;
  margin-top:0px;
  margin-left: 1rem;
  font-size:20px;
  flex-direction: column;
  h1 {
  font-size: 25px;
  margin: 25px;
}
`;

export const AnswerContainer = styled.div`
  display: flex;
  padding:18px;
  margin: 2rem;
  margin-right:35vw;
  background-color: #85B4EB;
  width: 30%;
  justify-content: center;
  float: right;
  font-weight: 100;
  align-items: center;
  max-height:   890px;
`;

export const ButtonNextQuestion = styled.button`
  border: none;
  transition: all 0.90s ease-in-out;
  width: 48px;
  height: 48px;
  padding: 8px;
  border-radius: 50%;
  background: #5DC1EB;
  color: #000000;
  font-weight: 190px;
  box-shadow: 0px 6px 8px #ffffff;
  text-decoration: none;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom:70px;
  right: 4rem;
  z-index: 1;
  font-size: 10px;

  &:hover {
   color: #efedfa;
   transform: translateY(-2px);
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:50px;
  width: 90%;
  max-height: 40px;
  background-color: #6A9AD6;
  border-radius: 5px;
  color: #000000;
  font-size: 18px;
  font-family: system-ui;
  font-weight: 200;
  cursor: help;
  margin-block:10px;
  box-shadow: 5px 5px 15px #AFC3D7;
  border-radius: 20px;
  margin-left: 18px;
  border:10px
`;