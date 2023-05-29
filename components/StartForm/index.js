import ContinueButton from "../Buttons";
import LevelForm from "../LevelForm";
//import PlayerNameForm from "../PlayerForm";
import TopicForm from "../TopicForm";
import VideoStream from "../VideoStream";
import Header from "../Heading/Header";
import Footing from "../Footing";
import React from "react";
//import { StyledTopicImage } from "../TopicForm";
import styled from "styled-components";
import NavBar from "../NavBar";
import Link from "next/link";


export function StartForm( { onTopicChange, imageSrc, onLevelChange, topic} ) {
  
    return (
        <>
            <Section>
                <Header>
                    <h1>QUIZme</h1>
                </Header>
                
                <VideoContainer>
                    <VideoStream topic={topic} />
                </VideoContainer>
                <Footing>
                    <div className="column grid">
                        <TopicForm onTopicChange={onTopicChange} imageSrc={imageSrc} />
                        <LevelForm onLevelChange={onLevelChange} />
                    </div>
                    
                    <div className="column">
                    <StyledButtonLink href="./ButtonGrid">
                         Quiz
                    </StyledButtonLink>
                    </div>
                </Footing>
                <NavBar /> 
            </Section>
        </>
)
};

const Section = styled.div`
  width: 100%;
  height: 100vh;
  
  /* grid container settings, see https://css-tricks.com/how-to-use-css-grid-for-sticky-headers-and-footers/#aa-fixed-header-fixed-footer */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    'header'
    'main'
    'footer';
`;

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CreateMyQuizButton = styled.button`
transition: all 0.90s ease-in-out;
  cursor: default;
  width: 4rem;
  height: 4rem;
  font-size: 20px;
  text-align: center;
  padding: 3px;
  border-radius: 50%;
  color: #000000;
  font-weight:190;
  box-shadow: 0px 6px 8px #ffffff;
  text-decoration: none;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 1rem;
  z-index: 1;

  &:hover {
    color: #efedfa;
    transform: translateY(-2px);
  }
`;

export const StyledButtonLink= styled(Link)`
color: white;
text-decoration: none;
font-size:30px;
width: auto;
font-weight:800;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 2rem;
text-shadow: 2px 1px #0a62f0;
`;

