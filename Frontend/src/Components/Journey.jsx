import React from "react";
import humanphoto from "../assets/human.jpg";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { useEffect } from "react";


const Journey = () => {
    useEffect(() => {
        const reveals = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.2 }
        );

        reveals.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-section reveal">
            <div className="about-container">
 
                <div className="about-heading">
                    <span className="subtitle">DISCOVER MY JOURNEY</span>
                    <h2>About Me</h2>
                    <div className="underline"></div>
                </div>

                {/* Main Content */}
                <div className="about-content">
 
                    <div className="profile-card">
                        <img src={humanphoto} alt="Yomesh Nagar" />

                        {/* Floating Tech Icons */}
                        <div className="floating-icons">
                            <div className="icon react">
                                <FaReact />
                            </div>

                            <div className="icon node">
                                <FaNodeJs />
                            </div>

                            {/* <div className="icon mongo">
                                <SiMongodb />
                            </div> */}

                            {/* <div className="icon express">
                                <SiExpress />
                            </div> */}
                        </div>


                        <div className="stats">
                            <div>
                                <h4>1+</h4>
                                <p>Year Exp</p>
                            </div>
                            <div>
                                <h4>10+</h4>
                                <p>Projects</p>
                            </div>
                            <div>
                                <h4>100%</h4>
                                <p>Learning</p>
                            </div>
                        </div>
                    </div>


                    {/* Right Content */}
                    <div className="about-text">
                        <h3>
                            Crafting Digital <span>Excellence</span>
                        </h3>

                        <p>
                            I'm <strong className="highlight">Yomesh Nagar</strong>, a passionate Full-Stack Web Developer
                            pursuing <strong>BCA</strong> from JECRC University, Jaipur.
                            I enjoy building modern, scalable, and user-friendly web applications.
                        </p>

                        <p>
                            I mainly work with <strong>React, Node.js, Express, MongoDB</strong>
                            and I'm actively learning backend architecture and AI-related technologies.
                            I focus on writing clean code and improving user experience.
                        </p>

                        {/* Bullet Points */}
                        <ul className="points">
                            <li>⚡ Problem-solving mindset</li>
                            <li>⚡ Clean & scalable MERN projects</li>
                            <li>⚡ Strong frontend + backend foundation</li>
                            <li>⚡ Learning AI/ML step by step</li>
                        </ul>

                        {/* Tech Stack */}
                        <div className="tech-stackk">
                            <h4>Tech Stack</h4>
                            <div className="tech-icons">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JS</span>
                                <span>React</span>
                                <span>Node</span>
                                <span>MongoDB</span>
                            </div>
                        </div>

                        <button
                            className="cta-btn"
                            onClick={() => {
                                const phoneNumber = "918955764235"; 
                                const message = encodeURIComponent(
                                    "Hi Yomesh, I’d like to build something amazing with you!"
                                );
                                window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
                            }}
                        >
                            Let’s Build Something Amazing →
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
