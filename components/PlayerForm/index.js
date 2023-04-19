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
          placeholder= "Name:"
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
  width: 100vw;
  margin-left: 5vw;
  margin-top: 14vh;
  gap: 0.8rem;
  padding-bottom: 5rem;
  color: var(--white);
`;
export const Label = styled.label`
display: flex;
  font-weight: bold;
  font-size: 18px;
  height:-20px;
  margin-bottom:10px;
  
`;
export const Input = styled.input`
display: flex;
  height: 35px;
  border-radius: 0.7rem;
  width: 78%;
  font-size: 19px;
 color: black;
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
  width: 16vw;
  height: 60px;
  margin-left:80vw;
  gap: 0.7rem;
  text-decoration: none;
  margin-top:-9vh;
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


