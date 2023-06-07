import styled from "styled-components";
import { useState } from "react";
import Quiz from "../AnswerQuestionCard/AnswerQuestion";
import ContinueButton from "../Buttons";
import Image from "next/image";
import useSWR from "swr";
import NavBar from "../NavBar";

export default function QuestionCard({ imageSrc, topic, level }) {
const { data, isLoading } = useSWR("api/subjects");
  const [openId, setOpenId] = useState(null);
  const [answered, setAnswered] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(level || 1);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  
  const questionIds = Object.keys(data);
  const questionIdsForTopic = questionIds.filter((id) => data[id].topic === topic);
  const questionsToShow = questionIdsForTopic.slice(0, currentLevel * 4);
  const maxQuestions = questionsToShow.length;

  const handleButtonClick = (id) => {
    if (alreadyAnswered(id)) {
      // Cannot answer twice.
      return;
    }
    setOpenId(id);
  };

  const onNext = () => {
    setOpenId(null);
  };

  const onAnswered = (id, correct) => {
    if (alreadyAnswered(id)) {
      return;
    }
    setAnswered((previous) => [...previous, { id: id, correct: correct }]);
  };

  const alreadyAnswered = (id) => {
    return answered.find((answer) => answer.id === id) !== undefined;
  };

  const score = () => answered.filter((answer) => answer.correct === true).length;

  if (openId !== null) {
    return <Quiz data={data[openId]} id={openId} onAnswered={onAnswered} onNext={onNext} />;
  }

  const questionClass = (questionId) => {
    const answerState = answered.find((answer) => answer.id === questionId);
    if (answerState === undefined) {
      return "question-not-answered";
    }
    return answerState.correct ? "answer-correct" : "answer-wrong";
  };

  /*const newScore = score();
  const stars = 2;
  const newStarScore = stars * newScore;*/

 return (
    <>
      <Section>
        <ResultContainer>
          <StyledImage>
            <Image src={imageSrc} width={135} height={88} alt="topic" />
          </StyledImage>
          <p className="topic">{topic}</p>
          <div className="score">
            <h1>Level {currentLevel}</h1>
            <h1>
              Score {score()}/{maxQuestions}
            </h1>
         </div>
        </ResultContainer>
       <div className="button" >
          <ContinueButton text="Start" href="/" />
       </div>
     
        <StyledButtonGrid>
          {questionsToShow.map((id) => (
            <a className={"question " + questionClass(id)} key={id} onClick={() => handleButtonClick(id)}>
              {data[id].question}
            </a>
          ))}
        </StyledButtonGrid>
     </Section>
     <NavBar/>
    </>
  );
}

const StyledButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap:0rem;
    padding-left: 50px;
    padding-right: 50px;
    scroll-behavior: smooth;
    transition: all 0.90s ease-in-out;
    overflow: scroll;
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
    box-shadow: 5px 5px 5px #AFC3D7;
    font-weight: 100;
    text-decoration: none;
    margin-top: 20px;
    margin-left: 3vw;
    margin-bottom: 20px;
    &:hover {
      background-color: #35268c;
      color: #efedfa;
      transform: translateY(-2px);
    }
    &.question-not-answered {
      background-color: #6A9AD6;
    }
    &.answer-wrong {
      background-color: #FA7A66;
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
    grid-area: header;
    height: 150px;
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
 .topic {
    font-size: 40px;
    width: 33%;
    text-align: center;
    font-weight:800;
    text-shadow: 1px 1px #000000;
    z-index: 1;
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

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    div.button {
    padding: 20px;
    text-align: right;
  }
`;

