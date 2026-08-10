import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-about">
          <h2>Yomesh Nagar</h2>
          <p>
            Web Developer | MERN Stack Learner <br />
            Passionate about building modern, responsive web apps.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            <FaEnvelope /> 
            <a href="mailto:yomeshnagar2006@gmail.com">
              yomeshnagar2006@gmail.com
            </a>
          </p>
          <p>
            <FaPhoneAlt /> 
            <a href="tel:8955764235">+91 8955764235</a>
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/Yomesh15" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/yomesh-nagar-064a89374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Yomesh Nagar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
