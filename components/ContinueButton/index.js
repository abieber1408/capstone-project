import styled from "styled-components";
import Link from "next/link";

export default function ContinueButton({text, href}) {
    return (
        <StyledLink href={href}>
            {text}</StyledLink>
    );
  }

export const StyledLink = styled(Link)`
flex-direction: row;
  justify-content: center;
  padding: 45px;
  max-height: 20px;
  background-color: #35268c;
  border-radius: 15px;
  color: #efedfa;
  font-size: 15px;
  cursor: alias ;
  float: right;
  width: 40%;
  margin-botton: 30vh;
  margin-right: 2vw;
  margin-top:-7vh;
  font-size:15px;
  text-decoration: none;
  text-align: center;
`;