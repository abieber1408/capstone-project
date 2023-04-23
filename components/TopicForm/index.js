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
     
          {imageSrc && <StyledTopicImage src={imageSrc} alt={topic} width={100} height={80} />}
       
    </>
    );
};


export const StyledTopicImage = styled.img`
display: flex;
margin-top:32px;
margin-left:2vw;

`;

export const StyledFormLabel = styled.label`
  display:flex;
  flex-direction:column;
  font-weight: 100;
  height: 40px;
  width: 30vw;


  margin: 5vh 0 0px 6vw; 

  select, option {
    border-radius: 0.1rem;
    font-size: 15px;
    height: 30px;
    color: #6A9AD6;
  }
`;

export const option = styled.option`
  background-color:  #d4d9ff ;`
;

