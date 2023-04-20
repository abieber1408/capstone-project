import { useState } from "react";
import LevelForm from "../LevelForm";
import PlayerNameForm from "../PlayerForm";
import TopicForm from "../TopicForm";
import ResetButton from "../ResetButton";
import VideoStream from "../VideoStream";
import Heading from "../Heading";
import Footing from "../Footing";
import React from "react";

export function StartForm( { onTopicChange, imageSrc, onLevelChange, level} ) {
 

  
    
    return (
        <>
        <Heading>QUIZme</Heading>
        <PlayerNameForm ></PlayerNameForm>
        <TopicForm onTopicChange={onTopicChange}  imageSrc={imageSrc} >Topic</TopicForm>
        <LevelForm onLevelChange={onLevelChange} >Level</LevelForm>
        <VideoStream></VideoStream>
        <ResetButton >Reset</ResetButton>
        <Footing>play and learn</Footing>
        </>
)
};