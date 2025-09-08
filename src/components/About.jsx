import React from "react";
import skills from "../data/skills";
import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
  useScrollReveal(
    [".section-title", ".about-content", ".skills", ".strengths"],
    { origin: "bottom", distance: "50px", duration: 1000, reset: true }
  );

  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row align-items-center g-5">
          <div className="col-lg-5 col-md-6">
            <div className="profile-image-container">
              <img src="./images/Profile.png" alt="Aman Raheem" className="profile-image" />
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="ps-lg-4 about-content">
              <h3 className="mb-4 fw-bold">IT Professional & Web Developer</h3>
              <p className="lead mb-4">With 2+ years of experience creating dynamic web apps and solving complex technical challenges.</p>
              <h5 className="fw-semibold mb-3">Technical Skills</h5>
              <div className="d-flex flex-wrap gap-2">
                {skills.map(skill => <span key={skill.id} className="skill-badge">{skill.name}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
