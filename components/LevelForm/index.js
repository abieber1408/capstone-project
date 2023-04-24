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
     </StyledLevelLabel>
  );
}

export const StyledLevelLabel = styled.label`
  flex-direction: column;
  font-weight: 100;
  height: 40px;

  select, option {
   
    border-radius: 0.1rem;
    font-size: 15px;
    height:30px;
    color: #6A9AD6;
  }
`;

