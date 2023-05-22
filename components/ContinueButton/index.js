import styled from "styled-components";
import Link from "next/link";

export default function ContinueButton({text, href}) {
    return (
        <StyledLink href={href}>
            {text}</StyledLink>
    );
  }

export const StyledLink = styled(Link)`
/*background-color: #E4F5F0 ;*/
  border-radius: 0.2rem;
  color: #4A86D4;
  cursor: default;
  width: 5rem;
  height: 80px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  padding: 3px;
  &:hover {
    background-color: #35268c;
    color: #efedfa;
    transform: translateY(-2px);
  }
`;