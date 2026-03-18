import networking from "../assets/networking.jpg";
import portifolio from "../assets/portifolio.png";
import wallpaper from "../assets/walleper1.png";
const projects = [
  {
    id: 2,
    title: "user Management System",
    description:
      "A full-stack user management platform with secure authentication, role-based access, and responsive UI workflows for administrators and end users.",
    github: "https://github.com/shambelkibr/frontend_User_management",
    demo: "https://frontend-nu-beige-66.vercel.app/",
    tech: ["React", "CSS", "Express JS", "mySQL"],
    image: wallpaper,
    featured: false,
  },
  {
    id: 3,
    title: "DBU Haile Hotel Resturant Network Design Topology ",
    description:
      "A complete enterprise network topology designed in Cisco Packet Tracer, implementing VLAN segmentation and RIP routing for efficient and secure communication.",
    tech: ["Networking", "Cisco"],
    github: "https://github.com/shambelkibr/portfolio",
    demo: "",
    image: networking,
    featured: false,
  },
  {
    id: 4,
    title: "React Portfolio",
    description:
      "A modern personal portfolio built with React to showcase projects, technical skills, and contact channels with responsive design and smooth user experience.",
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
      "A Java Servlet-based job portal that connects employers and job seekers through structured listings, profile management, and application tracking.",
    tech: ["Java", "Servlet", "Apache Tomcat", "MySQL"],
    github: "",
    demo: "https://github.com/shambelkibr/portfolio",
    image: wallpaper,
    featured: false,
  },
  {
    id: 6,
    title: "DBU Clearance System",
    description:
      " This project is a distributed GUI system where a React frontend communicates with a Java Socket server via a Node.js (Express) backend.It allows sending messages to the server and managing student data stored in a MySQL database.Users can add students and filter them by age, sex, or grade through the frontend interface.",
    tech: ["java socket ", " DB"],
    github: "https://github.com/shambelkibr/Student-_managment_java_Socket/tree/main",
    demo: "https://student-managment-java-socket.vercel.app/",
    image: wallpaper,
    featured: false,MysQl
  },
  {
    id: 7,
    title: "Ethio Cart E-commerce",
    description:
      "An e-commerce desktop application developed in C++ with Qt and database integration, focused on product management, cart workflows, and structured data handling.",
    tech: ["C++", "Qt", "Database"],
    github: "https://github.com/shambelkibr/portfolio",
    demo: "",
    image: wallpaper,
    featured: false,
  },
];

export default projects;
