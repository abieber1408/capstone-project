import ContinueButton from "../ContinueButton";
import LevelForm from "../LevelForm";
import PlayerNameForm from "../PlayerForm";
import TopicForm from "../TopicForm";
import VideoStream from "../VideoStream";
import Heading from "../Heading";
import Footing from "../Footing";
import React from "react";
import { StyledTopicImage } from "../TopicForm";
import styled from "styled-components";


export function StartForm( { onTopicChange, imageSrc, onLevelChange, topic} ) {
  
    return (
        <>
            <Wrapper>
                <Heading>
                    <h1>QUIZme</h1>
                    <PlayerNameForm />
                </Heading>
                <div class="video">
                    <VideoStream topic={topic} />
                </div>
                <Footing>
                    <div className="column grid">
                        <TopicForm onTopicChange={onTopicChange} imageSrc={imageSrc} />
                        <LevelForm onLevelChange={onLevelChange} />
                    </div>
                    <div className="column">
                        {imageSrc && <StyledTopicImage src={imageSrc} alt={topic} width={100} height={80} />}
                    </div>
                    <div className="column">
                        {topic && <ContinueButton text="?" href="./ButtonGrid" />}  
                    </div>
                </Footing>
            </Wrapper>
        </>
)
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  
  /* grid container settings */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    'header'
    'main'
    'footer';

  div.video {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;