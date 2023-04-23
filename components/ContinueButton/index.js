import styled from "styled-components";
import Link from "next/link";

export default function ContinueButton({text, href}) {
    return (
        <StyledLink href={href}>
            {text}</StyledLink>
    );
  }

export const StyledLink = styled(Link)`
  background-color:#8cded7 ;
  border-radius: 0.2rem;
  color: #efedfa;
  cursor: default;
  width: 5rem;

  min-height: 55px;
  font-size: 40px;
  text-decoration: none;
  text-align: center;
`;