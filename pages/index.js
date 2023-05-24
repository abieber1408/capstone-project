import { StartForm } from "../components/StartForm/index.js";
export default function Home({ onLevelChange, level, onTopicChange, topic, imageSrc} ) {

  return (
    <>
      <StartForm onLevelChange={onLevelChange} level={level} onTopicChange={onTopicChange} topic={topic} imageSrc={imageSrc} />
    </>
  );
}
