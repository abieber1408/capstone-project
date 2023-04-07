import { useState } from "react";
import styled from "styled-components";
import { subjects } from "../../lib/subjects";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Quiz ({data, id}) {
  const [currentQuestion, setCurrentQuestion] = useState(id);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const router = useRouter();

  const handleAnswerClick = (answer) => {
  setUserAnswer(answer);
  setShowAnswer(true);
  };
  
return (
  <div>
    {data && (
      <div>
        <p>{data.question} <ButtonNextQuestion href= "/" as = {Link}>back</ButtonNextQuestion></p>
        <div>
          <StyledButton onClick={() => handleAnswerClick(data.answer1)}>
            {data.answer1}
          </StyledButton>
          <StyledButton onClick={() => handleAnswerClick(data.answer2)}>
            {data.answer2}
          </StyledButton>
        </div>
        {showAnswer && (
          <AnswerContainer> 
            {userAnswer === data.correctAnswer ? (
              <p>Right!!</p>
            ) : (
              <p>False!!</p>
            )}
          </AnswerContainer>
        )}
      </div>
    )}
  </div>
);
};

export const AnswerContainer = styled.div`
  padding: 3px;
  margin: 10px;
  right: 5;
  background-color: RGBA(138,156,255,0.51);
  width: 25%;
  display: flex;
  justify-content: center;
  float: right;
  font-weight: 100;
`;

export const ButtonNextQuestion = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: justify-center;
  max-height: 40px;
  background-color: #35268c;
  border-radius: 100px;
  color: #efedfa;
  font-size: 5px;
  font-weight: bold;
  cursor: w-resize;
  float: right;
  text-decoration: none;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: 93%;
  max-height: 40px;
  background-color: #F6FEFF;
  border-radius: 15px;
  color: #000000;
  font-size: 18px;
  font-weight: 100;
  cursor: help;
  margin-block:10px;
  box-shadow: 5px 5px 0px RGBA(138,156,255,0.51);
`;