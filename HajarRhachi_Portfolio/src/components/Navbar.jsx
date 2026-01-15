/*
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
}*/
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo_Hajar_Rhachi.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to close menu when a link is clicked
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src={logo} alt="Hajar Rhachi Logo" className="nav-logo-img" />
                    </Link>
                </div>
                {/* The Burger Button */}
                <button className="burger" onClick={() => setIsOpen(!isOpen)}>
                    <span className={isOpen ? "line open" : "line"}></span>
                    <span className={isOpen ? "line open" : "line"}></span>
                    <span className={isOpen ? "line open" : "line"}></span>
                </button>

                {/* The Links */}
                <ul className={isOpen ? "nav-links active" : "nav-links"}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/coding-projects" onClick={closeMenu}>Coding</Link></li>
                    <li><Link to="/design-projects" onClick={closeMenu}>Design</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                </ul>
            </div>
        </nav>
    );
}
