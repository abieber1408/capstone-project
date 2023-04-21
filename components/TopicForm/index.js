import styled from "styled-components";

export default function TopicForm({ onTopicChange, topic, imageSrc} ) {
  
    return (
      <>
        <StyledFormLabel>
            <select id="select-topic" name="select-topic" onChange={(event)=>onTopicChange(event)}>
            <option value="">Topic:</option>
            <option value="chemistry">Chemistry</option>
            <option value="technology">Technology</option>
            <option value="art">Art</option>
            <option value="science">Science</option>
            <option value="astronomy">Astronomy</option>
            <option value="environmental">Environmental</option>
            <option value="biology">Biology</option>
            <option value="journalism">Journalism</option>
            <option value="physics">Physics</option>
            <option value="education">Education</option>
            <option value="math">Math</option>
            <option value="fish">Fish</option>
            <option value="sun">Sun</option>
           </select>
        </StyledFormLabel>
     
          {imageSrc && <StyledTopicImage src={imageSrc} alt={topic} width={135} height={88} />}
       
    </>
    );
};


export const StyledTopicImage = styled.img`
display: flex;
margin-top:-1px;
margin-left: 10vw;
position: fixed;
`;

export const StyledFormLabel = styled.label`
  display:flex;
  flex-direction: row;
  font-weight: bold;
  height: 40px;
  width: 100%;
  borde-radius: 100px;
  margin-bottom: 5px;
  margin-left: 6vw;
  margin-top:  -11vh;

  select, option {
    border-radius: 0.7rem;
    font-size: 18px;
    height: 35px;
  }
`;

export const option = styled.option`
  background-color:  #d4d9ff ;`
;

