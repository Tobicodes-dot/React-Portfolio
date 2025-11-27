import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Footer from "../components/footer";
import "../styles/global.css";

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
    </>
  );
}

export default Home;
