import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-weight:200;
   
  }
  body {
    font-size: 20px;
    margin: 0;
    font-family: system-ui;
    font-weight: 300;
    place-items: center;
    min-height: 100vh;
    max-width: 50rem;
    margin-right: 15px;
    background-color: RGBA(110,32,155,0.05);
   
  }
 
`;