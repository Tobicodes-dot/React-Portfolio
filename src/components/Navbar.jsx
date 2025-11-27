import { useState } from "react";
import logo from "../assets/logo.png"

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">
        <img src={logo} alt="TobiCodes Logo" className="logo-img" />
      </h1>

      <div className={`list ${open ? "open" : ""}`}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </div>

      <button className="hire">Hire Me</button>
    </nav>
  );
}

export default Navbar;