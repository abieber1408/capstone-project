import Head from "next/head";
import { themes } from "../../lib/data";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { useRouter } from "next/router";


export default function Questions() {
  const router = useRouter();
  const { query: { id } } = router;
  const question = themes.find((question) => id === id);
  console.log(question);
    return (
      <div>
        <Head>
          <title>Question</title>
        </Head>
        <h1>Question</h1>
        <QuestionCard question={question.question} />
      </div>
    );
}


