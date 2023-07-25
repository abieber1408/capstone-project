import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/index";
import { useState } from "react";
import styled from "styled-components";

export default function InfoPage() {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  return (
    <Layout>
      <InfoText>
       <h2>General Information</h2>
      </InfoText>
      <ContentCard>
        <StyledSection>
          <HeadingContainer>
            <StyledHeading onClick={() => setShowInfo1(!showInfo1)}>
              About QUIZme
            </StyledHeading>
          </HeadingContainer>
          {showInfo1 && (
             <StyledParagraph>
               QUIZme facilitates the study process through interaction with the information in a very simple way.
               The consolidation of knowledge is given through text, and/or
               audio and video.
             </StyledParagraph>
          )}
        </StyledSection>
      </ContentCard>
      
      <ContentCard>
        <StyledSection>
          <HeadingContainer>
            <StyledHeading onClick={() => setShowInfo2(!showInfo2)}>
            How can you use QUIZme?
            </StyledHeading>
          </HeadingContainer>
          {showInfo2 && (
            <>
              <StyledParagraph>
               You can go to a preset quiz where you choose the topic you want to learn about.
              </StyledParagraph>
              <StyledParagraph>
                You can create your own quiz with the questions of your choice by entering it in a preset format.
              </StyledParagraph>
              <StyledParagraph>
                I wish you a lot of fun trying it out!
              </StyledParagraph>
           </>
          )}
        </StyledSection>
      </ContentCard>
    </Layout>
  );
}

const InfoText = styled.p`
  margin-top:3rem;
  text-align: center;
`;

const StyledSection = styled.section`
  width: 100%;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width:  100%;
`;

const StyledHeading = styled.h3`
margin-left: auto;
margin-right: auto;
  align-self: center;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin:4rem;
  font-family: system-ui;
`;