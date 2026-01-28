import { useState } from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import designProjects from "../data/designProjects";

export default function DesignProjects() {
    const categories = ["All", "UI/UX", "Branding", "3D Modeling"];
    const [filter, setFilter] = useState("All");

    const filteredProjects =
        filter === "All"
            ? designProjects
            : designProjects.filter(project => project.category === filter);

    return (
        <main>
            <h1>Design Projects</h1>

            {/* Category Filter Buttons */}
            <div className="filter-container">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-btn ${filter === category ? "active" : ""}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <Section title={filter === "All" ? "Selected Work" : filter}>
                <div className="grid">
                    {filteredProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}          // 🔑 internal routing trigger
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            image={project.image}
                        />
                    ))}
                </div>
            </Section>
        </main>
    );
}
