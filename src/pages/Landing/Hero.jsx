import { NavLink } from "react-router-dom";

import Orb from "../../components/orb/Orb.jsx";

import "./Hero.css";

function Hero() {
  const scrollToProficiency = () => {
    const section = document.getElementById("proficiency");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero">
      <div className="orb">
        <Orb
          hoverIntensity={1.1}
          rotateOnHover={false}
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>
      <div className="heroContent">
        <div>
          <h2 style={{ fontWeight: 620 }}>I turn ideas into reality.</h2>
          <p className="text-xs">
            Hi! I'm Liana. I build software that solves problems. A transition
            from an idea to a reality.
          </p>
        </div>

        <div className="ctaBtn">
          <span onClick={scrollToProficiency}>Get Started</span>
        </div>
      </div>
    </div>
  );
}
export default Hero;
