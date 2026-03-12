import "../styles/projects.css";
import projects from "../data/projects";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="section-reveal">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${project.featured ? "featured" : ""}`}
            key={project.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            {project.featured && (
              <span className="featured-badge">Featured</span>
            )}

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
