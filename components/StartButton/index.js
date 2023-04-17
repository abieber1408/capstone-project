
import styled from "styled-components";


export default function StartButton() {
    return (
           <Button>Start</Button>
  );
}

export const Button = styled.button`
  display: flex;
  margin-left: -82px;
  justify-content: center;
  align-items: center;
  padding: 45px;
  max-height: 50px;
  background-color: #35268c;
  border-radius: 15px;
  color: #efedfa;
  font-size: 15px;
  cursor: alias ;
  margin-top:2vh;
  width: 29vw;
`;