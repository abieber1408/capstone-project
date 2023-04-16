import styled from "styled-components";

export default function TopicForm() {
    return (
   
            <StyledFormLabel htmlFor="select-topic">
                <select id="select-ltopic" name="select-topic">
                    <option value="">Topic:</option>
                    <option value="one">Chemistry</option>
                    <option value="two">Technology</option>
                    <option value="tree">Art</option>
                    <option value="four">Science</option>
                    <option value="four">Astronomy</option>
                    <option value="four">Environmental Science</option>
                    <option value="four">Biology</option>
                    <option value="four">Journalism</option>
                    <option value="four">Physics</option>
                    <option value="four">Education</option>
                 </select>
        </StyledFormLabel>
       
  );
}
export const StyledFormLabel= styled.label`
  flex-direction: row;
  font-weight: bold;
  height: 30px;
  width: 70%;
  borde-radius: 100px;
  margin-bottom: 8px;
  float: left;  
  margin-left: 5vw;
  margin-top:-4vh;

  select, option {
    height: 30px;
    border-radius: 0.7rem;
    width:80%;
    font-size: 18px;
    height: 40px;
`;


export const StyledLevelLabel= styled.label`
  flex-direction: row;
  font-weight: bold;
  height: 30px;
  width: 30%;
  borde-radius: 100px;
  margin-bottom: 0px;
  float: right;  
  margin-top:-5vh;

  select, option {
    height: 30px;
    border-radius: 0.7rem;
    width:100%;
    font-size: 18px;
    height: 40px;
`;


export const option = styled.option`
background-color.  #d4d9ff ;`
;

