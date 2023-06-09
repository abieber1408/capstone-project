import QuestionCard from "../../components/QuestionCard";
import NavBar from "../../components/NavBar";

export default function ButtonGridExport({ topic, imageSrc, level }) {
    
    return (
     <>
        <QuestionCard topic={topic} imageSrc={imageSrc} level={level} />
        <NavBar />
    </>
    )
};