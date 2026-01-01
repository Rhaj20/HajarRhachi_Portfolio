import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

export default function DesignProjects() {
    return (
        <main>
            <h1>Design Projects</h1>

            <Section title="Selected Work">
                <ProjectCard
                    title="SF Factor"
                    description="Brand identity & visual storytelling."
                    tech="Branding, Layout, Typography"
                />
                <ProjectCard
                    title="Créations Lys"
                    description="Creative design project with handcrafted visuals."
                    tech="Illustration, Visual Design"
                />
            </Section>
        </main>
    );
}
