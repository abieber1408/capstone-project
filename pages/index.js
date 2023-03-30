
import AnswerQuestion from "../components/AnswerQuestionCard";
import Heading from "../components/Heading";
import { subjects } from "../lib/subjects";


export default function Home() {
  const currentQuestion = subjects[0];
  return (
    <>
      <Heading>QuizMe</Heading>
      
   <AnswerQuestion question={currentQuestion.question} answer1={currentQuestion.answer1} answer2={currentQuestion.answer2} correctAnswer={currentQuestion.correctAnswer} />
      
    
      </>
  );

}