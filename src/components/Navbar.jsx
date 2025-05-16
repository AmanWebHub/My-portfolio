import React, { useEffect, useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const nav = navbarRef.current;

      // Navbar background change
      if (nav) {
        nav.style.background = window.scrollY > 50
          ? 'rgba(0, 0, 0, 0.95)'
          : 'rgba(0, 0, 0, 0.8)';
      }

      // Active Nav Link Update
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      ref={navbarRef}
      style={{ background: 'rgba(0, 0, 0, 0.8)', transition: 'background 0.3s ease' }}
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
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
