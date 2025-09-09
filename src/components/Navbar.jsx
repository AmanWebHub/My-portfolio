import React from "react";
import useNavbarEffect from "../hooks/useNavbarEffect";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const navbarRef = useNavbarEffect();

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = navbarRef.current.offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
      
      // Update URL
      window.history.pushState(null, null, `#${targetId}`);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      ref={navbarRef}
    >
      <div className="container">
        <a 
          className="navbar-brand fw-bold text-primary" 
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "home")}
        >
          Aman Raheem
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                onClick={(e) => handleSmoothScroll(e, "home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                onClick={(e) => handleSmoothScroll(e, "about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                onClick={(e) => handleSmoothScroll(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                onClick={(e) => handleSmoothScroll(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;