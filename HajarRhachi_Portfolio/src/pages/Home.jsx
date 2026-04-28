import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Typewriter from "typewriter-effect";
import { useRef } from "react";

export default function Home() {
    const bannerRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = bannerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        bannerRef.current.style.setProperty("--x", `${x}px`);
        bannerRef.current.style.setProperty("--y", `${y}px`);
    };
    return (
        <>
        <section
            className="banner"
            ref={bannerRef}
            onMouseMove={handleMouseMove}
        >
            <div className="banner-glow"></div>

            <div className="banner-content">
                <h1 className="banner-title">
                    Hajar <span>Rhachi</span>'s <span>Portfolio</span>
                </h1>

                <p className="banner-description">
                    Creative Computing student crafting digital experiences
                    through design, interaction, and technology.
                </p>
                <p className="banner-type">
                    <Typewriter
                        options={{
                            strings: [
                                "Interactive interfaces",
                                "Creative coding experiments",
                                "Human-centered design"
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 40
                        }}
                    />
                </p>
                {/*<div className="banner-tags">
                        <span>UI/UX</span>
                        <span>Frontend</span>
                        <span>Creative Coding</span>
                    </div>*/}
            </div>
        </section>
        <main>
            <Section title="Main Projects">
                <ProjectCard
                    title="The Artful Gallery"
                    image="./images/The_Artful_Gallery.png"
                    description="A full-stack art community platform built with React, Node.js, Express, MySQL, and Socket.IO, enabling artwork uploads, discovery, and real-time conversations. Made in Creatuve Code Labs 2"
                    tech="React, Node.js, Express, MySQL, and Socket.IO"
                    link="https://cc241010-10724.node.ustp.cloud/"
                />
                <ProjectCard
                    title="9 Lives One Secret"
                    image="./images/Nine_Lives_One_Secret.png"
                    description="A stealth puzzle game built with HTML, CSS, and JavaScript, where players help Trésor the cat sneak to a secret room without being caught by her owner. Made in the Creative Code Labs 1"
                    tech="JavaScript, HTML, CSS"
                    link="https://rhaj20.github.io/Nine-Lives-One-Secret-game_CCL1/"
                />
                <ProjectCard
                    title="75 challenge"
                    image="./images/75_Challenge.png"
                    description="Server-side project: A dynamic fitness community platform that motivates users through daily challenges, real-time interaction, and community engagement, built with Node.js, Express, and MySQL"
                    tech="Node.js, Express, and MySQL"
                    link="https://cc241010-10971.node.fhstp.cc"
                />
            </Section>

            <Section title="Skills">
                <div>
                    <h3>Technical Skills</h3>
                    <ul className="skills-list">
                        <li className="skill-pill">JavaScript</li>
                        <li className="skill-pill">React</li>
                        <li className="skill-pill">HTML & CSS</li>
                        <li className="skill-pill">Git & GitHub</li>
                        <li className="skill-pill">REST APIs</li>
                        <li className="skill-pill">Basic backend (Node.js / Express)</li>
                        <li className="skill-pill">Python & Machine Learning</li>
                        <li className="skill-pill">R, C++, Kotlin, Godot</li>
                        <li className="skill-pill">3d Modeling and printing</li>
                        <li className="skill-pill">User research process</li>
                        <li className="skill-pill">Circuit assembling</li>
                    </ul>
                </div>

                <div>
                    <h3>Design Skills</h3>
                    <ul className="skills-list">
                        <li className="skill-pill">UI/UX fundamentals</li>
                        <li className="skill-pill">Wireframing & prototyping</li>
                        <li className="skill-pill">Visual hierarchy & layout</li>
                        <li className="skill-pill">Social media graphics</li>
                        <li className="skill-pill">Brand identity design</li>
                        <li className="skill-pill">Figma, Canva, Adobe Photoshop/ Illustrator/ Indesign</li>
                        <li className="skill-pill">Video editing</li>
                    </ul>
                </div>

                <div>
                    <h3>Soft Skills</h3>
                    <ul className="skills-list">
                        <li className="skill-pill">Project presentation & pitching</li>
                        <li className="skill-pill">Clear communication of technical ideas</li>
                        <li className="skill-pill">Problem-solving mindset</li>
                        <li className="skill-pill">Team collaboration</li>
                        <li className="skill-pill">Adaptability & continuous learning</li>
                    </ul>
                </div>

            </Section>

        </main>
    </>
    );
}
