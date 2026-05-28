import DownloadButton from "../components/DownloadButton.jsx";
import profilePic from "../assets/Profile_Pic.png";

export default function About() {
    return (
        <main className="about-page">

            {/* HERO */}
            <section className="about-hero">
                <div className="about-hero-content">

                    <div className="about-text">
                        <p className="about-label">ABOUT ME</p>

                        <h1>
                            Creative developer &
                            <span> designer</span>
                        </h1>

                        <p className="about-description">
                            I’m Hajar Rhachi, a Creative Computing student passionate about
                            building digital experiences that combine aesthetics,
                            interaction and technology.

                            I enjoy blending design thinking with development to create
                            interfaces that feel intuitive, expressive and engaging.
                        </p>

                        <div className="about-tags">
                            <span>Frontend</span>
                            <span>UI/UX</span>
                            <span>Creative Coding</span>
                            <span>Interactive Design</span>
                        </div>
                    </div>

                    <div className="about-image-wrapper">
                        <img
                            src={profilePic}
                            className="about-hero__img"
                            alt="Hajar Rhachi"
                        />
                    </div>

                </div>
            </section>

            {/* CV CTA */}
            <section className="card">
                <div className="card-content">
                    <h2>CV</h2>
                    <p>Download my full CV for more details about my experience and projects.</p>

                    <DownloadButton
                        filePath="./files/CV_Hajar_Rhachi.pdf"
                        fileName="Hajar_Rhachi_CV.pdf"
                        label="Download CV"
                    />
                </div>
            </section>
            <section className="activities-section">
                <div className="section-heading">
                    <p className="about-label">EXPERIENCE & ACTIVITIES</p>
                    <h2>Things I’ve Been Part Of</h2>
                    <p className="activities-intro">
                        Beyond coursework, I enjoy participating in creative,
                        technical and collaborative experiences that push my skills further.
                    </p>
                </div>

                <div className="activities-carousel">

                    <div className="activity-card">
                        <img
                            src="/images/activity1.jpg"
                            alt="Hackathon"
                            className="activity-image"
                        />

                        <div className="activity-content">
                            <h3>Creative Coding Workshop</h3>

                            <p>
                                Participated in an interactive workshop exploring
                                generative visuals, motion graphics and experimental interfaces.
                            </p>
                        </div>
                    </div>

                    <div className="activity-card">
                        <img
                            src="/images/activity2.jpg"
                            alt="Team project"
                            className="activity-image"
                        />

                        <div className="activity-content">
                            <h3>Collaborative Team Projects</h3>

                            <p>
                                Worked in multidisciplinary teams to build applications,
                                prototypes and interactive experiences.
                            </p>
                        </div>
                    </div>

                    <div className="activity-card">
                        <img
                            src="/images/activity3.jpg"
                            alt="Presentation"
                            className="activity-image"
                        />

                        <div className="activity-content">
                            <h3>Project Presentations</h3>

                            <p>
                                Presented technical and design projects in front of peers,
                                communicating concepts and development processes clearly.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            {/* WHAT I ENJOY */}
            <section>
                <h2>What I enjoy</h2>
                <div className="grid">
                    <div className="card">
                        <div className="card-content">
                            <h3>Web Experiences</h3>
                            <p>Building interactive, responsive interfaces that feel alive.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <h3>UI Design</h3>
                            <p>Designing clean, modern and user-friendly layouts.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <h3>Learning</h3>
                            <p>Constantly exploring new tools, frameworks and ideas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECH STACK */}
            <section>
                <h2>Tech Stack</h2>
                <div className="skills-list">
                    {["React", "JavaScript", "HTML", "CSS", "Git", "Figma",
                        "REST APIs", "Node.js", "Express", "Python", "R", "C++", "Kotlin", "Godot", "Unity", "Blender", "3d Modeling", "User research process"].map((skill) => (
                        <span key={skill} className="skill-pill">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* LANGUAGES */}
            <section>
                <h2>Languages</h2>
                <div className="skills-list">
                    <span className="skill-pill">English · Proficient</span>
                    <span className="skill-pill">German · Elementary</span>
                    <span className="skill-pill">French · Proficient</span>
                    <span className="skill-pill">Arabic · Native</span>
                    <span className="skill-pill">Spanish · Intermediate</span>
                </div>
            </section>



        </main>
    );
}