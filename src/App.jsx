import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
