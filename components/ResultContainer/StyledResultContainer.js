import styled from "styled-components";

const ResultContainer = styled.div`
display: flex;
flex-direction: column;
float: right;

div { 
    margin-top: 20;
    justify-content: center;
    height: 30px;
    text-align: center;
    width: 35px;
    font-size: 10px;
    float: right;
    border: 1px solid black;
    border-radius: 5px;
    align-items: flex-end;
    padding: 3px;
  
  }
  h1{
    text-align: center;
    font-size: 10px;
  }
`;
export default ResultContainer;