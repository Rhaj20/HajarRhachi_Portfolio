import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CodingProjects from "./pages/CodingProjects";
import DesignProjects from "./pages/DesignProjects";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import About from "./pages/About";
import designProjects from "./data/designProjects.js";

export default function App() {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="*" element={<Navigate to="/" replace />} />

                <Route path="/" element={<Home />} />
                <Route path="/coding-projects" element={<CodingProjects />} />
                <Route path="/design-projects" element={<DesignProjects />} />
                <Route
                    path="/design/:projectId"
                    element={<ProjectDetail allProjects={designProjects} />}
                />
                <Route path="/about" element={<About />} />
            </Routes>
        </HashRouter>
    );
}
