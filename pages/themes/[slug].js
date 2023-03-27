import Link from "next/link";
import { themes } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Themes() {
  const router = useRouter();
  // console.log("router", router);

  const { slug } = router.query;

  // console.log("slug", slug);

  const currentTheme = themes.find((theme) => theme.slug === slug);

  if (!currentTheme) {
    return null;
  }

  const { title, question, description, correct_answer, false_answer, level } = currentTheme;

  return (
    <>
      <Head>
        <title>{question}</title>
      </Head>
     
      <p>{question}</p>  
   
      
      <p>{correct_answer}</p>  <p>{false_answer}</p> 
      
    
      <Link href="/themes">← Back to themes</Link>

    </>
  );
}
