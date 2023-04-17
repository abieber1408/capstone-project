import Heading from "../components/Heading";
import Footing from "../components/Footing";

import { StartForm } from "../components/StartForm/index.js";
import ContinueButton from "../components/ContinueButton";


export default function Home() {
  
  return (
    <>
      <StartForm></StartForm>
      <ContinueButton text="Questions" href="./ButtonGrid" />
   
</>
  );
}


