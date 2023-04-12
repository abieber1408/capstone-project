import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-weight:300;
   
  }
  body {
    font-size: 18px;
    margin: 0;
    font-family: system-ui;
    font-weight: 300;
   
    place-items: center;
    min-height: 100vh;
    max-width: 50rem;
    margin-left:15px;
    margin-right: 15px;
  }
  h1{
    font-size: 18px;
  }

  h2{
   font-size: 12px;
  }
  p {
    font-style:italic;
    font-weight:300;
  }
`;