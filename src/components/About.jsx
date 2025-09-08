import skills from "../data/skills";
import socialLinks from "../data/socialLinks";

const About = () => {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="row align-items-center g-5">
                    <div className="col-lg-5 col-md-6">
                        <div className="profile-image-container">
                            <img
                                src="./images/Profile.png"
                                alt="Aman Raheem - Web Developer"
                                className="profile-image"
                            />
                            <div className="profile-overlay">
                                <div className="overlay-content">
                                    <h5>Connect With Me</h5>
                                    <div className="social-links">
                                        {socialLinks.map((link) => (
                                            <a
                                                key={link.id}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={link.label}
                                            >
                                                <i className={link.icon}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* View Resume */}
                        <div className="text-center mt-4">
                            <a
                                href="https://drive.google.com/file/d/19B4BGIpInrRX7uKhZQIfzihEHjPTXJMJ/view?usp=sharing"
                                className="btn btn-primary btn-sm download-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-eye me-2"></i>View Resume
                            </a>
                        </div>

                        {/* Download Resume */}
                        <div className="text-center mt-4">
                            <a
                                href="https://github.com/AmanWebHub/my-resume/raw/main/Resume%20of%20amanul%20raheem.pdf"
                                className="btn btn-warning btn-sm download-btn"
                                download
                            >
                                <i className="fas fa-download me-2"></i>Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="col-lg-7 col-md-6">
                        <div className="ps-lg-4">
                            <h3 className="mb-4 fw-bold">IT Professional & Web Developer</h3>
                            <div className="about-content">
                                <p className="lead mb-4">
                                    With 2+ years of experience in creating dynamic web
                                    applications and solving complex technical challenges. Fluent
                                    in four languages and passionate about building user-friendly
                                    solutions.
                                </p>

                                <div className="strengths mb-4">
                                    <h5 className="fw-semibold mb-3">Key Strengths</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <i className="fas fa-check-circle text-primary me-2"></i>
                                            Full-stack web development expertise
                                        </li>
                                        <li className="mb-2">
                                            <i className="fas fa-check-circle text-primary me-2"></i>
                                            Multilingual communication skills
                                        </li>
                                        <li className="mb-2">
                                            <i className="fas fa-check-circle text-primary me-2"></i>
                                            Problem-solving & critical thinking
                                        </li>
                                    </ul>
                                </div>

                                <div className="skills">
                                    <h5 className="fw-semibold mb-3">Technical Skills</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <span key={skill.id} className="skill-badge">
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
