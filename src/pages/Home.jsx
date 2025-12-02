import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Footer from "../components/footer";
import HireModal from "../modals/hiremodal";
import QRModal from "../modals/QRModal";
import useDarkMode from '../hooks/theme';
import "../styles/global.css";

function Home() {
  const [isHireOpen, setIsHireOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const openHireModal = () => setIsHireOpen(true);
  const closeHireModal = () => setIsHireOpen(false);

  const [isQRModalOpen, setQRModalOpen] = useState(false);

  const openQR = () => setQRModalOpen(true);
  const closeQR = () => setQRModalOpen(false);

  return (
    <>
      <Navbar onHireClick={openHireModal} />
      <Hero />
      <About />
      <Skills openQR={openQR} />
      <QRModal isOpen={isQRModalOpen} onClose={closeQR} />
      <Experience />
      <Projects />
      <HireModal isOpen={isHireOpen} onClose={closeHireModal} />
      <Footer />
      <button id="dark-mode-toggle" aria-label="Toggle Dark Mode" onClick={toggleDarkMode}>
          {isDarkMode ? '🌙' : '☀️'}
      </button>
    </>
  );
}

export default Home;
