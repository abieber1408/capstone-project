import { useState } from "react";
import styled from "styled-components";



export default function Score(currentQuestion, answer, subjects) {
    const [score, setScore] = useState(0);
    if (answer === subjects[currentQuestion].correctAnswer) {
        setScore(score + 1);
    }
    return (
        <div>
           <p>Score:{score}/6</p>
        </div>
    )
};