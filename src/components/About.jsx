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

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>

        <p>
          I'm Shanbel Kibre, a MERN stack developer and software engineering
          student passionate about building modern web applications.
        </p>

        <p>
          I enjoy solving real-world problems using React, Node.js, MongoDB,
          and clean UI design. My focus is writing maintainable code and
          creating responsive user experiences.
        </p>

        <h2 className="skills-title">My Skills</h2>

        <div className="skills-container">
          <motion.div
            className="skill-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Frontend</h3>
            <ul>
              <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
              <li><FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
              <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
              <li><FontAwesomeIcon icon={faReact} /> React</li>
            </ul>
          </motion.div>

          <motion.div
            className="skill-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Backend</h3>
            <ul>
              <li><FontAwesomeIcon icon={faNode} /> Node.js</li>
              <li><FontAwesomeIcon icon={faDatabase} /> MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            className="skill-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Programming</h3>
            <ul>
              <li><FontAwesomeIcon icon={faJava} /> Java</li>
              <li><FontAwesomeIcon icon={faPython} /> Python</li>
            </ul>
          </motion.div>

          <motion.div
            className="skill-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Database</h3>
            <ul>
              <li><FontAwesomeIcon icon={faDatabase} /> MySQL</li>
              <li><FontAwesomeIcon icon={faDatabase} /> PostgreSQL</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
