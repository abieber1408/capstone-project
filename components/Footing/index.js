import styled from "styled-components";

const Footing = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0rem;
  position: fixed;
  margin-bottom: 0;
  width: 100%;
  height: 150px; 
  background-color: #E4F5F0;
  color: #FFFFFF;

  div.column {
    width: 33%;
    justify-content: center;
    display: flex;
  }

  div.grid {
    display: grid;
  }

`;
export default Footing;
