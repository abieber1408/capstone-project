import styled from "styled-components";
import Link from "next/link";

export default function ContinueButton({text, href}) {
    return (
        <StyledLink href={href}>
            {text}</StyledLink>
    );
  }

export const StyledLink = styled(Link)`

display: flex;

  padding: 2rem;
  max-height: 10px;
  background-color:#8cded7 ;
  border-radius: 0.2rem;
  color: #efedfa;
  font-size: 15px;
  cursor: default;
  width: 5rem;
  margin: 1vh 0vw 0vh 75vw;
  font-size:15px;
  text-decoration: none;
  text-align: center;
  margin-botton: 50px;
`;