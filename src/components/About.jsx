import React from "react";
import skills from "../data/skills";
import useScrollReveal from "../hooks/useScrollReveal";
import "../assets/css/About.css";

const About = () => {
  useScrollReveal(
    [".about-description", ".skills", ".strengths", ".languages"],
    { origin: "bottom", distance: "50px", duration: 1000, reset: true }
  );

  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row align-items-center g-5">
          {/* Profile Image */}
          <div className="col-lg-5 col-md-6">
            <div className="profile-image-container">
              <img src="./images/Profile.png" alt="Aman Raheem" className="profile-image" />
            </div>
          </div>

          {/* About Content */}
          <div className="col-lg-7 col-md-6">
            <div className="ps-lg-4 about-content">
              <h3 className="mb-3 fw-bold">IT Professional & Web Developer</h3>
              <p className="lead mb-4 about-description">
                With 2+ years of experience creating dynamic web applications and solving complex technical challenges. Passionate about building digital experiences that make an impact.
              </p>

              {/* Technical Skills */}
              <h5 className="section-header">Technical Skills</h5>
              <div className="skills">
                {skills.map(skill => (
                  <span key={skill.id} className="skill-badge">{skill.name}</span>
                ))}
              </div>

              {/* Strengths */}
              <h5 className="section-header">Strengths</h5>
              <ul className="strengths">
                <li><i className="fas fa-lightbulb"></i> Problem Solving</li>
                <li><i className="fas fa-users"></i> Team Collaboration</li>
                <li><i className="fas fa-project-diagram"></i> Project Management</li>
                <li><i className="fas fa-rocket"></i> Adaptability & Learning</li>
              </ul>

              {/* Languages */}
              <h5 className="section-header">Languages</h5>
              <ul className="languages">
                <li>English</li>
                <li>Tamil</li>
                <li>Sinhala</li>
                <li>Hindi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;