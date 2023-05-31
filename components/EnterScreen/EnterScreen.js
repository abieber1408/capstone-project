import styled from "styled-components";
import Lottie from "lottie-react";
import questionicon from "../../public/lottie/dots.json";

export default function EnterScreen() {
  return (
    <Container>
      <HeadingContainer>
        <Heading>QUIZme</Heading>
      </HeadingContainer>
      <QuestionIconAnimation animationData={questionicon} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9em;
`;

const Heading = styled.h1`
  font-family: var(--font-family-heading);
  color: white;
  Font-size:4rem;
  Font-weight:800;
  text-shadow: 1px 1px #000000;
`;

const QuestionIconAnimation = styled(Lottie)`
  width: 12em;
  height: 12em;
`;