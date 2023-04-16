import styled from "styled-components";

import StartButton from "../StartButton";

export default function LevelForm() {
    return (
      <StyledLevelLabel htmlFor="select-level">
        <select id="select-level" name="select-level">
          <option value="">Level:</option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="tree">3</option>
          <option value="four">4</option>
        </select>
        <StartButton>Start</StartButton>
     </StyledLevelLabel>
  );
}

export const StyledLevelLabel= styled.label`
  flex-direction: row;
  font-weight: bold;
  height: 30px;
  width: 30%;
  borde-radius: 100px;
  margin-bottom: 0px;
  float: right;  
  margin-top:-4vh;
  margin-right: 2vw;

  select, option {
    height: 30px;
    border-radius: 0.7rem;
    width:100%;
    font-size: 18px;
    height: 40px;
  }
`;
