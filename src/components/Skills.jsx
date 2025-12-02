import { useState } from "react";
import QRModal from "../modals/QRModal"; 
import { Code, Smartphone, Figma, Lightbulb } from "lucide-react";

function Skills() {
  const [isQRModalOpen, setQRModalOpen] = useState(false);

  return (
    <>
      {/* QR MODAL */}
      <QRModal 
        isOpen={isQRModalOpen} 
        onClose={() => setQRModalOpen(false)} 
      />

      <section id="skills" className="skills-section">
        <div className="skills-layout-wrapper">

          <div className="skills-intro-panel">
            <span className="skills-pill">Skills</span>
            <h2 className="skills-main-heading">
              A comprehensive look <br /> at the skills I have to <br /> offer
            </h2>

            {/* BUTTON TO OPEN MODAL */}
            <button 
              className="cv-button"
              onClick={() => setQRModalOpen(true)}
            >
              View my CV
            </button>
          </div>

          <div className="skills-cards-grid">
            <div className="skill-card web-dev">
              <div className="skill-icon"><Code /></div>
              <h3>Web Development</h3>
              <p>If you are an entrepreneur, you know that your success...</p>
            </div>

            <div className="skill-card ui-ux-design">
              <div className="skill-icon"><Figma /></div>
              <h3>UI/UX Design</h3>
              <p>If you are an entrepreneur, you know that your success...</p>
            </div>

            <div className="skill-card App-development">
              <div className="skill-icon"><Smartphone /></div>
              <h3>App Development</h3>
              <p>If you are an entrepreneur, you know that your success...</p>
            </div>

            <div className="skill-card problem-solving">
              <div className="skill-icon"><Lightbulb /></div>
              <h3>Problem Solving</h3>
              <p>If you are an entrepreneur, you know that your success...</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;
