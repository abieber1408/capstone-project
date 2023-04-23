import styled from "styled-components";
import Footing from "../Footing";
import { subjects } from "../../lib/subjects"
import { useState } from "react";
import Quiz from "../AnswerQuestionCard/AnswerQuestion";

import ContinueButton from "../ContinueButton";
import Heading from "../Heading";

export default function QuestionCard({ imageSrc, topic, level }) {
  const [openId, setOpenId] = useState(null);
  const [answered, setAnswered] = useState([]);
  const effectiveLevel = level || 1
  const questionIds = [...Array(effectiveLevel * 4)].map((_, index)=> index);
    
  const handleButtonClick = (id) => {
    if (alreadyAnswered(id)) {
      // Cannot answer twice.
      return;
    }
    setOpenId(id);
  };

  const onNext = () => {
    setOpenId(null);
  }

  const onAnswered = (id, correct) => {
    if (alreadyAnswered(id)) {
      return;
    }
    setAnswered((previous => [...previous, { id: id, correct: correct}]));
  }

  const alreadyAnswered = (id) => {
    return answered.find(answer => answer.id === id) !== undefined;
  }

  const score = () => answered.filter(answer => answer.correct === true).length;

  if (openId !== null) {
    return <Quiz data={subjects[openId]} id={openId} onAnswered={onAnswered} onNext={onNext}/>
  }
  
  let newScore = score();
  let stars = 2;
  const newStarScore = stars * newScore;

  const questionClass = (questionId) => {
    const answerState = answered.find(answer => answer.id === questionId);
    if (answerState === undefined) {
      return 'question-not-answered';
    }
    return answerState.correct ? 'answer-correct' : 'answer-wrong';
  }

  return (
    <>
      <Wrapper>
        <ResultContainer>
          <StyledImage>
            <img src={imageSrc} width={135} height={88} />
          </StyledImage>
          <p className="topic">{topic}</p>          
          <div className="score">
            <h1>Level {effectiveLevel}</h1>
            <h1>Score {score()}/{questionIds.length}</h1>  
          </div>
        </ResultContainer>

        <StyledButtonGrid>
          {questionIds.map((id) => <a className={"question " + questionClass(id)} key={id} onClick={() => handleButtonClick(id)}>{subjects[id].question}</a>)}
        </StyledButtonGrid>
        <ContinueButton text="Home" href="/" />
      </Wrapper>
  </>
  );
};

const StyledButtonGrid = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap:0rem;
  padding: 50px;
  scroll-behavior: smooth;
  transition: all 0.90s ease-in-out;
  height:12rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:35px;
    width: 90%;
    max-height: 100px;
    background-color: #6A9AD6;
    border-radius: 0.2rem;
    color: #333;
    font-size: 12px;
    margin-block:-100px;
    box-shadow: 5px 5px 5px #AFC3D7;
    font-weight: 300;
    text-decoration: none;
    margin-top:12rem;
    margin-left:3vw;

    &:hover {
      background-color: #35268c;
      color: #efedfa;
      transform: translateY(-2px);
    }

    &.question-not-answered {
      background-color: #6A9AD6;
    }

    &.answer-wrong {
      background-color: #FA7A66;;
    }

    &.answer-correct {
      background-color: #3ED6D3;
    }
  }
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #4A86D4;
  color: white;

  h1 {  
    background-color: #4A86D4;
    display: flex;
    font-size: 10px;
    text-align: center;
    border-radius: 2px;
    width: 8%;
    font-weight: 100;
  }

  h2 {
    text-align: center;
    font-size: 10px
  }

  p.topic {
    font-size: 30px;
    margin-left: -100px;
    margin-right: -100px;
    width: 33%;
    text-align: center;
  }

  div.score {
    display: flex;
    width: 33%;
    height: 100%;
    align-items: flex-end;
    justify-content: space-around;
  }

`;
export const StyledImage = styled.div`
  display: flex;
  width: 33%;
  padding: 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  
  /* grid container settings, see https://css-tricks.com/how-to-use-css-grid-for-sticky-headers-and-footers/#aa-fixed-header-fixed-footer */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    'header'
    'main';
`;