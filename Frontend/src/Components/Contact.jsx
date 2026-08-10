import React, { useEffect, useRef } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa6";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-container reveal" ref={contactRef}>

        <span className="contact-subtitle">— LET'S CONNECT</span>

        <h2 className="contact-title">Get In Touch</h2>

        <p className="contact-desc">
          Ready to bring your next project to life?
          Let's discuss how we can work together.
        </p>

        <div className="contact-card">

          <p className="contact-text">
            Have a project in mind or want to collaborate?
            I'm always open to discussing new opportunities
            and creative ideas.
          </p>

          <div className="social-links">

          
            <a
              href="https://www.linkedin.com/in/yomesh-nagar-064a89374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="social-box"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>

          
            <a
              href="https://github.com/Yomesh15/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-box"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

          
            <a
              href="https://www.instagram.com/yomesh_nagar15?igsh=MWxiaWtjYWllYXVrdA=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-box active"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>

          
            <a
              href="https://x.com/YomeshNaga61969?t=zzpnduMOHqhjdxdbH3PdSQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="social-box"
            >
              <FaXTwitter />
              <span>X</span>
            </a>

          
            <a
              href="https://wa.me/8955770391?text=Hello%20Yomesh,%20I%20visited%20your%20portfolio%20and%20want%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="social-box whatsapp-box"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

          </div>
        
          <div className="email-box">
            <FaEnvelope />
            <span>yomeshnagar2006@gmail.com</span>
          </div>

          <p className="reply-time">
            I typically respond within 24 hours
          </p>

        </div>
      </div>
    </section>
  );
};

export default Contact;