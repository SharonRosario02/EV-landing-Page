import React, { useEffect, useState } from "react";
import Background from "./Components/Background/Background.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";

const App = () => {
  let heroData = [
    {
      text1: "Dive into",
      text2: "what you love",
    },
    {
      text1: "indulge",
      text2: "your passion",
    },
    {
      text1: "Give in to",
      text2: "your passion",
    },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    let intervalId;
  
    if (!playStatus) {
      intervalId = setInterval(() => {
        setHeroCount((count) => (count === 2 ? 0 : count + 1));
        console.log('clicked');
      }, 3000);
    }
  
    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [playStatus]);

  
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]} // passing only whats the count
        heroCount={heroCount}
        setPlayStatus={setPlayStatus}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
