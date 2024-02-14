import React, { useEffect } from 'react'

const yesPage = () => {
    useEffect(() => {
        createHearts();
    }, []);

    const createHearts = () => {
        const heartCount = 100; // Number of hearts to create

        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.animationDelay = Math.random() * 5 + "s";
            document.body.appendChild(heart);
        }
    };
  return (
    <div id="container">
    <img src={"/love.gif"} alt="Valentine's Day" id="image"/>
    {/* <div id="text-above-buttons">Yayyyyyyyyy ........ I love you toooo!!!</div> */}
    <div id="options">
   
    </div>
</div>
  )
}

export default yesPage