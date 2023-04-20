

import { StartForm } from "../components/StartForm/index.js";
import ContinueButton from "../components/ContinueButton";



export default function Home({ onLevelChange, level, onTopicChange, topic, imageSrc} ) {

  return (
    <>
      <StartForm onLevelChange={onLevelChange} level={level}  onTopicChange={onTopicChange} topic={topic} imageSrc={imageSrc}/>
      <ContinueButton text="Questions" href="./ButtonGrid" />
   
</>
  );
}


