import { NavLink } from "react-router-dom";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

import Orb from "../../components/orb/Orb.jsx";
import GlareHover from "../../components/glarehover/GlareHover.jsx";

import GradientText from "../../components/gradienttext/GradientText.jsx";

import "./Hero.css";

function Hero() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];
  return (
    <div className="hero">
      <div
        className="orb"
        style={{
          width: "100%",
          height: "600px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -48%)",
          zIndex: 1,
        }}
      >
        <Orb
          hoverIntensity={1.1}
          rotateOnHover={false}
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>
      <div className="navbar">
        <div className="navWrapper text-xs">
          <NavLink to="/" className="selected">
            Home
          </NavLink>
          <NavLink to="/">Projects</NavLink>
          <NavLink to="/">Contact</NavLink>
        </div>
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
          <span>Get Started</span>
        </div>
      </div>
    </div>
  );
}
export default Hero;
