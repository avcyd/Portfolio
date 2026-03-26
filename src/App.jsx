import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Hero from "./pages/Landing/Hero.jsx";
import Proficiencies from "./pages/Proficiencies/Proficiencies.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Navbar from "././components/navbar/Navbar.jsx";
import "./App.css";
import { SiHomepage } from "react-icons/si";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
