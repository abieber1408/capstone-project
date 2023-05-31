import styled from "styled-components";

const topics = [
  { name: "chemistry", videoUrl: "https://www.youtube.com/embed/e8U2mcgDnHw"},
  { name: "art", videoUrl: "https://www.youtube.com/embed/AYtA7UHay6g"},
  { name: "education", videoUrl: "https://www.youtube.com/embed/sv5hK4crIRc" },
  { name: "math", videoUrl: "https://www.youtube.com/embed/8mve0UoSxTo" },
  { name: "physics", videoUrl: "https://www.youtube.com/embed/TTHazQeM8v8" },
  { name: "technology", videoUrl: "https://www.youtube.com/embed/ZSiXZxVpVhs" },
  { name: "science", videoUrl: "https://www.youtube.com/embed/wstW5jy_WAU" },
  { name: "astronomy", videoUrl: "https://www.youtube.com/embed/libKVRa01L8" },
  { name: "environmental", videoUrl: "https://www.youtube.com/embed/qHXQhrLr1Ok" },
  { name: "biology", videoUrl: "https://www.youtube.com/embed/ax0yjzbSBa4" },
  { name: "fish", videoUrl: "https://www.youtube.com/embed/cC9r0jHF-Fw" },
  { name: "sun", videoUrl: "https://www.youtube.com/embed/HFT7ATLQQx8" },
  { name: "journalism", videoUrl: "https://www.youtube.com/embed/bq2_wSsDwkQ" }];

  export default function VideoStream({ topic }) {
    const videoUrl = topics.find(t => t.name === topic)?.videoUrl;
    
    return (
      <VideoStreamFieldset>
        {videoUrl ? (
          <iframe
            title="video-stream"
            src={videoUrl}
            width="100%"
            height="120%"
            frameborder="0"
            allowFullScreen
          />
        ) : (
            <>
              <p>!Please select a topic to see a video!</p>
              <p>You can go to the questions selecting *Quiz*</p>
              <p>Create your owns with *My Quiz*</p>
            </>
        )}
      </VideoStreamFieldset>
    );
  }

export const VideoStreamFieldset = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    overflow: hidden; 
    background-color:black;
    color: grey;
    margin: 10px;
    padding: 10px;
`;