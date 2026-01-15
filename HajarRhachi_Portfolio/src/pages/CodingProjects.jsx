import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

export default function CodingProjects() {
    return (
        <main>
            <h1>Coding Projects</h1>

            <Section title="Projects">
                <ProjectCard
                    title="9 Lives One Secret"
                    image="./images/Nine_Lives_One_Secret.png"
                    description="A stealth puzzle game built with HTML, CSS, and JavaScript, where players help Trésor the cat sneak to a secret room without being caught by her owner. Made in the Creative Code Labs 1"
                    tech="JavaScript, HTML, CSS"
                    link="https://rhaj20.github.io/Nine-Lives-One-Secret-game_CCL1/"
                />
                <ProjectCard
                    title="The Artful Gallery"
                    image="./images/The_Artful_Gallery.png"
                    description="A full-stack art community platform built with React, Node.js, Express, MySQL, and Socket.IO, enabling artwork uploads, discovery, and real-time conversations. Made in Creatuve Code Labs 2"
                    tech="React, Node.js, Express, MySQL, and Socket.IO"
                    link="https://cc241010-10724.node.ustp.cloud/"
                />
                <ProjectCard
                    title="75 challenge"
                    image="./images/75_Challenge.png"
                    description="Server-side project: A dynamic fitness community platform that motivates users through daily challenges, real-time interaction, and community engagement, built with Node.js, Express, and MySQL"
                    tech="Node.js, Express, and MySQL"
                    link="https://cc241010-10971.node.fhstp.cc"
                />
                <ProjectCard
                    title="Dear Future"
                    image="./images/Dear_Future.png"
                    description="an Android application that helps users reflect on their past selves by writing letters to their future self, and storing digital time capsules that can be opened at a later date. Made during the Creative Code Labs 3"
                    tech="Kotlin" link="https://ccl3-ws2025-72f895.pages.nwt.fhstp.ac.at/"
                />
                <ProjectCard
                    title="Remaking BMO from Adventure time"
                    image="./images/Remake_BMO.png"
                    description="A handheld, 3D-printed game console inspired by BMO from Adventure Time, featuring a custom-built Snake game with personality-driven visuals and sound. The console includes animated facial expressions, voice feedback, and multiple game modes (Normal and Time Attack), creating a playful, character-based gaming experience that blends hardware design, embedded systems, and interactive game logic."
                    tech="ESP32-S3,Arduino Nano,ST7735 TFT Display,DFPlayer Mini,3D Printing & 3D Modeling, C++ (Arduino Framework), Circuit assembly"
                    link="https://www.figma.com/deck/Q1yZYuBL6HzEObNxFNuV6v/Beemo--Copy-?node-id=1-25&t=Ojzlc3HdFbCrOs5R-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                />
                <ProjectCard
                    title="MindTracker"
                    image="./images/MindTracker.png"
                    description="A simple, daily tool for mood logging that provides immediate positive reinforcement by giving quotes, and long-term insight by allowing people to check their past entries. Its main goal is to allow people to track their emotional patterns and to maintain mental health awareness"
                    tech="Kotlin"
                    link="https://www.canva.com/design/DAG6XSu5arM/tULUhulp_iECariAK2ZG7A/edit?utm_content=DAG6XSu5arM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                />
            </Section>
        </main>
    );
}
