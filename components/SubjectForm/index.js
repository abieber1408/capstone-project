import useSWR from "swr";
import styled from "styled-components";

export default function SubjectForm() {
  const myquizes = useSWR("/api/myquizes");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const myquizData = Object.fromEntries(formData);

    const response = await fetch("/api/myquizes", {
      method: "POST",
      body: JSON.stringify(myquizData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      myquizes.mutate();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <StyledSubjectForm onSubmit={handleSubmit}>
      <StyledSubjectHeading>Create my Quiz</StyledSubjectHeading>
        <StyledSubjectLabel htmlFor="topic">
          Name:
          <input type="text" id="name" name="name"  placeholder= "lowercase"/>
        </StyledSubjectLabel>
        <StyledSubjectLabel htmlFor="question">
          Question:
          <input type="text" id="question" name="question" />
        </StyledSubjectLabel>
        <StyledSubjectLabel htmlFor="answer1">
          Answer - correct:
          <input type="text" id="answer1" name="answer1" />
        </StyledSubjectLabel>
        <StyledSubjectLabel htmlFor="answer2">
          Answer - false:
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
 padding: 10px;
 background: #4A86D4;
 font-weight: 100;
`;

export const StyledSubjectHeading = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: 250;
`;

export const StyledSubjectLabel = styled.label`
  display: grid;
  grid-template: auto/150px auto;
  font-weight: 190;
  width: 94%;
  margin-left: 15px;
 input {
  displa: flex;
  allign-items: center;
  font-weight:100;
  text-align: center;
  justify-content: end;
}
`;

export const StyledAddButton = styled.button`
  display: flex;
  transition: all 0.90s ease-in-out;
  justify-content: center;
  margin-left: 15px;
  align-items: center;
  padding:10px;
  width: 10%;
  max-height: 100px;
  background-color: #6A9AD6;
  color: #000000;
  box-shadow: 0px 1px 2px #ffffff;
  border-radius: 10px;
  border:15px;
  font-size: 10px;
  background: #5DC1EB;
  &:hover {
    color: #efedfa;
    transform: translateY(-2px);
  }
`;