"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { personalInfo, skills, projects } from "../data";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-gradient"></div>

      <nav className={scrolled ? "scrolled" : ""}>
        <div className="logo">RS.DEV</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              Building <span className="highlight">Digital</span> Experiences
            </h1>
            <p>{personalInfo.bio}</p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* About & Skills Section */}
        <section id="about" className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m <strong>{personalInfo.name}</strong>, a{" "}
                {personalInfo.role} based in the digital world. I specialize in
                turning complex problems into simple, beautiful, and intuitive
                designs.
              </p>
              <br />
              <p>
                My approach combines technical proficiency with a keen eye for
                design, ensuring that every project I work on is not only
                functional but also visually compelling.
              </p>
            </div>
            <div className="skills-container">
              {skills.map((skill) => (
                <span key={skill.name} className="skill-tag">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section id="projects" className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card glass">
                <div
                  style={{
                    position: "relative",
                    height: "200px",
                    width: "100%",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="project-image"
                  />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={`${project.title}-${t}`} className="tech-item">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-secondary"
                    style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container contact-section">
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p>
            Interested in working together or just want to say hi? My inbox is
            always open.
          </p>
          <div className="contact-links">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
            >
              Say Hello
            </a>
          </div>
          <div className="contact-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>
          {" "}
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
