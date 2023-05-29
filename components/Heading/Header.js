import styled from "styled-components";


export default function Header() {
  return (
    <HeadingContainer>
    <Heading>
        QUIZme
        </Heading>
    </HeadingContainer>
  );
}


/*const HeadingContainer = styled.div`
  background-color: var(--color-orange);
  top: 0;
  display: flex;
  position: sticky;
  z-index: 10;
  height: 4em;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  gap: 0.5em;
  width: 100vw;
`;*/

export const HeadingContainer = styled.div`
  padding: 30px;
  width: 100%;
  height: 140px;
  background-color:#4A86D4 ;
  color: #FFFFFF;
  grid-area: header;
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  text-shadow: 1px 1px #000000;
  h1 {
    margin: 0;
    font-size: 55px;
    text-align: center;
    font-weight: 900;
    text-shadow:1px 1px 1px #18386b;
  }
`;

const Heading = styled.h1`
width: 100%`;