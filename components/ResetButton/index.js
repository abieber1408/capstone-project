
import styled from "styled-components";


export default function ResetButton() {
    return (
      
           <StyledButton>Reset</StyledButton>
 
  );
}

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  
  padding: 45px;
  max-height: 20px;
  background-color: #35268c;
  border-radius: 15px;
  color: #efedfa;
  font-size: 15px;
  cursor: alias ;
  width: 40%;
  margin-botton:30vh;
  margin-left: 5vw;
  margin-top: 4vh;
  text-align: center;
`;