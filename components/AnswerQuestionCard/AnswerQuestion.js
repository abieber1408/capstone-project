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
  <section>
    {data && (
      <div>
        <p>{data.question}<ButtonNextQuestion onClick={onNext}>back</ButtonNextQuestion></p>
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
              <p>Right!!</p>
            ) : (
              <p>False!!</p>
            )}
          </AnswerContainer>
        )}
      </div>
    )}
    <Footing>Select your answer
    </Footing>
  </section>
  </StyledSection>
);
};
export const StyledSection = styled.section`
margin-top: 50px;
margin-left: 15px;
`;
export const AnswerContainer = styled.div`
  display: flex;
  padding: 1px;
  margin: 10px;
  right: 5;
  background-color: RGBA(192,143,230,0.87);
  width: 30%;
  display: flex;
  justify-content: center;
  float: right;
  font-weight: 100;
  align-items: center;
  max-height:   75px;
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
  font-size: 5px;
  font-weight: bold;
  cursor: w-resize;
  margin-left: 280px;
  text-decoration: none;
  width: 18vw;
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
  box-shadow: 5px 5px 0px RGBA(199,176,230,0.7);
  border-radius: 20px;
  margin-left: 15px;
  border:1px
`;