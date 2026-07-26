import Hero from "./Landing/Hero.jsx";
import Proficiencies from "./Proficiencies/Proficiencies.jsx";
import Projects from "./Projects/Projects.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Proficiencies />
      <Projects featuredOnly />
    </>
  );
}

export default Home;
