import { useState } from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

export default function DesignProjects() {
    // 1. Define your categories
    const categories = ["All", "UI/UX", "Branding", "3D Modeling"];
    const [filter, setFilter] = useState("All");

    // 2. Your project data (Add your design projects here)
    const projectsData = [
        {
            title: "Project One",
            category: "UI/UX",
            image: "/images/design1.png",
            description: "A mobile app design for...",
            tech: "Figma, Adobe XD",
            link: "#"
        },
        {
            title: "Project Two",
            category: "3D Modeling",
            image: "/images/design2.png",
            description: "3D model of BMO characters...",
            tech: "Blender, Fusion 360",
            link: "#"
        }
    ];

    // 3. Filter the list based on state
    const filteredProjects = filter === "All"
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <main>
            <h1>Design Projects</h1>

            {/* Category Filter Buttons */}
            <div className="filter-container">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={filter === cat ? "filter-btn active" : "filter-btn"}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <Section title={filter === "All" ? "All Selected Work" : filter}>
                <div className="grid">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </Section>
        </main>
    );
}