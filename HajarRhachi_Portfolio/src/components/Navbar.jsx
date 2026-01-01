import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ display: "flex", gap: "1rem" }}>
            <Link to="/">Home</Link>
            <Link to="/coding-projects">Coding</Link>
            <Link to="/design-projects">Design</Link>
            <Link to="/about">About</Link>
        </nav>
    );
}