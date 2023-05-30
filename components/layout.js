import Header from "./Heading/Header";
import NavBar from "./NavBar/index";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <LayoutStyling>
      <Header text="Quizme" />
      <main>{children}</main>
      <NavBar />
    </LayoutStyling>
  );
}

const LayoutStyling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;