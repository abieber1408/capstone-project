import styled from "styled-components";
import { useState } from "react";

export default function LevelForm({onLevelChange, level}) {
  const [selectedLevel, setSelectedLevel] = useState("");

  const handleLevelSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("selectedLevel", selectedLevel);
    setSelectedLevel("");
  };

  return (
    <StyledLevelLabel onSubmit={handleLevelSubmit} htmlFor="select-level">

      <select id="select-level" name="select-level" onChange={(event) =>   onLevelChange(event)} >
          <option value={0}>Level:</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        value={selectedLevel}
        onChange={(event) => setSelectedLevel(event.target.value)}
      </select>
      
      <StartButton type="submit">Start</StartButton>
    
     </StyledLevelLabel>
  );
}

export const StyledLevelLabel = styled.label`
  display: flex;
  flex-direction: row-reverse;
  font-weight: bold;
  height: 30px;
  width: 110%;
  border-radius: 100px;
  margin-bottom: 0px;
  
  margin:-6.5vh 0 0 -4vw;

  select, option {
    border-radius: 0.7rem;
    width:200%;
    font-size: 18px;
    height:35px;
  }
`;

export const StartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px;
  max-height: 30px;
  background-color: #35268c;
  border-radius: 15px;
  color: #efedfa;
  font-size: 15px;
  cursor: alias ;
  margin-top: 7vh;
  width: 25vw;
  margin-left: 55vw;
`;