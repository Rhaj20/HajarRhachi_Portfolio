import { Link } from "react-router-dom";
import DownloadButton from "./DownloadButton.jsx";

export default function ProjectCard({
                                        id,
                                        title,
                                        description,
                                        tech,
                                        image,
                                        link,        // external link
                                        filePath,
                                        fileName,
                                        label
                                    }) {
    const isInternal = Boolean(id);

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

                {/* INTERNAL → Design project detail */}
                {isInternal && (
                    <Link to={`/design/${id}`} className="card-link">
                        View project →
                    </Link>
                )}

                {/* EXTERNAL → Coding project / Figma / website */}
                {!isInternal && link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                    >
                        View project →
                    </a>
                )}

                {/* Optional download */}
                {filePath && (
                    <DownloadButton
                        filePath={filePath}
                        fileName={fileName}
                        label={label}
                    />
                )}
            </div>
        </div>
    );
}
