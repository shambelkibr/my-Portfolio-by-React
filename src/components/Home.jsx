import "../styles/home.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profile from "../assets/sham.jpg";

function Home() {
  return (
    <section className="home" id="home">
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
          Welcome, and make yourself at home as you explore my work. I am a
          full-stack developer with a strong track record of
          building solutions for diverse and challenging projects. I focus on
          creating seamless, user-centered experiences tailored to your goals.
           robust web platforms, you can count on me as
          a trusted partner for web and app development. I build modern,
          responsive applications using React, JavaScript, and clean UI design.
        </p>

        <div className="socials">
          <a
            className="home-btn"
            href="https://github.com/shambelkibr"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>

          <a
            className="home-btn"
            href="https://linkedin.com/in/shanbel-kibre-b5ab38369"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
        </div>
      </motion.div>

      <div className="home-right">
        <motion.div
          className="profile-orb"
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
