import { useRef } from "react";
import {
  HiOutlineCodeBracket,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineTrophy,
  HiOutlineAcademicCap,
} from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "../../components/gradienttext/GradientText.jsx";
import techStack from "../../data/techstack.js";
import "./Proficiencies.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SkillCard({ icon: Icon, title, description, tools }) {
  return (
    <div className="skillCardWrap glass-card" data-skill-card>
      <div className="cardInner">
        <div className="title">
          <span className="cardIcon" aria-hidden="true">
            <Icon />
          </span>
          <h4>{title}</h4>
        </div>
        <p className="text-xs">{description}</p>
        <div className="skillsContainer">
          {tools.map((tool) => (
            <span className="skills skill-pill" key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Proficiencies() {
  const sectionRef = useRef(null);
  const frontendData = techStack.find((tech) => tech.id === 1);
  const backendData = techStack.find((tech) => tech.id === 2);
  const toolsData = techStack.find((tech) => tech.id === 3);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll("[data-skill-card]");
      if (!cards?.length) return;

      gsap.from(cards, {
        opacity: 0,
        y: 24,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="proficiency" id="proficiency" ref={sectionRef}>
      <div className="proficiencyContent">
        <div className="heading section-heading">
          <GradientText
            colors={["#cc0000", "#bb1d01", "#750a1b"]}
            animationSpeed={8}
            showBorder={false}
          >
            <h2>Skillset and Achievements</h2>
          </GradientText>
          <p className="text-xs">
            Technologies I use and credentials I&apos;ve earned so far in my
            journey.
          </p>
        </div>

        <div className="skillset-achievements">
          <div className="skillset">
            <SkillCard
              icon={HiOutlineCodeBracket}
              title="Frontend Development"
              description="I craft UIs from responsive websites to cross-platform mobile apps, where design meets code."
              tools={frontendData?.tools ?? []}
            />
            <SkillCard
              icon={HiOutlineServerStack}
              title="Backend Development"
              description="Handling data flow, authentication, and server-side logic behind the scenes."
              tools={backendData?.tools ?? []}
            />
            <SkillCard
              icon={HiOutlineCircleStack}
              title="Database & Tools"
              description="Managing data, version control, and the essential toolkit that enhances development."
              tools={toolsData?.tools ?? []}
            />
          </div>

          <div className="achievements">
            <div className="skillCardWrap glass-card" data-skill-card>
              <div className="cardInner">
                <div className="title">
                  <span className="cardIcon" aria-hidden="true">
                    <HiOutlineTrophy />
                  </span>
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
                  </div>
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
                    <span className="education">Cybersecurity Fundamentals</span>
                    <div className="details">
                      <p className="text-xs">IBM SkillsBuild</p>
                      <p className="text-xs">Taken 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skillCardWrap glass-card" data-skill-card>
              <div className="cardInner">
                <div className="title">
                  <span className="cardIcon" aria-hidden="true">
                    <HiOutlineAcademicCap />
                  </span>
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
                      <p className="text-xs">2024 – Current College</p>
                    </div>
                  </div>
                  <div className="educationItem">
                    <span className="education">STI College – Sta. Mesa</span>
                    <div className="details">
                      <p className="text-xs">
                        Science, Technology, Engineering, Mathematics
                      </p>
                      <p className="text-xs">2021 – 2024 Senior High</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proficiencies;
