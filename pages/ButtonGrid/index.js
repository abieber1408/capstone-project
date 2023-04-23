import QuestionCard from "../../components/QuestionCard";
import ContinueButton from "../../components/ContinueButton";
export default function ButtonGridExport({ topic, imageSrc, level }) {
    
    return (
     <>
            <QuestionCard topic={topic} imageSrc={imageSrc} level={level} />
         
    </>
    )
};