import styled from "styled-components";


export default function VideoStream() {
    return (
      <VideoStreamFieldset>     
     </VideoStreamFieldset>
  );
}
export const VideoStreamFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    height: 355px;
    width:140%;
    margin-left: 4vw;
    margin-top: 21vh;
    border-radius: 10px;
    overflow: hidden; 
    background-color:black;
`;