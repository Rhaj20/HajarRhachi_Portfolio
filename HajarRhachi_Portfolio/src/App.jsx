import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CodingProjects from "./pages/CodingProjects";
import DesignProjects from "./pages/DesignProjects";
import About from "./pages/About";
import Navbar from "./components/Navbar";


export default function App() {
    useEffect(() => {
        if (!window.location.hash) {
            window.location.hash = "#/";
        }
    }, []);
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coding-projects" element={<CodingProjects />} />
                <Route path="/design-projects" element={<DesignProjects />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </HashRouter>
    );
}
