import React, { useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPython
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BsFillLaptopFill } from "react-icons/bs";
import { SiMongoose } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";


const Skills = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");

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

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">
        My <span>Skills</span>
      </h2>

      <p className="skills-subtitle">
        Technologies I use and my proficiency level
      </p>

      <div className="skills-grid">
        <SkillCard icon={<SiJavascript />} name="JavaScript" percent={78} />
        <SkillCard icon={<FaReact />} name="React" percent={82} />
        <SkillCard icon={<SiTailwindcss />} name="Tailwind CSS" percent={80} />
        <SkillCard icon={<FaNodeJs />} name="Node.js" percent={65} />
        <SkillCard icon={<SiExpress />} name="Express.js" percent={77} />
        <SkillCard icon={<SiMongodb />} name="MongoDB" percent={62} />
        <SkillCard icon={<SiMysql />} name="MySQL" percent={68} />
        <SkillCard icon={<SiMongoose />} name="Mongoose" percent={70} />
        <SkillCard icon={<FaGitAlt />} name="Git" percent={75} />
        <SkillCard icon={<FaGithub />} name="GitHub" percent={70} />
        <SkillCard icon={<FaBootstrap />} name="Bootstrap" percent={75} />
        <SkillCard icon={<FaDocker />} name="Docker" percent={55} />
        <SkillCard icon={<SiPython />} name="Python" percent={75} />
        <SkillCard icon={<FaJava />} name="Java" percent={69} />
        <SkillCard icon={<BsFillLaptopFill />} name="System Design" percent={53} />
        <SkillCard icon={<SiPostman />} name="Postman" percent={77} />
        <SkillCard icon={<TbBrandReactNative />} name="React Native" percent={67} />
      </div>
    </section>
  );
};

/* ================= SKILL CARD ================= */
const SkillCard = ({ icon, name, percent }) => {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-icon">{icon}</div>
        <span className="skill-percent">{percent}%</span>
      </div>

      <h3>{name}</h3>

      <div className="progress-bar">
        <span
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default Skills;
