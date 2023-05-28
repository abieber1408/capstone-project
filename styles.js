import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-weight:300;
  }

  body {
    font-size: 12px;
    margin:0rem;
    font-family: system-ui;
    place-items: center;
    background-color:#5DC1EB;
    
  }

 a{
  .goto-top {
    width: 48px;
    height: 48px;
    padding: 8px;
    border-radius: 50%;
    background: #ff4a11;
    color: white;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
    text-decoration: none;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 70px;
    right: 10px;
    z-index: 1;
 }
`;