import BorderGlow from "../../components/borderglow/BorderGlow";
import GradientText from "../../components/gradienttext/GradientText.jsx";

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
        <div className="heading">
          <GradientText
            colors={["#cc0000", "#c26a4c", "#910b01"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
          >
            <h2>Skillset and Achievements</h2>
          </GradientText>
          <p className="text-xs">
            Technologies I use and credentials I've earned so far in my journey.
          </p>
        </div>
        <div className="skillset-achievements">
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
                <div className="title">
                  <img src={frontend} height="30px" width="30px" />
                  <h4>Frontend Development</h4>
                </div>
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
                <div className="title">
                  <img src={frontend} height="30px" width="30px" />
                  <h4>Backend Development</h4>
                </div>
                <p className="text-xs">
                  Handling data flow, authentication, and server-side logic
                  behind the scenes.
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
                {" "}
                <div className="title">
                  <img src={frontend} height="30px" width="30px" />
                  <h4>Database & Tools</h4>
                </div>
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
          <div className="achievements">
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
                <div className="title">
                  <img src={frontend} height="30px" width="30px" />
                  <h4>Certifications</h4>
                </div>
                <div className="achievementsContent">
                  <div className="achievementItem">
                    <span className="education">
                      Introduction to Cybersecurity
                    </span>
                    <div className="details">
                      <p className="text-xs">Cisco Networking Academy</p>
                      <p className="text-xs">Taken 2026</p>
                    </div>
                  </div>{" "}
                  <div className="achievementItem">
                    <span className="education">Best in UI/UX Design</span>
                    <div className="details">
                      <p className="text-xs">HACKATHON 2026</p>
                      <p className="text-xs">
                        CIIT College of Arts and Technology
                      </p>
                    </div>
                  </div>
                  <div className="achievementItem">
                    <span className="education">
                      Cybersecurity Fundamentals{" "}
                    </span>
                    <div className="details">
                      <p className="text-xs">IBM SkillsBuild</p>
                      <p className="text-xs">Taken 2026</p>
                    </div>
                  </div>{" "}
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
                <div className="title">
                  <img src={frontend} height="30px" width="30px" />
                  <h4>Education</h4>
                </div>
                <div className="educationContent">
                  <div className="educationItem">
                    <span className="education">
                      CIIT College of Arts and Technology
                    </span>
                    <div className="details">
                      <p className="text-xs">
                        Bachelor of Science in Computer Science
                      </p>
                      <p className="text-xs">2024 - Current College</p>
                    </div>
                  </div>
                  <div className="educationItem">
                    <span className="education">STI College - Sta. Mesa</span>
                    <div className="details">
                      <p className="text-xs">
                        Science, Technology, Engineering, Mathematics
                      </p>
                      <p className="text-xs">2021 - 2024 Senior High</p>
                    </div>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Proficiencies;
