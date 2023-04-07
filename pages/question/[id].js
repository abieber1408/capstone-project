import { useRouter } from "next/router"
import { subjects } from "../../lib/subjects"
import Quiz from "../../components/AnswerQuestionCard/ChangeAnswerQuestion";

export default function Question() {
    const router = useRouter()
    const id = + router.query.id
    const quiz = subjects[id]

    return (
        <div>
            <Quiz data={quiz} id={ id } />
    </div>
    )
} 

