import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import Orb from "../../components/orb/Orb.jsx";
import GradientText from "../../components/gradienttext/GradientText.jsx";
import "./Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.1,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Hero() {
  const scrollToProficiency = () => {
    const section = document.getElementById("proficiency");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="orb">
        <Orb
          hoverIntensity={1.05} // .35 previously
          rotateOnHover={false}
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>

      <div className="heroContent">
        <motion.p
          className="heroBrand"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Liana
        </motion.p>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <GradientText
            colors={["#cc0000", "#bb1d01", "#750a1b"]}
            animationSpeed={10}
            showBorder={false}
          >
            <h1>I turn ideas into reality.</h1>
          </GradientText>
        </motion.div>

        <motion.p
          className="heroBio text-xs"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          CS student developer building software that solves problems — from
          first sketch to shipped product.
        </motion.p>

        <motion.div
          className="ctaGroup"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <button
            type="button"
            className="ctaBtn"
            onClick={scrollToProficiency}
          >
            Explore skills
          </button>
          <NavLink to="/projects" className="ctaBtn-secondary">
            View projects
          </NavLink>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="scrollCue"
        onClick={scrollToProficiency}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-label="Scroll to skills"
      >
        <span />
      </motion.button>
    </section>
  );
}

export default Hero;
