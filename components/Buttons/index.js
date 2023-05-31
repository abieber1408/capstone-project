import styled from "styled-components";
import Link from "next/link";

export default function ContinueButton({text, href}) {
    return (
        <StyledLink href={href}>
            {text}</StyledLink>
    );
  }

export const StyledLink = styled(Link)`
  transition: all 0.90s ease-in-out;
  cursor: default;
  width: 2rem;
  height: 2rem;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  padding: 25px;
  border-radius: 50%;
  color: #000000;
  font-weight:190;
  font-size: 14px;
  box-shadow: 0px 6px 8px #ffffff;
  text-decoration: none;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  margin-right: 4rem;
  z-index: 1;
  &:hover {
    color: #efedfa;
    transform: translateY(-2px);
`;