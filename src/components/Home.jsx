import React from "react";
import socialLinks from "../data/socialLinks";
import useSmoothScroll from "../hooks/useSmoothScroll";
import "../assets/css/Home.css";

const Home = () => {
  useSmoothScroll();

  return (
    <section id="home" className="d-flex align-items-center">
      <div className="home-overlay"></div>
      <div className="container text-center position-relative">
        <h1 className="display-3 fw-bold mb-4">Full Stack Developer</h1>
        <p className="lead mb-5">Building digital experiences that make an impact</p>

        <div className="social-links">
          {socialLinks.map(link => (
            <a key={link.id} href={link.href} className="btn btn-lg mx-2" target="_blank" rel="noopener noreferrer" aria-label={link.label}>
              <i className={link.icon}></i>
            </a>
          ))}
        </div>

        <a href="#about" className="scroll-down-btn">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
