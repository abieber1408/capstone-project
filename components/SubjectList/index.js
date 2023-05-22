import useSWR from "swr";
import { useRouter } from "next/router";
//import { StyledHeading, StyledList } from "./ProductList.styled";

import styled from "styled-components";
export default function SubjectList() {
  const router = useRouter();
  const { data, isLoading } = useSWR("/api/subjects");

  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      
    
        <StyledSubjectHeading>My Questions</StyledSubjectHeading>
       
       <ListSection>
      <StyledList>
        {data.map((subject) => (
          <li key={subject._id}>
            <StyledMyQuizAddButton
              type="button"
              onClick={() => router.push(`/${subject._id}`)}
            >
              {subject.question}
            </StyledMyQuizAddButton>
          </li>
        ))}
        </StyledList>
        <a href="#top" className="gototop">UP</a>
        </ListSection>
   
    </>
  );
}
export const ListSection = styled.section`

a{
  transition: all 0.90s ease-in-out;
  width: 48px;
  height: 48px;
  padding: 8px;
  border-radius: 50%;
  background: #FA7A66;
  color: #000000;
  font-weight:190;
  box-shadow: 0px 6px 8px #ffffff;
  text-decoration: none;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 55px;
  right: 10px;
  z-index: 1;
  &:hover {
    color: #efedfa;
    transform: translateY(-2px);
  }
}
`;
export const StyledList = styled.div`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 0px;
`;

const StyledMyQuizAddButton = styled.div`
position: relative;
scroll-behavior: smooth;
transition: all 0.90s ease-in-out;
justify-content: center;
align-items: center;
padding:15px;
width: 90%;
max-height: 100px;
background-color: #6A9AD6;
border-radius: 0.5rem;
font-size: 12px;
box-shadow: 5px 5px 5px #AFC3D7;
font-weight: 190;
text-decoration: none;
top: 0rem;
margin-left: 5vw;
bottum: 1rem;

&:hover {
  background-color: #35268c;
  color: #efedfa;
  transform: translateY(-2px);
}
`;

const StyledSubjectHeading = styled.h2`
top: 14rem;
 margin-left: 0rem;
  text-align: center;
  font-size: 18px;
  font-weight: 250;
  position: sticky;
  background: #5DC1EB;
  z-index: 1;
  padding: 5px;
`;