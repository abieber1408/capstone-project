import styled from "styled-components";
import { useState } from "react";

export default function PlayerNameForm () {
  const [playerName, setPlayerName] = useState("");

  const handlePlayerNameSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("playerName", playerName);
    setPlayerName("");
  };

    return (
      <StyledForm onSubmit={handlePlayerNameSubmit}>
        <Label htmlFor="playerName"></Label>
        <Input
          id="playerName"
          name="playerName"
          placeholder= "      name"
          type="text"
          aria-label="Player name"
          required
          value={playerName}
          onChange={(event) => setPlayerName(event.target.value)}
            />
     </StyledForm>
  );
}
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  margin-left: -50vw;
  margin-top: 24vh;
  gap: 0.8rem;
  padding-bottom: 5rem;
  
`;
export const Label = styled.label`
display: flex;
  margin-bottom:10px;
  
  
`;
export const Input = styled.input`
display: flex;
  height: 25px;
  border-radius: 0.1rem;
  width: 100%;
 border: black;
 color: black;
 font-size: 15px;
 background-color:#6A9AD6;
`;



