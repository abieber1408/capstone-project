import Link from "next/link";
import styled from "styled-components";
import Footing from "../Footing";

export default function ButtonGrid() {

    const handleButtonClick = (buttonIndex) => {
      console.log(`Button ${buttonIndex + 1} clicked!`);
    };
 
  return (
    <StyledButtonGrid>
            {[...Array(6)].map((_, index) => (
                <Link key={index} href= {`/question/${index}`}>Question?
            </Link>
            ))}
        <Footing> Select a button for your question</Footing>
    </StyledButtonGrid>
  );
};

const StyledButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 20px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 100%;
    max-height: 45px;
    background-color: #F6FEFF;
    border-radius: 6px;
    color: #333;
    font-size: 8px;
    margin-block:5px;
    box-shadow: 5px 5px 0px RGBA(138,156,255,0.51);
    font-weight: 400;
    text-decoration: none;
    transition: all 0.40s ease-in-out;

    &:hover {
      background-color: #35268c;
      color: #efedfa;
      transform: translateY(-2px);
    }
  }
`;