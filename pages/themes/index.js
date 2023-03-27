import Head from "next/head";
import Link from "next/link";
import { themes } from ".././../lib/data";

import { question } from ".././../lib/data";


export default function Themes() {
    return (
      <>
        <Head>
          <title>Themes</title>
        </Head>
        <h1>Themes or Subject</h1>
        <ul>
          {themes.map(({ id, slug, title}) => (
            <li key={id}>
              <Link href={`/themes/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
  



