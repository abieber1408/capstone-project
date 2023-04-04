import { useState } from "react";
import styled from "styled-components";
import { subjects } from "../../lib/subjects";



export default function Quiz () {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
const handleAnswerClick = (answer) => {
  setUserAnswer(answer);
  setShowAnswer(true);
};

const handleNextQuestionClick = () => {
  setShowAnswer(false);
  setUserAnswer(null);
  setCurrentQuestion(currentQuestion<subjects.length-1?  currentQuestion+ 1 : currentQuestion );
};

const handleResetQuizClick = () => {
  setShowAnswer(false);
  setUserAnswer(null);
  setCurrentQuestion(0);
};

return (
  <div>
    
    {subjects && (
      <div>
        <p>{subjects[currentQuestion].question} <ButtonNextQuestion onClick={handleNextQuestionClick}>+</ButtonNextQuestion></p>
       
        <div>
          <StyledButton onClick={() => handleAnswerClick(subjects[currentQuestion].answer1)}>
            {subjects[currentQuestion].answer1}
          </StyledButton>
          <StyledButton onClick={() => handleAnswerClick(subjects[currentQuestion].answer2)}>
            {subjects[currentQuestion].answer2}
          </StyledButton>
        </div>
        {showAnswer && (
          <div>
            
            {userAnswer === subjects[currentQuestion].correctAnswer ? (
              <p>Right!!</p>
            ) : (
              <p>False!</p>
            )}
            
          </div>
        )}
      </div>
    )}
        <section>
        {currentQuestion === subjects.length - 1 && (
          <div>
            <h2>Quiz Complete!</h2>
            <button onClick={handleResetQuizClick}>Reset Quiz</button>
          </div>
        )}
      </section>
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
  cursor: alias ;
  float: right;


`;
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: 100%;
  max-height: 40px;
  background-color: #F6FEFF;
  border-radius: 15px;
  color: #000000;
  font-size: 18px;
  cursor: help;
  margin-block:10px;
  box-shadow: 5px 5px 0px RGBA(138,156,255,0.51);
`;