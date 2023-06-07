import styled from "styled-components";

export default function ContentCard({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  background-color: white;
  border-radius: 1.0em;
  text-align: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3em;
  flex-wrap: wrap;
  margin-top:2rem;
  height: auto;
  width: 90%;
  padding:1rem; 
  margin-left:1rem;
`;