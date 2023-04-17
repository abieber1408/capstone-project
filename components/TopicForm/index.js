import styled from "styled-components";
import { useState } from "react";

export default function TopicForm () {
  const [topic, setTopic] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const handleTopicChange = (event) => {
   
    setTopic(event.target.value);
    setImageSrc(`/images/${event.target.value}.jpg`);
  }
    return (
   <>
        <StyledFormLabel>
            <select id="select-topic" name="select-topic">
            <option value="">Topic:</option>
            <option value="chemistry">Chemistry</option>
            <option value="technology">Technology</option>
            <option value="art">Art</option>
            <option value="science">Science</option>
            <option value="astronomy">Astronomy</option>
            <option value="environmentalScience">Environmental Science</option>
            <option value="biology">Biology</option>
            <option value="journalism">Journalism</option>
            <option value="physics">Physics</option>
           <option value="education">Education</option>
           </select>
        </StyledFormLabel>
        <StyledImage src={imageSrc} alt={topic} width={200} height={75} />
        
   </>
  );
};


export const StyledTopic = styled.div`
display: flex;
flex-direction: column;
float:left;
`;


export const StyledImage = styled.img`
display: flex;
margin-top: 50px;

`;

export const StyledFormLabel = styled.label`
  display:flex;
  flex-direction: row;
  font-weight: bold;
  height: 35px;
  width: 100%;
  borde-radius: 100px;
  margin-bottom: 5px;
  float: left;  
  margin-left: 5vw;
  margin-top:-12vh;

  select, option {
    height: 30px;
    border-radius: 0.7rem;
  
    font-size: 18px;
    height: 40px;
  }
`;





export const option = styled.option`
background-color.  #d4d9ff ;`
;

