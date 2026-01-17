export default function DownloadButton({ label, fileName, filePath }) {
    return (
        <a
            href={filePath}
            download={fileName}
            className="download-btn"
        >
            {label}
        </a>
    );
}
