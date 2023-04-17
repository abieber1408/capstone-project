import styled from "styled-components";
import Footing from "../Footing";
import { subjects } from "../../lib/subjects"
import { useState } from "react";
import Quiz from "../AnswerQuestionCard/AnswerQuestion";
import ResultContainer from "../ResultContainer/StyledResultContainer";
import Image from "next/image";
import StyledTopic from "../Topic/StyledTopic";



export function ButtonGrid() {

  const [openId, setOpenId] = useState(null);
  const [answered, setAnswered] = useState([]);
  const questionIds = [...Array(20)].map((_, index)=> index);

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
      <StyledTopic>
      Art
      </StyledTopic>
       <StyledImage
         src={"/images/art.jpg"}
         alt="art"
         width={75}
         height={75} />
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
        <dl style={{ position: "absolute", top:-30, left: 19}}>
       <h2>{newStarScore}</h2>
        </dl>
        </h1>
      </ResultContainer>
      <StyledButtonGrid>
        {questionIds.map((id) => <a className="question" key={id} onClick={() => handleButtonClick(id)}>{id}</a>)}
      </StyledButtonGrid>
      
     <Footing> Select a button for your question</Footing>
    </>
  );
};

const StyledButtonGrid = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  padding: 100px;


  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width:150%;
    max-height: 100px;
    background-color: #acccfc;
    border-radius: 6px;
    color: #333;
    font-size: 8px;
    margin-block:0px;
    box-shadow: 5px 5px 0px RGBA(199,176,230,0.7);
    font-weight: 400;
    text-decoration: none;
    transition: all 0.40s ease-in-out;
    margin-top: 35px;
    margin-left: -75px;
    &:hover {
      background-color: #35268c;
      color: #efedfa;
      transform: translateY(-2px);
    }
  }
`;

const StyledImage = styled.img`
display: flex;
flex-direction: row;
margin-top:6vh;
justify-content: center;
align-items: center;
width: 50%;
margin-left: 25px;
position: fixed;
`;