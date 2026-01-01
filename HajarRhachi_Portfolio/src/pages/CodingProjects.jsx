import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

export default function CodingProjects() {
    return (
        <div>
            <h1>Coding Projects</h1>

            <Section title="Projects">
                <ProjectCard
                    title="9 Lives One Secret"
                    description="Interactive JS game."
                    tech="JavaScript, HTML, CSS"
                    link="https://rhaj20.github.io/Nine-Lives-One-Secret-game_CCL1/"
                />
                <ProjectCard
                    title="The Artful Gallery"
                    description="Online art gallery with dynamic content."
                    tech="React, API, CSS"
                    link="#"
                />
                <ProjectCard
                    title="Server Side-Eye"
                    description="Server-side project focused on data handling."
                    tech="Node.js, Express"
                    link="#"
                />
                <ProjectCard
                    title="CCL3 Project"
                    description="Mobile App."
                    tech="Kotlin"
                />
            </Section>
        </div>
    );
}
