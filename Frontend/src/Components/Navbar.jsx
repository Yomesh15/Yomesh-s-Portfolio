import React, { useState } from "react";
import navyomesh from "../assets/navyomesh.jpeg";
import { AiOutlineHome } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FaTools } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdColorPalette } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import resume from "../assets/Yomesh_Nagar_Resume.pdf";
import { BsDownload } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const onclickoutside = () => {
    document.addEventListener('click', setIsMobileOpen(false))
  }

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const navigate = useNavigate()

  return (
    <nav className="navcontainer">
      <img src={navyomesh} alt="Yomesh" className="nav-logo" onClick={() => {
        scrolltotop();
        navigate("/")
      }} />

      <div className="hamburger" onClick={toggleMobileMenu}>
        <GiHamburgerMenu size={28} />
      </div>

      <ul className={`nav-links ${isMobileOpen ? "open" : ""}`}>
        <li>
          <Link href="/" className="link" onClick={() => {
            scrolltotop()
            onclickoutside()
          }}>
            <AiOutlineHome /> <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/projects" className="link" onClick={() => {
            scrolltotop()
            onclickoutside()
          }}>
            <FiGithub /> <span>Projects</span>
          </Link>
        </li>

        <li>
          <Link to="/skills" className="link" onClick={() => {
            scrolltotop()
            onclickoutside()
          }}>
            <FaTools /> <span>Skills</span>
          </Link>
        </li>

        <li>
          <Link to="/contact" className="link" onClick={() => {
            scrolltotop()
            onclickoutside()
          }}>
            <IoCall /> <span>Contact</span>
          </Link>
        </li>

      </ul>

      <button
        className="resumedownload"
        onClick={() => {
          const link = document.createElement("a");
          link.href = resume;
          link.download = "Yomesh_Nagar_Resume.pdf";
          link.click();
        }}
      >
        Resume <BsDownload />
      </button>

    </nav>
  );
};

export default Navbar;
