
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
          <h1>{data.question}</h1><ButtonNextQuestion onClick={onNext}>+</ButtonNextQuestion>
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
  margin-top:60px;
  margin-left:0px;
  font-size:20px;
  h1 {
  font-size: 25px;
  margin: 25px;
}
`;

export const AnswerContainer = styled.div`
  display: flex;
  padding:18px;
  margin: 3rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  max-height: 4rem;
  background-color:#5DC1EB;
  color: #efedfa;
  font-size: 70px;
  font-weight: 100;
  cursor: w-resize;
  margin-left: 18rem;
  width: 10vw;
  border: none;
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
  font-weight: 200;
  cursor: help;
  margin-block:10px;
  box-shadow: 5px 5px 15px #AFC3D7;
  border-radius: 20px;
  margin-left: 18px;
  border:10px

`;