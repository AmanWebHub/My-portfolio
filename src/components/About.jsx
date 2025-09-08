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
              <h5 className="fw-semibold mb-3">Technical Skills</h5>
              <div className="d-flex flex-wrap gap-2 skills">
                {skills.map(skill => (
                  <span key={skill.id} className="skill-badge">{skill.name}</span>
                ))}
              </div>

              {/* Strengths */}
              <h5 className="fw-semibold mb-3 mt-4">Strengths</h5>
              <ul className="strengths">
                <li><i className="fas fa-lightbulb text-primary"></i> Problem Solving</li>
                <li><i className="fas fa-users text-primary"></i> Team Collaboration</li>
                <li><i className="fas fa-project-diagram text-primary"></i> Project Management</li>
                <li><i className="fas fa-rocket text-primary"></i> Adaptability & Learning</li>
              </ul>

              {/* Languages */}
              <h5 className="fw-semibold mb-3 mt-4">Languages</h5>
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
