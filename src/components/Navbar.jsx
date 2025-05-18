import React, { useEffect, useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const nav = navbarRef.current;
      if (nav) {
        nav.style.background = window.scrollY > 50
          ? 'rgba(255, 255, 255, 0.95)' // white with opacity for light theme
          : 'rgba(255, 255, 255, 0.8)';
      }

      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = window.innerHeight / 2;

        if (rect.top <= offset && rect.bottom >= offset) {
          navLinks.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top bg-light"
      ref={navbarRef}
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#">Aman Raheem</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
