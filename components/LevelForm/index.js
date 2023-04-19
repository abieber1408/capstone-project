import styled from "styled-components";
import { useState } from "react";

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

export const StyledLevelLabel = styled.label`
  display: flex;
  flex-direction: row-reverse;
  font-weight: bold;
  height: 30px;
  width: 90%;
  borde-radius: 100px;
  margin-bottom: 0px;
  margin-left: 20vw;
  margin-top: -7vh;

  select, option {
    border-radius: 0.7rem;
    width:60%;
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
  margin-top: 9vh;
  width: 25vw;
margin-left: 30vw;
`;