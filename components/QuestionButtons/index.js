import Link from "next/link";
import styled from "styled-components";
import Footing from "../Footing";
import { subjects } from "../../lib/subjects"
import { useState } from "react";
import Quiz from "../AnswerQuestionCard/ChangeAnswerQuestion";
import ResultContainer from "../ResultContainer/StyledResultContainer";
import Image from "next/image";
import StyledTopic from "../Topic/StyledTopic";
import start from "./../../public/images/star.png";

export function ButtonGrid() {

  const [openId, setOpenId] = useState(null);
  const [answered, setAnswered] = useState([]);
  const questionIds = [...Array(8)].map((_, index)=> index);

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
    return <Quiz data={subjects[openId]} id={openId} onAnswered={onAnswered} onNext={onNext}></Quiz>;
  }
  
  let newScore = score();
  let stars = 2;
  const newStarScore = stars * newScore;

  return (
    <>
      <ResultContainer>
        Level
        <div>1 </div>
        Score
        <div>{score()} / {questionIds.length}</div>  
        <h1 style={{ position: "relative" }}><Image
          src={"/images/star.png"}
          alt="star"
          width={45}
          height={45} />
        <dl style={{ position: "absolute", top:17, left: 19}}>
         {newStarScore}
        </dl>
        </h1>
      </ResultContainer>
      <StyledTopic>
      Technology
       <Image
         src={"/images/technology.jpg"}
         alt="technology"
         width={75}
         height={75} />
       </StyledTopic>
      <StyledButtonGrid>
      {questionIds.map((id) => <a className="question" key={id} onClick={() => handleButtonClick(id)}></a>)}
      </StyledButtonGrid>
     <Footing> Select a button for your question</Footing>
    </>
  );
};

const StyledButtonGrid = styled.div`

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 20px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    width: 100%;
    max-height: 50px;
    background-color: #F6FEFF;
    border-radius: 6px;
    color: #333;
    font-size: 8px;
    margin-block:5px;
    box-shadow: 5px 5px 0px RGBA(138,156,255,0.51);
    font-weight: 400;
    text-decoration: none;
    transition: all 0.40s ease-in-out;
  }
    
    &:hover {
      background-color: #35268c;
      color: #efedfa;
      transform: translateY(-2px);
    }
  
`;