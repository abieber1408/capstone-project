import LevelForm from "../LevelForm";
import PlayerNameForm from "../PlayerForm";
import TopicForm from "../TopicForm";
import VideoStream from "../VideoStream";
import Heading from "../Heading";
import Footing from "../Footing";
import React from "react";


export function StartForm( { onTopicChange, imageSrc, onLevelChange, topic} ) {
  
    return (
        <>
            <Heading>QUIZme
                <PlayerNameForm />
            </Heading>
            <Footing>
                <TopicForm onTopicChange={onTopicChange} imageSrc={imageSrc} />
                <LevelForm onLevelChange={onLevelChange} /> </Footing>
        </>
)
};