export default function ProjectCard({ title, description, tech, link, image }) {
    return (
        <div className="card">
            {image && (
                <div className="card-image-container">
                    <img src={image} alt={title} className="card-image" />
                </div>
            )}
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <p><strong>Tech:</strong> {tech}</p>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        View project →
                    </a>
                )}
            </div>
        </div>
    );
}

