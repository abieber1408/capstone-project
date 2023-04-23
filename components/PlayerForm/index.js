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
  justify-content: center;
  width: 50vw;
  margin-left: 24vw;
`;
export const Label = styled.label`
`;
export const Input = styled.input`
  height: 25px;
  border-radius: 0.1rem;
  width: 100%;
  border: black;
  color: black;
  font-size: 15px;
  background-color:#6A9AD6;
`;



