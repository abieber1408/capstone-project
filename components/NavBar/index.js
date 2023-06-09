import styled from "styled-components";
import Link from "next/link";

export default function NavBar() {
  return (
    <NavBarBox>
      <NavBarList role="list">
        <li>
          <StyledLink href="/infopage">
            Info
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/">
            Start
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/MyQuiz">
            MyQuiz
          </StyledLink>
        </li>
     
      </NavBarList>
    </NavBarBox>
  );
}

const NavBarBox = styled.nav`
  background-color: white;
  bottom: 0;
  width: 100%;
  display: flex;
  position: fixed;
  height: 3em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  align-items: center;
`;

const NavBarList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-decoration: none;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 0;
  width: 100vw;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  color: black;
  list-style: none;
  text-decoration: none;
  font-size: 12px;
  width: auto;
  font-weight: 250;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

