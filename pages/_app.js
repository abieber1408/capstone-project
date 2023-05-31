import GlobalStyle from "../styles";
import Head from "next/head";
import { SWRConfig } from "swr";

import { useState, useEffect } from "react";
import EnterScreen from "../components/EnterScreen/EnterScreen";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const [showEnterScreen, setShowEnterScreen] = useState(true);
  const [topic, setTopic] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [level, setLevel] = useState("");
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnterScreen(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  const handleTopicChange = (event) => {
    setTopic(event.target.value);
    setImageSrc(`/images/${event.target.value}.jpg`);
  }

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
   
  };
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      {showEnterScreen ? (
        <EnterScreen />
      ) : (
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} onLevelChange={handleLevelChange} level={level} onTopicChange={handleTopicChange} topic={topic} imageSrc={imageSrc} />
        </SWRConfig>
     )}
    </>
  );
}