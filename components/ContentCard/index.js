import styled from "styled-components";

export default function ContentCard({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  background-color: white;
  border-radius: 1.0em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3em;
  flex-wrap: wrap;
  margin-top:3rem;
  height: auto;
  width: 90%;
  padding:1rem; 
  margin-left:0rem;

  @media (min-width: 250px) {
    margin-left:15px;
    background-color: #ffe3e3;
  }
  @media (min-width: 300px) {
    margin-left:20px;
    background-color: #E4F5F0;
  }
  @media (min-width: 400px) {
    margin-left:20px;
    background-color: #d9ffb8;
  }
  @media (min-width: 500px) {
    margin-left:30px;
    background-color: #b8ffc3;
  }
  @media (min-width: 700px) {
    margin-left:40px;
    background-color: #d7b8ff;
  }
  @media(min-width: 1000px) {
    margin-left:55px;
    background-color:#e5b8ff;
  }
`;



