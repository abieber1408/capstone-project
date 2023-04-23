import { StartForm } from "../components/StartForm/index.js";
import ContinueButton from "../components/ContinueButton"
import styled from "styled-components";
export default function Home({ onLevelChange, level, onTopicChange, topic, imageSrc} ) {

  return (
    <>
    
      <StartForm onLevelChange={onLevelChange} level={level}  onTopicChange={onTopicChange} topic={topic} imageSrc={imageSrc}/>
    {topic && <ContinueButton text="" href="./ButtonGrid" />}  
      
    </>
  );
}

