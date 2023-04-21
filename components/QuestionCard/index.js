import styled from "styled-components";
import Footing from "../Footing";
import { subjects } from "../../lib/subjects"
import { useState } from "react";
import Quiz from "../AnswerQuestionCard/AnswerQuestion";
import Image from "next/image";

import Heading from "../Heading";

export default function QuestionCard({ imageSrc, topic, level }) {
  const [openId, setOpenId] = useState(null);
  const [answered, setAnswered] = useState([]);
  const questionIds = [...Array((level || 1) * 4)].map((_, index)=> index);
    
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

  return (
    <>
      <Heading/>
      <StyledImage src={imageSrc}  width={135} height={88}/>
      <p>{topic}</p>
      <ResultContainer>
        Level
        <div>{level}</div>
        Score
         <div>{score()} / {questionIds.length}</div>  
          <h1 style={{ position: "relative" }}><Image
              src={"/images/star.png"}
              alt="star"
              width={45}
              height={45} />
              <dl style={{ position: "absolute", top:-15, left: 19}}>
              <h2>{newStarScore}</h2>
              </dl>
         </h1>
      </ResultContainer>
      <StyledButtonGrid>
        {questionIds.map((id) => <a className="question" key={id} onClick={() => handleButtonClick(id)}>{id}</a>)}
      </StyledButtonGrid>
      <Footing> Questions</Footing>
  </>
  );
};

const StyledButtonGrid = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap:2px;
  padding: 8px;
  scroll-behavior: smooth;
  transition: all 0.90s ease-in-out;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:20px;
    width: 85%;
    max-height: 100px;
    background-color: #acccfc;
    border-radius: 6px;
    color: #333;
    font-size: 12px;
    margin-block:-80px;
    box-shadow: 5px 5px 0px RGBA(18,195,104,0.4);
    font-weight: 300;
    text-decoration: none;
    margin-top: 120px;
    margin-left:3vw;

    &:hover {
      background-color: #35268c;
      color: #efedfa;
      transform: translateY(-2px);
    }
  }
`;

const ResultContainer = styled.div`
display: flex;
flex-direction: column;
position: fixed;
margin-left:326px;
margin-top: 15vh;

div { 
    margin-top: 50;
    justify-content: center;
    height: 30px;
    text-align: center;
    width: 30px;
    font-size: 10px;
    float: right;
    border: 1px solid black;
    border-radius: 5px;
    align-items: flex-end;
    padding: 4px;
    background-color: #35268c;
  color: white;
}
  h2{
    text-align: center;
    font-size: 10px;
  }
  h1{
    margin-left:-2vw;
  }
`;
export const StyledImage = styled.img`
  display: flex;
  margin-top:30px;
  margin-left: 10vw;
  position: fixed;
`;