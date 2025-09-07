import skills from '../data/skills'


const About = () => {
    return (
        <section id="about" class="py-5">
            <div class="container">
                <h2 class="section-title">About Me</h2>
                <div class="row align-items-center g-5">
                    <div class="col-lg-5 col-md-6">
                        <div class="profile-image-container">
                            <img src="./images/Profile.png" alt="Aman Raheem - Web Developer" class="profile-image" />
                            <div class="profile-overlay">
                                <div class="overlay-content">
                                    <h5>Connect With Me</h5>
                                    <div class="social-links">
                                        <a href="https://www.linkedin.com/in/aman-raheem-8b813034b/"><i class="fab fa-linkedin"></i></a>
                                        <a href="https://github.com/AmanWebHub?tab=repositories"><i class="fab fa-github"></i></a>
                                        <a href="#"><i class="fas fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center mt-4">
                            <a href="https://drive.google.com/file/d/19B4BGIpInrRX7uKhZQIfzihEHjPTXJMJ/view?usp=sharing" class="btn btn-primary btn-sm download-btn" View >
                                <i class="fas fa-eye  me-2"></i>View  Resume
                            </a>
                        </div>


                        <div class="text-center mt-4">
                            <a href="https://github.com/AmanWebHub/my-resume/raw/main/Resume%20of%20amanul%20raheem.pdf" class="btn btn-warning btn-sm download-btn" download>
                                <i class="fas fa-download me-2"></i>Download Resume
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6">
                        <div class="ps-lg-4">
                            <h3 class="mb-4 fw-bold">IT Professional & Web Developer</h3>
                            <div class="about-content">
                                <p class="lead mb-4">
                                    With 2+ years of experience in creating dynamic web applications
                                    and solving complex technical challenges. Fluent in four languages
                                    and passionate about building user-friendly solutions.
                                </p>

                                <div class="strengths mb-4">
                                    <h5 class="fw-semibold mb-3">Key Strengths</h5>
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            <i class="fas fa-check-circle text-primary me-2"></i>
                                            Full-stack web development expertise
                                        </li>
                                        <li class="mb-2">
                                            <i class="fas fa-check-circle text-primary me-2"></i>
                                            Multilingual communication skills
                                        </li>
                                        <li class="mb-2">
                                            <i class="fas fa-check-circle text-primary me-2"></i>
                                            Problem-solving & critical thinking
                                        </li>
                                    </ul>
                                </div>

                                <div class="skills">
                                    <h5 class="fw-semibold mb-3">Technical Skills</h5>
                                    <div class="d-flex flex-wrap gap-2">

                                        {skills.map(skill =>  <span key={skill.id} class="skill-badge">{skill.name}</span> )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About