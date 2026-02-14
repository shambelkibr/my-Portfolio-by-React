import "../styles/home.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profile from "../assets/sham.jpg";

function Home() {
  return (
    <section className="home">
      <motion.div
        className="home-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Hi, I'm</h2>

        <TypeAnimation
          sequence={[
            "Shanbel Kibre",
            2000,
            "MERN Stack Developer",
            2000,
            "Software Engineer Student",
            2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
        />

        <p>
          Welcome! Make yourself at home as you explore. I'm a highly skilled
          Full Stack and Mobile App developer with a proven track record of
          tackling diverse and challenging projects. I excel in delivering
          seamless solutions tailored to your needs. From sleek mobile apps to
          robust web solutions, count on me as your trusted partner for Web and
          App Development. I build modern, responsive web applications using
          React, JavaScript, and clean UI design.
        </p>
        <div className="socials">
         
          <a
            className="home-btn"
            href="https://github.com/shambelkibr"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>

          <a
            className="home-btn"
            href="https://linkedin.com/in/shanbel-kibre-b5ab38369"
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
        </div>
      </motion.div>

      <div className="home-right">
        <motion.div
          className="home-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profile} alt="profile" />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
