// Navbar.jsx
import { useState } from "react";
// Assuming you passed isDarkMode as a prop from the parent
function Navbar({ onHireClick, isDarkMode }) { 
  const [open, setOpen] = useState(false);

  // Toggle function to close menu when a link is clicked
  const handleLinkClick = () => {
      setOpen(false);
  };
  
  // You no longer need separate logo imports if using CSS background-image!

  return (
    <nav className="navbar">
      <h1 className="logo">
        {/* Your logo div */}
        <div className="logo2"></div> 
      </h1>

      {/* The main navigation links container */}
      <div className={`list ${open ? "open" : ""}`}>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
        <a href="#experience" onClick={handleLinkClick}>Experience</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#contact" onClick={handleLinkClick}>Contact Me</a>
        
        {/* Place the Hire Me button inside the mobile menu for better reach */}
        <button className="hire mobile-hire" onClick={onHireClick}>
            Hire Me
        </button>
      </div>
      
      {/* 1. Desktop Hire Button (Visible on large screens) */}
      <button className="hire desktop-hire" onClick={onHireClick}>
        Hire Me
      </button>

      {/* 2. Hamburger Menu Button */}
      <button 
        className={`menu-toggle ${open ? "open" : ""}`} 
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}

export default Navbar;