import { FiGithub, FiFolder, FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import GradientText from "../../components/gradienttext/GradientText.jsx";
import "./Contact.css";

const contacts = [
  {
    id: "github",
    label: "GitHub",
    detail: "@avcyd",
    href: "https://github.com/avcyd",
    icon: FiGithub,
    external: true,
  },
  {
    id: "projects",
    label: "Projects",
    detail: "Browse my work",
    to: "/projects",
    icon: FiFolder,
    external: false,
  },
];

function Contact() {
  return (
    <section className="contact">
      <div className="contactContent">
        <div className="heading section-heading">
          <GradientText
            colors={["#cc0000", "#bb1d01", "#750a1b"]}
            animationSpeed={10}
            showBorder={false}
          >
            <h2>Let&apos;s connect</h2>
          </GradientText>
          <p className="text-xs contactLead">
            Open to collabs, internships, and building cool things with curious
            teams.
          </p>
        </div>

        <div className="contactGrid">
          {contacts.map((item) => {
            const Icon = item.icon;
            const inner = (
              <>
                <span className="contactIcon" aria-hidden="true">
                  <Icon />
                </span>
                <div className="contactMeta">
                  <h4>{item.label}</h4>
                  <p className="text-xs">{item.detail}</p>
                </div>
                <span className="contactArrow" aria-hidden="true">
                  <FiArrowUpRight />
                </span>
              </>
            );

            return item.external ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="contactCard glass-card"
              >
                {inner}
              </a>
            ) : (
              <NavLink
                key={item.id}
                to={item.to}
                className="contactCard glass-card"
              >
                {inner}
              </NavLink>
            );
          })}
        </div>

        <p className="contactNote text-xs">
          Prefer a quick chat? Reach out on GitHub.
        </p>
      </div>
    </section>
  );
}

export default Contact;
