import React from 'react'

const Home = () => {
    return (
        <section id="home" class="d-flex align-items-center">
            <div class="home-overlay"></div>
            <div class="container text-center position-relative">
                <h1 class="display-3 fw-bold mb-4">Full Stack Developer</h1>
                <p class="lead mb-5">Building digital experiences that make an impact</p>
                <div class="social-links">
                    <a href="https://github.com/AmanWebHub?tab=repositories" class="btn  btn-lg mx-2"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/aman-raheem-8b813034b/" class="btn  btn-lg mx-2"><i class="fab fa-linkedin"></i></a>
                    <a href="#" class="btn  btn-lg mx-2"><i class="fab fa-twitter"></i></a>
                </div>
                <a href="#about" class="scroll-down-btn">
                    <i class="fas fa-chevron-down"></i>
                </a>
            </div>
        </section>
    )
}

export default Home