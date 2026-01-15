import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
    return (
        <main>
            <h1>Hi, I’m Hajar 👋</h1>
            <p>
                I'm a 2nd year Student in Creative Computing Bachelor and an aspiring junior developer & designer focused on usable interfaces and meaningful projects.
            </p>

            <Section title="Main Projects">
                <ProjectCard
                    title="9 Lives One Secret"
                    description="A stealth puzzle game built with HTML, CSS, and JavaScript, where players help Trésor the cat sneak to a secret room without being caught by her owner"
                    tech="JavaScript, HTML, CSS"
                    link="https://rhaj20.github.io/Nine-Lives-One-Secret-game_CCL1/"
                />
                <ProjectCard
                    title="The Artful Gallery"
                    description="A full-stack art community platform built with React, Node.js, Express, MySQL, and Socket.IO, enabling artwork uploads, discovery, and real-time conversations"
                    tech="React, Node.js, Express, MySQL, and Socket.IO"
                    link="https://cc241010-10724.node.ustp.cloud/"
                />
                <ProjectCard
                    title="75 challenge-Server Side Coding Project"
                    description="A dynamic fitness community platform that motivates users through daily challenges, real-time interaction, and community engagement, built with Node.js, Express, and MySQL"
                    tech="Node.js, Express, and MySQL"
                    link="https://cc241010-10971.node.fhstp.cc"
                />
            </Section>

            <Section title="Skills">
                <div>
                    <h3>Technical Skills</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML & CSS</li>
                        <li>Git & GitHub</li>
                        <li>Basic backend concepts (Node.js / Express)</li>
                        <li>Python & Machine learning</li>
                        <li>R, C, Kotlin</li>
                    </ul>
                </div>

                <div>
                    <h3>Design Skills</h3>
                    <ul>
                        <li>UI/UX fundamentals</li>
                        <li>Wireframing & prototyping</li>
                        <li>Visual hierarchy & layout</li>
                        <li>Brand identity design</li>
                        <li>Figma, Canva, Adobe Photoshop/ Illustrator/ Indesign</li>
                    </ul>
                </div>

                <div>
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Project presentation & pitching</li>
                        <li>Clear communication of technical ideas</li>
                        <li>Problem-solving mindset</li>
                        <li>Team collaboration</li>
                        <li>Adaptability & continuous learning</li>
                    </ul>
                </div>
            </Section>

        </main>
    );
}
