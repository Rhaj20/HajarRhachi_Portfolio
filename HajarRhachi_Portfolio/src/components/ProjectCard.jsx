export default function ProjectCard({
                                        title,
                                        description,
                                        tech,
                                        link,
                                    }) {
    return (
        <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Tech:</strong> {tech}</p>

            {link && (
                <a href={link} target="_blank" rel="noreferrer">
                    View project →
                </a>
            )}
        </div>
    );
}
