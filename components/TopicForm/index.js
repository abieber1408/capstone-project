import styled from "styled-components";

export default function TopicForm({ onTopicChange, topic, imageSrc} ) {
  
    return (
      <>
        <StyledFormLabel>
            <select id="select-topic" name="select-topic" onChange={(event)=>onTopicChange(event)}>
            <option value="">Topic:</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Technology">Technology</option>
            <option value="Art">Art</option>
            <option value="Science">Science</option>
            <option value="Astronomy">Astronomy</option>
            <option value="EnvironmentalScience">Environmental Science</option>
            <option value="Biology">Biology</option>
            <option value="Journalism">Journalism</option>
            <option value="Physics">Physics</option>
            <option value="Education">Education</option>
            <option value="Math">Math</option>
            <option value="Fish">Fish</option>
            <option value="Sun">Sun</option>
           </select>
        </StyledFormLabel>
        {imageSrc && <StyledImage src={imageSrc} alt={topic} width={135} height={88} />}
    </>
    );
};

export const StyledImage = styled.img`
  display: flex;
  margin-top: -2px;
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

