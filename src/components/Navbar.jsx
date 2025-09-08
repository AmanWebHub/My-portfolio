import React from "react";
import useNavbarEffect from "../hooks/useNavbarEffect";
import '../assets/css/Navbar.css';

const Navbar = () => {
  const navbarRef = useNavbarEffect();

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light" ref={navbarRef}>
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#">Aman Raheem</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-dark" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
