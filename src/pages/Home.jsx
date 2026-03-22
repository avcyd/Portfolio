import { Routes, Route } from "react-router-dom";
import Hero from "./Landing/Hero.jsx";
import Proficiencies from "./Proficiencies/Proficiencies.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Proficiencies />
    </>
  );
}

export default Home;
