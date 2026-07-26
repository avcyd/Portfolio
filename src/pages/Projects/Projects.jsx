import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "../../components/gradienttext/GradientText.jsx";
import projects from "../../data/projects.js";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Projects({ featuredOnly = false, limit = null }) {
  const sectionRef = useRef(null);
  const list =
    limit != null
      ? projects.slice(0, limit)
      : featuredOnly
        ? projects.slice(0, 3)
        : projects;

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll(".projectCard");
      if (!cards?.length) return;

      gsap.from(cards, {
        opacity: 0,
        y: 20,
        duration: 0.45,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [featuredOnly, list.length] },
  );

  return (
    <section
      ref={sectionRef}
      className={`project${featuredOnly ? " project--featured" : ""}`}
    >
      <div className="projectContent">
        <div className="heading section-heading">
          <GradientText
            colors={["#cc0000", "#bb1d01", "#750a1b"]}
            animationSpeed={15}
            showBorder={false}
          >
            <h2>{featuredOnly ? "Featured Work" : "Projects"}</h2>
          </GradientText>
          <p className="text-xs">
            {featuredOnly
              ? "A few builds that mark where I am as a student developer."
              : "A collection of projects highlighting my development journey."}
          </p>
        </div>

        <div className="projectList">
          {list.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="projectCard glass-card"
            >
              <div className="projectCardLink">
                <div className="projectMeta">
                  <span className="projectIndex">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="projectArrow" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </div>

                <h4 className="projectTitle">
                  {project.title}
                  <span className="glow-line" aria-hidden="true" />
                </h4>

                <p className="text-xs">
                  {project.description || "No description yet."}
                </p>

                <div className="skillsContainer">
                  {project.stack.map((skill) => (
                    <span className="skills" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {featuredOnly && (
          <div className="featuredCta">
            <NavLink to="/projects" className="ctaBtn">
              See all projects
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
