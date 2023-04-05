
import Link from "next/link";
import styled from "styled-components";


export default function  ButtonGrid ( ) {
    const handleButtonClick = (buttonIndex) => {

      console.log(`Button ${buttonIndex + 1} clicked!`);
    };
  
    return (
    
            <StyledButtonGrid>
            {[...Array(6)].map((_, index) => (
                <Link key={index} href= {`/question/${index}`}>Question?
            </Link>
            ))}
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
    background-color: #F6FEFF;
    color: #333;
    font-size: 8px;
    font-weight: bold;
    max-height: 45px;
    width: 50px;
    text-decoration: none;
    border-radius: 6px;
    padding: 15px;
    margin-block:0px;
    transition: all 0.40s ease-in-out;
    box-shadow: 5px 5px 0px RGBA(138,156,255,0.51);
    

    &:hover {
      background-color: #35268c;
      color: #efedfa;
      transform: translateY(-2px);
    }
  }
`;