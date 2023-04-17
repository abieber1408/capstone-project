import LevelForm from "../LevelForm";
import PlayerNameForm from "../PlayerForm";
import TopicForm from "../TopicForm";
import ResetButton from "../ResetButton";
import VideoStream from "../VideoStream";
import Heading from "../Heading";
import Footing from "../Footing";

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


import { useState } from 'react';

export function StartForm() {
    const [name, setName] = useState('');
    const [topic, setTopic] = useState('');
    const [level, setLevel] = useState('');

    const resetForm = () => {
        setName('');
        setTopic('');
        setLevel('');
    };

    return (
        <>
            <Heading>QUIZme</Heading>
            <PlayerNameForm value={name} onChange={setName}>Name</PlayerNameForm>
            <TopicForm value={topic} onChange={setTopic}>Topic</TopicForm>
            <LevelForm value={level} onChange={setLevel}>Level</LevelForm>
            <VideoStream></VideoStream>
            <ResetButton onClick={resetForm}></ResetButton>
            <Footing>play and learn</Footing>
        </>
    )
};//