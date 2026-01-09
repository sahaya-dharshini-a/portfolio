import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Internships from "./pages/Internships";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Hackathons from "./pages/Hackathons";
import ExtraCurricular from "./pages/ExtraCurricular";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Add padding-top because navbar is fixed */}
      <div className="pt-16">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/activities" element={<ExtraCurricular />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}
