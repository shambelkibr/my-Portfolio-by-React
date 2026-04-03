import "../styles/about.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
  faJava,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCode,
  faDatabase,
  faServer,
} from "@fortawesome/free-solid-svg-icons";


const MotionSection = motion.section;
const MotionCard = motion.div;
const MotionBar = motion.span;

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: faHtml5, className: "skill-html" },
      { name: "CSS", icon: faCss3Alt, className: "skill-css",  },
      { name: "JavaScript", icon: faJs, className: "skill-js"  },
      { name: "React", icon: faReact, className: "skill-react"},
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: faNode, className: "skill-node", level: 84 },
      {
        name: "Express.js",
        icon: faServer,
        className: "skill-express",
        level: 80,
      },
      {
        name: "FastAPI",
        icon: faCode,
        className: "skill-fastapi",
        level: 50,
      },
      {
        name: "Java Spring",
        icon: faJava,
        className: "skill-spring",
        level: 65,
      },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: faJava, className: "skill-java", level: 86 },
      {
        name: "C++",
        icon: faCode,
        className: "skill-cpp",
        level: 78,
      },
      {
        name: "Python",
        icon: faPython,
        className: "skill-python",
        level: 80,
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        icon: faDatabase,
        className: "skill-mysql",
        level: 83,
      },
      {
        name: "MongoDB",
        icon: faDatabase,
        className: "skill-mongo",
        level: 82,
      },
      {
        name: "PostgreSQL",
        icon: faDatabase,
        className: "skill-postgres",
        level: 76,
      },
    ],
  },
];

function About() {
  return (
    <MotionSection
      className="about"
      id="about"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="about-container section-reveal">
        <h2>About Me</h2>

        <p>
          I'm Shanbel Kibre, a MERN stack developer and software engineering
          student passionate about building modern web applications.
        </p>

        <p>
          I enjoy solving real-world problems using React, Node.js, MongoDB, and
          clean UI design. My focus is writing maintainable code and creating
          responsive user experiences.
        </p>

        <h2 className="skills-title">My Skills</h2>

        <div className="skills-container">
          {skillGroups.map((group, groupIndex) => (
            <MotionCard
              className="skill-card"
              key={group.title}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3>{group.title}</h3>
              <div className="skill-progress-list">
                {group.skills.map((skill) => (
                  <div className="skill-progress-item" key={skill.name}>
                    <div className={`skill-progress-head ${skill.className}`}>
                      <span className="skill-name">
                        <FontAwesomeIcon icon={skill.icon} />
                        {skill.name}
                      </span>
                   
                    </div>
                    <div className="skill-progress-track">
                      <MotionBar
                        className={`skill-progress-fill ${skill.className}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.15 }}
                        viewport={{ once: true, amount: 0.4 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

export default About;
