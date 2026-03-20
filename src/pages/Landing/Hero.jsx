import { NavLink } from "react-router-dom";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

import DarkVeil from "../../components/darkveil/DarkVeil.jsx";

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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          margin: 0,
          padding: 0,
          border: 0,
        }}
      >
        <DarkVeil
          hueShift={240}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
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
        <h1>Hi, I'm Liana.</h1>
        <p className="text-xs">
          I build software that solves problems. A transition from an idea to a
          reality.
        </p>
        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
        ></div>
      </div>
    </div>
  );
}
export default Hero;
