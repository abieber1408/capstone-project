

import { StartForm } from "../components/StartForm/index.js";
import ContinueButton from "../components/ContinueButton";


export default function Home({ onTopicChange, topic, imageSrc} ) {
  
  return (
    <>
      <StartForm onTopicChange={onTopicChange} topic={topic} imageSrc={imageSrc}/>
      <ContinueButton text="Questions" href="./ButtonGrid" />
</>
  );
}


