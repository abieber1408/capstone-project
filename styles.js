import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-weight:600;
  }

  body {
    font-size: 12px;
    margin:0;
    font-family: system-ui;
    place-items: center;
    background-color:#5DC1EB;
  }
  
p {
    font-margin: black;
    font-weight: 800;
    text-shadow:1px 1px 1px #444;
 }
`;