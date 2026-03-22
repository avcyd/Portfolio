import BorderGlow from "../../components/borderglow/BorderGlow";

import frontend from "../../assets/frontend.png";

import techStack from "../../data/techstack.js";
import "./Proficiencies.css";

function Proficiencies() {
  const frontendData = techStack.find((tech) => tech.id === 1);
  const backendData = techStack.find((tech) => tech.id === 2);
  const toolsData = techStack.find((tech) => tech.id === 3);
  return (
    <div className="proficiency">
      <div className="proficiencyContent">
        <h2>Skillset and Achievements</h2>
        <p className="text-xs">
          Technologies I use and credentials I've earned so far in my journey.
        </p>
        <div className="skillset">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#080000"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#bb1d01", "#eb0062", "#750a1b"]}
          >
            <div style={{ padding: "1em" }}>
              <img src={frontend} height="30px" width="30px" />
              <h4>Frontend Development</h4>
              <p className="text-xs">
                I craft UIs from responsive websites to cross-platform mobile
                apps, where design meets code.
              </p>

              <div className="skillsContainer">
                {frontendData?.tools.map((tool, index) => (
                  <span className="skills" key={index}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </BorderGlow>
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#080000"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#bb1d01", "#eb0062", "#750a1b"]}
          >
            <div style={{ padding: "1em" }}>
              <img src={frontend} height="30px" width="30px" />
              <h4>Backend Development</h4>
              <p className="text-xs">
                Handling data flow, authentication, and server-side logic behind
                the scenes.
              </p>
              <div className="skillsContainer">
                {backendData?.tools.map((tool, index) => (
                  <span className="skills" key={index}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </BorderGlow>
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#080000"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#bb1d01", "#eb0062", "#750a1b"]}
          >
            <div style={{ padding: "1em" }}>
              <img src={frontend} height="30px" width="30px" />
              <h4>Database & Tools</h4>
              <p className="text-xs">
                Managing data, version control, and the essential toolkit that
                enhances development.
              </p>
              <div className="skillsContainer">
                {toolsData?.tools.map((tool, index) => (
                  <span className="skills" key={index}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </div>
  );
}
export default Proficiencies;
