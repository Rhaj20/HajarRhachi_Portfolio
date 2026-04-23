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
                    description="A stealth puzzle game built with HTML, CSS, and JavaScript, where players help Trésor the cat sneak to a secret room without being caught by her owner. Made in the Creative Code Labs 1 by myself"
                    tech="JavaScript, HTML, CSS"
                    link="https://rhaj20.github.io/Nine-Lives-One-Secret-game_CCL1/"
                />
                <ProjectCard
                    title="The Artful Gallery"
                    image="./images/The_Artful_Gallery.png"
                    description="A full-stack art community platform built with React, Node.js, Express, MySQL, and Socket.IO, enabling artwork uploads, discovery, and real-time conversations. Made in Creatuve Code Labs 2 by myself"
                    tech="React, Node.js, Express, MySQL, and Socket.IO"
                    link="https://cc241010-10724.node.ustp.cloud/"
                />
                <ProjectCard
                    title="Dear Future"
                    image="./images/Dear_Future_1.png"
                    description="An Android application that helps users reflect on their past selves by writing letters to their future self, and storing digital time capsules that can be opened at a later date. Made during the Creative Code Labs 3 in a pair"
                    tech="Kotlin"
                    link="https://ccl3-ws2025-72f895.pages.nwt.fhstp.ac.at/"
                    filePath="./files/dear_future.apk"
                    fileName="DearFuture_App.apk"
                    label="Download Dear Future app"
                />
                <ProjectCard
                    title="75 challenge"
                    image="./images/75_Challenge.png"
                    description="Server-side project: A dynamic fitness community platform that motivates users through daily challenges, real-time interaction, and community engagement, built with Node.js, Express, and MySQL"
                    tech="Node.js, Express, and MySQL"
                    link="https://cc241010-10971.node.fhstp.cc"
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
                    image="./images/MindTracker_Main.png"
                    description="A simple, daily android app used as a tool for mood logging that provides immediate positive reinforcement by giving quotes, and long-term insight by allowing people to check their past entries. Its main goal is to allow people to track their emotional patterns and to maintain mental health awareness"
                    tech="Kotlin"
                    link="https://www.canva.com/design/DAG6XSu5arM/tULUhulp_iECariAK2ZG7A/edit?utm_content=DAG6XSu5arM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    filePath="./files/mind_tracker.apk"
                    fileName="MindTracker_App.apk"
                    label="Download Mindtracker app"/>
                <ProjectCard
                    title="Fashion Court"
                    image="./images/Fashion_Court_2.png"
                    description="An augmented reality(AR) application built with Kotlin that allows users to virtually try on clothing by overlaying 3D clothes onto the user’s body in real time using AR technology."
                    tech="Kotlin"
                    link="https://www.figma.com/proto/ujoBwZovRtCS5nEPfiQPu5/Fashion-Court?node-id=8-3&t=xYFvTY45V2LDo8uB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A3"
                    filePath="./files/fashion-court.apk"
                    fileName="fashion-court.apk"
                    label="Download Fashion Court app"/>
                <ProjectCard
                    title="Implementation Zero-shot Learning with Clip via Embedding Visualization"
                    image="./images/Zero-Shot_Viz.png"
                    description="In a group project, we tried Zero-Shot Learning with Clip via Embedding Visualization."
                    tech="Python, libraries used: oc, clip, torch, numpy, PIL, tqdm, matplotlib.pyplot"
                    link="https://www.canva.com/design/DAG67zb6DRk/CByhcl6rhIj99hp_TEit3g/edit?utm_content=DAG67zb6DRk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    filePath="./files/STML_group2__project.ipynb"
                    fileName="STML_group2__project.ipynb"
                    label="Download the code"/>
            </Section>
        </main>
    );
}
