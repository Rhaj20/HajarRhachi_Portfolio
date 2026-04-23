import { useParams, Link } from "react-router-dom";

export default function ProjectDetail({ allProjects }) {
    const { projectId } = useParams();

    // Find the specific project data based on the URL ID
    const project = allProjects.find((p) => p.id === projectId);

    if (!project) return <div className="error">Project not found!</div>;

    return (
        <main className="project-detail-page">
            <Link to="/design-projects" className="back-btn">← Back to Design</Link>

            <header className="detail-header">
                <h1>{project.title}</h1>
                <p className="description">{project.description}</p>
                <p><strong>Tools Used:</strong> {project.tech}</p>
            </header>

            <section className={`gallery gallery-${project.galleryVariant || "default"}`}>
                {project.gallery?.map((item, index) => {
                    if (item.type === "image") {
                        return (
                            <img
                                key={index}
                                src={item.src}
                                alt={`${project.title} ${index + 1}`}
                                className="gallery-img"
                            />
                        );
                    }

                    if (item.type === "video") {
                        return (
                            <video
                                key={index}
                                src={item.src}
                                className="gallery-video"
                                controls
                                playsInline
                                autoPlay
                                muted
                                loop
                            />
                        );
                    }

                    return null;
                })}
            </section>
        </main>
    );
}