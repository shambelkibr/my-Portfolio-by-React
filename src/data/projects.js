import wallpaper from "../assets/walleper1.jpg";
import networking from "../assets/networking.jpg";
import portifolio from "../assets/portifolio.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with vanila JS and CSS.",
    github: "https://github.com/shambelkibr/portfolio",
    demo: "",
    tech: ["HTML", "CSS", "JS"],
    image: wallpaper,
    featured: true,
  },
  {
    id: 2,
    title: "MERN E-Commerce",
    description: "Full stack e-commerce application.",
    github: "https://github.com/shambelkibr/mern-ecommerce",
    demo: "",
    tech: ["React", "CSS", "Express JS", "mySQL"],
    image: wallpaper,
    featured: false,
  },
  {
    id: 3,
    title: "DBU Haile Hotel Resturant Network Design Topology ",
    description: "Cisco Packet Tracer VLAN & RIP",
    tech: ["Networking", "Cisco"],
    github: "https://github.com/shambelkibr/portfolio",
    demo: "",
    image: networking,
    featured: false,
  },
  {
    id: 4,
    title: "React Portfolio",
    description: "My personal portfolio website",
    tech: ["React", "CSS"],
    github: "https://github.com/shambelkibr/portfolio",
    demo: "https://github.com/shambelkibr/portfolio",
    image: portifolio,
    featured: false,
  },
  {
    id: 5,
    title: "MichotWork Job Portal",
    description:
      "Java Servlet web application connecting job seekers and companies",
    tech: ["Java", "Servlet", "Apache Tomcat", "MySQL"],
    github: "",
    demo: "https://github.com/shambelkibr/portfolio",
    image: "./walleper1.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "DBU Clearance System",
    description: "Online clearance reporting system using Python",
    tech: ["Python GUI ", "MysQl DB"],
    github: "https://github.com/shambelkibr/portfolio",
    demo: "",
    image: "./walleper1.jpg",
    featured: false,
  },
  {
    id: 7,
    title: "Ethio Cart E-commerce",
    description: "C++ data structure project with Qt database integration",
    tech: ["C++", "Qt", "Database"],
    github: "https://github.com/shambelkibr/portfolio",
    demo: "",
    image: "./walleper1.jpg",
    featured: false,
  },
];

export default projects;
