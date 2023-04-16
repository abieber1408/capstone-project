import styled from "styled-components";
import LevelForm from "../LevelForm";
import PlayerNameForm from "../PlayerForm";
import TopicForm from "../TopicForm";
import ResetButton from "../ResetButton";
import ContinueButton  from "../ContinueButton";
import VideoStream from "../VideoStream";
import Heading from "../Heading";
import Footing from "../Footing";


export function StartForm() {
    
    return (
        <>
            <Heading>QUIZme</Heading>
        <PlayerNameForm>Name</PlayerNameForm>
        <LevelForm>Level</LevelForm>
            <TopicForm>Topic</TopicForm>
        <VideoStream></VideoStream>
            <ResetButton></ResetButton>
            <Footing>play and learn</Footing>
      
        </>
    )
};
