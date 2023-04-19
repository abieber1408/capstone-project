import GlobalStyle from "../styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const [topic, setTopic] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const handleTopicChange = (event) => {
   
    setTopic(event.target.value);
    setImageSrc(`/images/${event.target.value}.jpg`);

  }
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} onTopicChange={handleTopicChange} topic={topic} imageSrc={imageSrc} />
        </SWRConfig>
    
    </>
  );
}

