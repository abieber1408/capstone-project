import useSWR from "swr";
//import { StyledButton } from "../AnswerQuestionCard/AnswerQuestion";
import styled from "styled-components";

export default function SubjectForm() {
  const subjects = useSWR("/api/subjects");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const subjectData = Object.fromEntries(formData);

    const response = await fetch("/api/subjects", {
      method: "POST",
      body: JSON.stringify(subjectData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // If our attempt at posting our joke is a success, we proceed here.
      await response.json();
      // At this point, the promise of response has resolved.
      subjects.mutate();
      // Now we're notifying swr that our data has been mutated, which will trigger a rerender.
      // If we don't include this line, the page won't automatically refresh and our submitted
      // joke won't be immediately visible.
      event.target.reset();
      // Here we're resetting our form.
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
   
    <StyledSubjectForm onSubmit={handleSubmit}>
      <StyledSubjectHeading>Create my Quiz</StyledSubjectHeading>
      
      
      <StyledSubjectLabel htmlFor="topic">
        Topic:
        <input type="text" id="topic" name="topic"  placeholder= " lowercase"/>
      </StyledSubjectLabel>

      <StyledSubjectLabel htmlFor="question">
        Question:
        <input type="text" id="question" name="question" />
      </StyledSubjectLabel>

      <StyledSubjectLabel htmlFor="answer1">
        Answer1:
        <input type="text" id="answer1" name="answer1" />
      </StyledSubjectLabel>
      
          <StyledSubjectLabel htmlFor="answer2">
        Answer2:
        <input type="text" id="answer2" name="answer2" />
      </StyledSubjectLabel>
      <StyledSubjectLabel htmlFor="correctAnswer">
        Correct-Answer:
        <input type="text" id="correctAnswer" name="correctAnswer" />
      </StyledSubjectLabel>

      <StyledAddButton type="submit">ADD</StyledAddButton>
    
      </StyledSubjectForm>
     
  );
}


export const StyledSubjectForm = styled.form`
 width: 100%;
 padding: 40px;

 background: #5DC1EB;
 padding: 10px;  
 position: sticky;  
 top: 0;  
 z-index: 1;
`;

export const StyledSubjectHeading = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: 250;
`;

export const StyledSubjectLabel = styled.label`
  display: flex;
  justify-content: space-between;
  allign-items: center;
  gap: 5px;
  font-weight: 190;

input {
  allign-items: center;
  font-weight:100;
  text-align: center;
}
`;

export const StyledAddButton = styled.button`
  display: flex;
  transition: all 0.90s ease-in-out;
  justify-content: center;
  align-items: center;
  padding:15px;
  width: 10%;
  max-height: 100px;
  background-color: #6A9AD6;
  color: #000000;
  font-weight:100;
  margin-block:10px;
  box-shadow: 0px 6px 8px #ffffff;
  border-radius: 10px;
  border:10px;
  font-size: 10px;
  background: #5DC1EB;
  &:hover {
    color: #efedfa;
    transform: translateY(-2px);
  }
`;