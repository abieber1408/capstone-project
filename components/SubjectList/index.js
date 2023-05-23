
import useSWR from "swr";
import { useRouter } from "next/router";
//import { StyledHeading, StyledList } from "./ProductList.styled";
import { useState } from "react";
import Quiz from "../AnswerQuestionCard/AnswerQuestion";
import styled from "styled-components";

export default function SubjectList() {
  const router = useRouter();
  const { data, isLoading } = useSWR("/api/myquizes");
  const [openId, setOpenId] = useState(null);
  const [answered, setAnswered] = useState([]);

  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  

  const questionIds = Object.keys(data);

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

  return (
    <>
     
        <StyledSubjectHeading >My Questions</StyledSubjectHeading>
      <ListSection>
      <StyledList>
            <StyledMyQuizAddButton >
            {questionIds.map((id) => (
              <a className={"question " + questionClass(id)} key={id} onClick={() => handleButtonClick(id)}>
                {data[id].question}
              </a>
            ))}
          </StyledMyQuizAddButton>
          </StyledList>
        <a href="#top" className="gototop">UP</a>
        </ListSection>
      
    </>
  );
}
export const ListSection = styled.section`
a{
  transition: all 0.90s ease-in-out;
  width: 48px;
  height: 48px;
  padding: 8px;
  border-radius: 50%;
  background: #FA7A66;
  color: #000000;
  font-weight:190;
  box-shadow: 0px 6px 8px #ffffff;
  text-decoration: none;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 55px;
  right: 10px;
  z-index: 1;
  
  &:hover {
    color: #efedfa;
    transform: translateY(-2px);
  }
}
`;
export const StyledList = styled.div`
position: relative;
  list-style-type: none;
  display: flex;
  gap: 1rem;
  justify-items: center;

  overflow-y: scroll;
  height: 400px;
`;

const StyledMyQuizAddButton = styled.div`
   
display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap:2rem;
   padding: 15px;
   
  a {
    overflow: scroll;
   position:relative;
   scroll-behavior: smooth;
   transition: all 0.90s ease-in-out;
   
    justify-content: center;
    align-items: center;
    width: 93%;
    max-height: 100px;
    background-color: #6A9AD6;
    border-radius: 0.5rem;
    font-size: 12px;
    box-shadow: 5px 5px 5px #AFC3D7;
    font-weight: 190;
    text-decoration: none;
  top: 1rem;
   
    margin-left: 6vw;


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


const StyledSubjectHeading = styled.h2`
top:12rem;
 margin-left: 8rem;
  text-align: center;
  font-size: 18px;
  font-weight: 250;
  position: fixed;
  background: #5DC1EB;
  z-index: 1;
  padding: 5px;
 `;