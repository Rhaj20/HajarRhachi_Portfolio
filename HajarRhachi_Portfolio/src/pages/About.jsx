import DownloadButton from "../components/DownloadButton.jsx";

export default function About() {
    return (
        <main className="about-page">

            {/* HERO */}
            <section className="about-hero">
                <h1>About Me(Work in Progress)</h1>
                <p>
                    I’m a 2nd year Creative Computing student, junior developer and designer
                    passionate about building interactive and visually engaging digital experiences.
                </p>
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
                    {["React", "JavaScript", "HTML", "CSS", "Git", "Figma"].map((skill) => (
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

        </main>
    );
}