{
  // import "../styles/projects.css";
  // import { useState, useEffect } from "react";
  // function Projects() {
  //   const [repos, setRepos] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/shambelkibr/repos")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setRepos(data);
  //         setLoading(false);
  //       });
  //   }, []);
  //   if (loading) return <h3>Loading projects...</h3>;
  //   return (
  //     <section>
  //       <h2>My GitHub Projects</h2>
  //       <div className="projects-grid">
  //         {repos.map((repo) => (
  //           <div className="project-card" key={repo.id}>
  //             <h3>{repo.name}</h3>
  //             <p>{repo.description}</p>
  //             <a href={repo.html_url} target="_blank">
  //               View Project
  //             </a>
  //           </div>
  //         ))}
  //       </div>
  //     </section>
  //   );
  // }
  // export default Projects;
}

import "../styles/projects.css";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className={`project-card ${project.featured ? "featured" : ""}`}
            key={project.id}
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
