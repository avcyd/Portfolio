import BorderGlow from "../../components/borderglow/BorderGlow";
import GradientText from "../../components/gradienttext/GradientText.jsx";
import projects from "../../data/projects.js";
import { NavLink } from "react-router-dom";

import "./Projects.css";

function Projects() {
  return (
    <div className="project">
      <div className="projectContent">
        <div className="heading">
          <GradientText
            colors={["#cc0000", "#c26a4c", "#910b01"]}
            animationSpeed={15}
            showBorder={false}
            className="custom-class"
          >
            <h2>Projects</h2>
          </GradientText>
          <p className="text-xs">
            A collection of projects highlighting my development journey.{" "}
          </p>
        </div>
        <div className="projectList">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              className="projectCard"
              key={project.id}
              style={{ padding: "1em" }}
            >
              <div className="title">
                <h4>{project.title}</h4>
              </div>

              <p className="text-xs">
                {project.description || "No description yet."}
              </p>

              <div className="skillsContainer">
                {project.stack.map((skill, index) => (
                  <span className="skills" key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
