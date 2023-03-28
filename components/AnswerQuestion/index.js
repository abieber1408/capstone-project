import useSWR from "swr";
import { useRouter } from "next/router";
import {AnswerQuestionCard} from "./AnswerQuestion.styled";
//import { StyledButton } from "../Button/Button.styled";


export default function AnswerQuestion() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/subjects/${id}` : null);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <AnswerQuestionCard>
      <h2>Question:</h2>
      <p>{data.question}</p>
      <AnswerQuestionCard>
        <h2>Answers:</h2>
        <p>{data.answer}</p>
        <p>{data.falseA} </p>
      </AnswerQuestionCard>   
      </AnswerQuestionCard>
  );
}








