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
    margin: 0;
    font-family: system-ui;
    place-items: center;
    min-height: 100vh;
    max-width: 50rem;
    margin-right: 25px;
    background-color: RGBA(110,32,155,0.05);
  
  }
 p {
  margin-left: 150px;
  position: fixed;
  margin-top: 5vh;
  color: white;
  font-size: 30px;
  font-margin: black;
  font-weight: 800;
  text-shadow:1px 1px 0 #444
 }
`;