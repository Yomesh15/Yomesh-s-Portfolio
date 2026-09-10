import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Velora from "../assets/velora.png";
import Project2 from "../assets/project2.png";
import Convey from "../assets/convey.png";
import MockMate from "../assets/mockmate.png";
import CodeMate from "../assets/codemate.png";
import One5Jobs from "../assets/one5jobs.png";
import One5Blogs from "../assets/one5blogs.png";
import One5Store from "../assets/one5store.png";
import One5Services from "../assets/one5services.png";
import One5AI from "../assets/one5ai.png";
import One5Workspace from "../assets/one5workspace.png";


const projects = [
  {
    title: "One 5 Workspace",
    image: One5Workspace,
    description:
      "One 5 Workspace is a modern team collaboration and task management platform built with the MERN Stack. It enables owners to create workspaces, manage team members, assign tasks, track progress, and review completed work through a clean and professional workspace interface.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Framer Motion",
      "REST API",
      "JWT Authentication",
      "Vercel",
      "Render",
    ],
    live: "https://one-5-workspace.vercel.app/",
    github: "https://github.com/Yomesh15/One-5-Workspace",
  },
  {
    title: "One 5 Jobs",
    image: One5Jobs,
    description:
      "One 5 Jobs is a full-stack job portal platform that connects job seekers with recruiters through a modern and user-friendly interface. Candidates can create profiles, browse and apply for jobs, track their applications, while recruiters can create job listings, manage posted jobs, and review applications. The platform includes secure authentication, role-based access, job management, application tracking, and responsive UI for a seamless hiring experience.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
      "Vercel",
      "Render"
    ],
    live: "https://one-5-jobs.vercel.app",
    github: "https://github.com/Yomesh15/One-5-Jobs",
  },
  {
    title: "Code Mate",
    image: CodeMate,
    description:
      "Code Mate is an AI-powered coding assistant web application designed to help developers write, understand, and improve code efficiently. It provides intelligent code generation, AI-based code reviews, bug detection, security analysis, performance suggestions, code explanations, and developer-friendly insights with a modern responsive interface.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Tailwind CSS", "Vercel", "Render", "OpenRouter", "JsonWebToken"],
    live: "https://code-mate-kappa.vercel.app/",
    github: "https://github.com/Yomesh15/Code-Mate",
  },
  {
    title: "Velora",
    image: Velora,
    description:
      "Velora is a modern MERN-stack ecommerce web application designed to deliver a seamless and stylish online shopping experience. It features responsive UI, secure authentication, product browsing, cart management, and smooth user interactions with a clean and premium design approach.",
    tech: ["React", "Node.js", "CSS", "Vercel", "AOS", "Render"],
    live: "https://velora-self-sigma.vercel.app/",
    github: "https://github.com/Yomesh15/Velora",
  },
  {
    title: "One 5 Store",
    image: One5Store,
    description:
      "One 5 Store is a full-stack e-commerce platform built to provide a complete online shopping experience for users and powerful product management features for sellers. Users can browse products, view detailed product information, manage their cart and wishlist, place orders, and manage their accounts. Sellers can add, update, and manage products through dedicated seller features, with secure authentication and a responsive modern interface.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Multer",
      "JWT",
      "Redux Toolkit",
      "Tailwind CSS",
      "Vercel",
      "Render"
    ],
    live: "https://one-5-store.vercel.app/",
    github: "https://github.com/Yomesh15/One-5-Store",
  },
  {
    title: "DocVerse",
    image: Project2,
    description:
      "DocVerse is a full-stack MERN doctor appointment booking platform that enables patients to search for doctors, book appointments, and manage bookings seamlessly. It includes secure authentication, appointment management, role-based access, and a responsive interface.",
    tech: [
      "React",
      "CSS",
      "Node.js",
      "MongoDB",
      "Framer Motion",
      "Vercel",
      "Render",
    ],
    live: "https://doc-verse-gamma.vercel.app/",
    github: "https://github.com/Yomesh15/DocVerse",
  },
  {
    title: "One 5 Services",
    image: One5Services,
    description:
      "One 5 Services is a full-stack local service booking platform that connects users with professional service providers. Users can discover services, view provider profiles, check experience, fees, ratings, and book providers according to their requirements. Service providers can manage their profiles, receive bookings, accept requests, and interact with customers through a simple and responsive platform.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Cloudinary",
      "Multer",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "Render"
    ],
    live: "https://one-5-services.vercel.app/",
    github: "https://github.com/Yomesh15/One-5-Services",
  },
  {
    title: "Convey",
    image: Convey,
    description:
      "Convey is a modern real-time messaging platform built with MERN Stack and Socket.IO. It provides secure authentication, instant messaging, online status, unread notifications, and a responsive interface for seamless business communication.",
    tech: [
      "React",
      "Node.js",
      "Socket.IO",
      "Tailwind CSS",
      "REST API",
      "Vercel",
      "Render",
    ],
    live: "https://convey-sigma.vercel.app/",
    github: "https://github.com/Yomesh15/Convey",
  },
  {
    title: "One 5 AI",
    image: One5AI,
    description:
      "One 5 AI is an AI-powered platform built to provide intelligent and interactive AI capabilities through a modern web application. The project focuses on creating our own AI experience rather than simply building a traditional chatbot interface, with AI-powered conversations, intelligent responses, contextual understanding, and developer-focused functionality. It combines a modern frontend with a custom backend AI architecture to deliver a scalable and personalized AI experience.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Python",
      "AI/ML",
      "Natural Language Processing",
      "JWT",
      "Tailwind CSS",
      "Vercel",
      "Render"
    ],
    live: "https://one-5-ai.vercel.app/",
    github: "https://github.com/Yomesh15/One-5-AI",
  },
  {
    title: "Mock Mate - AI Interview Agent",
    image: MockMate,
    description:
      "Mock Mate is an AI-powered interview preparation platform that conducts realistic HR and Technical interviews. It features resume analysis, personalized questions, speech recognition, AI evaluation, interview history, and a credit-based system.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Gemini AI",
      "Tailwind CSS",
      "JWT",
    ],
    live: "https://mock-mate-ebon.vercel.app/",
    github: "https://github.com/Yomesh15/Mock-Mate",
  },
  {
    title: "One 5 Blogs",
    image: One5Blogs,
    description:
      "One 5 Blogs is a full-stack blogging platform designed for users to create, publish, and explore engaging blog content. It provides a modern and responsive interface where users can create blogs with images, categories, tags, and rich content, while readers can explore blogs, view posts, and interact with content. The platform includes user authentication, blog management, image uploads, comments, likes, views, and a clean Apple-inspired user interface.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Multer",
      "JWT",
      "Tailwind CSS",
      "Vercel",
      "Render"
    ],
    live: "https://one-5-blogs.vercel.app",
    github: "https://github.com/Yomesh15/One-5-Blogs",
  },

];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <span className="section-subtitle">— MY WORK</span>

        <h2 className="section-title">Featured Projects</h2>

        <p className="section-desc">
          A selection of projects showcasing my skills in React, MERN Stack and
          modern full-stack web development.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                <div className="project-info">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <div className="project-footer">
                  <div className="project-tech">
                    {project.tech.map((item, i) => (
                      <span key={i}>{item}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live <FiExternalLink />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <FiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;