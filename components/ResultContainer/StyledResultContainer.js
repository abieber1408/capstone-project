import styled from "styled-components";

const ResultContainer = styled.div`
display: flex;
flex-direction: column;
float: right;
position: fixed;
margin-left: 310px;
margin-top: 5vh;
div { 
    margin-top: 50;
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
  h2{
    text-align: center;
    font-size: 10px;
  }

`;
export default ResultContainer;