import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
    font-weight:   
    display: grid;
    margin: 0;
    place-items: center;
    min-height: 100vh;
    max-width: 50rem;
  }
  h1{
    font-size: 9px;
  }
  div {
    font-size: 25px;
  }
  h2{
   font-size: 9px;
  }
  p {
    font-style:italic;
    font-weight:200;
  }
`;