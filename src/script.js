// script.js
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Reveal Animation
const scrollReveal = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  reset: true
});

scrollReveal.reveal('.section-title, .project-card, .about-content, .contact-form', {
  interval: 200
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.8)';
  }
});

// Active Nav Link Update
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Form Submission
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset();
  alert('Thank you for your message! I will respond shortly.');
});