import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Footing from "../Footing";

export default function Quiz ({data, id, onAnswered, onNext}) {

  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  
  const router = useRouter();

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
       {data.question}<ButtonNextQuestion onClick={onNext}>back</ButtonNextQuestion>
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
              <h2>Right!!</h2>
            ) : (
              <h3>False!!</h3>
            )}
          </AnswerContainer>
        )}
      </div>
    )}
    <Footing>Select your answer
    </Footing>
  </StyledSection>
);
};
export const StyledSection = styled.section`
margin-top: 50px;
margin-left:0px;
font-size:18px;
`;
export const AnswerContainer = styled.div`
  display: flex;
  padding:70px;
  margin: 20px;
  right: 5;
  background-color: RGBA(255,151,13,0.4);
  width: 30%;
  display: flex;
  justify-content: center;
  float: right;
  font-weight: 100;
  align-items: center;
  max-height:   100px;
  
`;

export const ButtonNextQuestion = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: justify-center;
  max-height: 50px;
  background-color:#35268c;
  border-radius: 100px;
  color: #efedfa;
  font-size: 8px;
  font-weight: bold;
  cursor: w-resize;
  margin-left: 280px;
  text-decoration: none;
  width: 15vw;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 93%;
  max-height: 40px;
  background-color: #acccfc;
  border-radius: 15px;
  color: #000000;
  font-size: 18px;
  font-weight: 100;
  cursor: help;
  margin-block:10px;
  box-shadow: 5px 5px 0px RGBA(18,195,104,0.4);0
  border-radius: 20px;
  margin-left: 15px;
  border:1px
`;