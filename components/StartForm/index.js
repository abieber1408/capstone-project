import ContinueButton from "../ContinueButton";
import LevelForm from "../LevelForm";
import PlayerNameForm from "../PlayerForm";
import TopicForm from "../TopicForm";
import VideoStream from "../VideoStream";
import Heading from "../Heading";
import Footing from "../Footing";
import React from "react";
import { StyledTopicImage } from "../TopicForm";


export function StartForm( { onTopicChange, imageSrc, onLevelChange, topic} ) {
  
    return (
        <>
            <Heading>
                <h1>QUIZme</h1>
                <PlayerNameForm />
            </Heading>
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
        </>
)
};