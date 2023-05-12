import QuestionCard from "../../components/QuestionCard";


export default function ButtonGridExport({ topic, imageSrc, level }) {
    
    return (
     <>
            <QuestionCard topic={topic} imageSrc={imageSrc} level={level} />
         
    </>
    )
};