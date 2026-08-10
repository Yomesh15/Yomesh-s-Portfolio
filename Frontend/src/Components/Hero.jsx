import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import humanphoto from "../assets/human2.jpg";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import resume from "../assets/Yomesh_Nagar_Resume.pdf";



const texts = [
  "Turning Small Ideas into Masterpieces !",
  "Building Modern Web Experiences !",
  "Full-Stack MERN Developer !",
  "Code • Design • Performance !",
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.2, // trigger when 20% visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="hero reveal">
      {/* LEFT */}
      <div className="hero-left">
        <div className="availability">
          <span className="dot"></span>
          Available for new Work !
        </div>

        <h1 className="hero-title">
          Yomesh <br /> Nagar
        </h1>

        <h2 className="hero-subtitle">
          {displayText}
          <span className="cursor">|</span>
        </h2>

        <p className="hero-desc">
          Yomesh Nagar is a passionate full-stack developer specializing in
          React, Node.js, and MongoDB, focused on building fast, scalable,
          and user-friendly web applications with clean code and modern design.
        </p>

        <div className="hero-stats">
          <div>
            <h3>1</h3>
            <p>Years Experience</p>
          </div>
          <div>
            <h3>7</h3>
            <p>Projects</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>

        <div className="hero-buttons">
          <a
            href="https://velora-self-sigma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View My Work <FiArrowUpRight />
          </a>

          <button
            className="btn-secondary"
            onClick={() => {
              const link = document.createElement("a");
              link.href = resume;
              link.download = "Yomesh_Nagar_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Resume
          </button>

        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="avatar-card">
          <span className="tech-stack">Tech Stack</span>
          <img src={humanphoto} alt="avatar" className="avt" />
          {/* <div className="experience-badge">
            <h4>1</h4>
            <p>Experience</p>
          </div> */}
        </div>
      </div>

      <div className="explorepopup">
        <p>Explore More</p>
        <span><FaArrowDown /></span>
      </div>
    </section>
  );
};

export default Hero;
