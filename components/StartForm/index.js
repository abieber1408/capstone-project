import { useState, useRef } from "react";
import LevelForm from "../LevelForm";
import PlayerNameForm from "../PlayerForm";
import TopicForm from "../TopicForm";
import ResetButton from "../ResetButton";
import VideoStream from "../VideoStream";
import Heading from "../Heading";
import Footing from "../Footing";
import React from "react";

/*export function StartForm() {
    
    return (
        <>
            <Heading>QUIZme</Heading>
            <PlayerNameForm>Name</PlayerNameForm>
            <TopicForm>Topic</TopicForm>
            <LevelForm>Level</LevelForm>
             <VideoStream></VideoStream>
            <ResetButton></ResetButton>
            <Footing>play and learn</Footing>
        </>
    )
};*/



export function StartForm( { onTopicChange, topic, imageSrc} ) {
    const [name, setName] = useState("");
  
    const [level, setLevel] = useState("");
  

    const resetForm = () => {
        setName("");
      
        setLevel("");
     
    };

    return (
        <>
        <Heading>QUIZme</Heading>
        <PlayerNameForm value={name} onChange={setName}>Name</PlayerNameForm>
        <TopicForm onTopicChange={onTopicChange} t imageSrc={imageSrc} >Topic</TopicForm>
        <LevelForm value={level} onChange={setLevel}>Level</LevelForm>
        <VideoStream></VideoStream>
        <ResetButton onClick={resetForm}>Reset</ResetButton>
        <Footing>play and learn</Footing>
    </>
)
};