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
            <Section>
                <Heading>
                    <h1>QUIZme</h1>
                    <PlayerNameForm />
                </Heading>
                <VideoContainer>
                    <VideoStream topic={topic} />
                </VideoContainer>
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
