import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
const router = useRouter()
let  [noHookState, setNoHookState] = useState(0)
  let noTextArray = ["Will you be my Valentine?","Please be my valentine!", "Think it again, please.",
  "Please, I will give you gifts!",
  "Please, I will cryyy!","Listen to me Naaa!!",  "Please, I will take care of you.","Please, I will give you chocolates.", "I am asking last time!"]
  function executeAfterSevenSeconds() {
    console.log("It's been 7 seconds!");
    router.push("https://www.youtube.com/shorts/xeaZkPJZyMk")

    // You can add any code here that you want to execute after 7 seconds
}
 let  fontSize= 18;
  function onNoHook(e){
    e.preventDefault();
    let next = noHookState+1;
    const increaseButton = document.getElementById("yesBtn");
    fontSize+= next *4;
    increaseButton.style.fontSize = fontSize + "px";
    if(next == 9) {
      setTimeout(executeAfterSevenSeconds, 4000);
  }
    setNoHookState(next); //
  
  }
  console.log(noHookState)
  // useEffect(()=>{
    
  // },[noHookState])
  return (
  <>
    <div id="container">
        <img src={"/anime-boy-"+ noHookState+".gif"} alt="Valentine's Day" id="image"/>
        <div id="text-above-buttons">{noTextArray[noHookState]}</div>
        <div id="options">
          {  noHookState !== 9 && <button onClick={()=> router.push("/yes")} id="yesBtn">Yes</button>}
      { noHookState != 9 &&      <button id="noBtn"  onClick={onNoHook}>No</button>}
        </div>
    </div>

    <script>
        // JavaScript code will go here
    </script>

</>

  );
}
