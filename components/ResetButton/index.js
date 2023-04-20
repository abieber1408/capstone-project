import styled from "styled-components";

export default function ResetButton({onPlayerNameSubmit, onLevelSubmit, onTopicChange}) {
    return (
      
           <StyledButton onPlayerNameSubmit={onPlayerNameSubmit} onLevelSubmit={onLevelSubmit} onTopicChange={onTopicChange}>Reset</StyledButton>
 
  );
}

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 25px;
  max-height: 20px;
  background-color: #35268c;
  border-radius: 15px;
  color: #efedfa;
  font-size: 15px;
  cursor: alias ;
  width: 35%;
  margin-botton:30vh;
  margin-left: 15vw;
  margin-top: 1vh;
  text-align: center;
`;