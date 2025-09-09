import { useEffect, useRef } from "react";

export default function useNavbarEffect() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const nav = navbarRef.current;
      if (nav) {
        if (window.scrollY > 50) {
          nav.style.background = 'rgba(255,255,255,0.97)';
          nav.classList.add('navbar-scrolled');
        } else {
          nav.style.background = 'rgba(255,255,255,0.8)';
          nav.classList.remove('navbar-scrolled');
        }
      }

      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const offset = window.innerHeight / 2;
        if (rect.top <= offset && rect.bottom >= offset) {
          navLinks.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load to set initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return navbarRef;
}