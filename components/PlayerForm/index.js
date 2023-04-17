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
        <Label htmlFor="playerName">Name</Label>
        <Input
          id="playerName"
          name="playerName"
          type="text"
          aria-label="Player name"
          required
          value={playerName}
          onChange={(event) => setPlayerName(event.target.value)}
            />
        <SubmitButton type="submit">submit</SubmitButton>
     </StyledForm>
  );
}
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 110vw;
  margin-left: 5vw;
  margin-top: 20vh;
  gap: 0.8rem;
  padding-bottom: 5rem;
  color: var(--white);
`;
export const Label = styled.label`
display: flex;
  font-weight: bold;
  font-size: 18px;
  height: 2px;
  margin-bottom:10px;
`;
export const Input = styled.input`
display: flex;
  height: 50px;
  border-radius: 0.7rem;
  width: 90%;
  font-size: 18px;
`;
export const SubmitButton = styled.button` 
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 80px;
  background-color: #35268c;
  border-radius: 100px;
  color: #efedfa;
  font-size: 15px;
  cursor: alias ;
  width: 18vw;
  height: 70px;
  margin-left:110vw;
  gap: 0.7rem;
  text-decoration: none;
  margin-top:-11vh;
  font-size:9px;
  text-decoration: none;
  padding: 20px;
  `;

 export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  max-height: 30px;
  background-color: #35268c;
  border-radius: 100px;
  color: #efedfa;
  font-size: 8px;
  cursor: alias ;
  margin-left: 5vw;
  margin-top: 10vh;
  width: 15%;
`;


