
import AnswerQuestion from "../components/AnswerQuestionCard";
import Heading from "../components/Heading";
import { subjects } from "../lib/subjects";
import Footing from "../components/Footing";

import Quiz from "../components/AnswerQuestionCard/ChangeAnswerQuestion";

export default function Home() {
  const currentQuestion = subjects[0];
  return (
    <>
      <Heading>LOGO</Heading> 
        <Quiz/>
      <Footing>QuizMe-QuestionCard</Footing>
      
      </>
  );

}