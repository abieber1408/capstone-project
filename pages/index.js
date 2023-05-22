import { StartForm } from "../components/StartForm/index.js";
//import SubjectList from "../components/QuestionCard/index.js";
export default function Home({ onLevelChange, level, onTopicChange, topic, imageSrc} ) {

  return (
    <>
      <StartForm onLevelChange={onLevelChange} level={level} onTopicChange={onTopicChange} topic={topic} imageSrc={imageSrc} />
    </>
  );
}
