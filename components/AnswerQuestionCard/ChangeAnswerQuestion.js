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


const handleResetQuizClick = () => {
  setShowAnswer(false);
  setUserAnswer(null);
  setCurrentQuestion(0);
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
          <div>
            
            {userAnswer === data.correctAnswer ? (
              <p>Right!!</p>
            ) : (
              <p>Incorrect.</p>
            )}
            
          </div>
        )}
      </div>
    )}
    {!subjects[currentQuestion] && (
      <div>
        <h2>Quiz Complete!</h2>
        <button onClick={handleResetQuizClick}>Reset Quiz</button>
      </div>
    )}
  </div>
);
};



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
  font-size: 15px;
  font-weight: bold;
  cursor: w-resize;
  float: right;


`;
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: justifycenter;
  max-height: 40px;
  background-color: #F6FEFF;
  border-radius: 15px;
  color: #000000;
  font-size: 18px;
  cursor: help;
  margin-block:10px;
  box-shadow: 5px 5px 0px RGBA(138,156,255,0.51);
`;