import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import AmbientBackground from "./components/ambient/AmbientBackground.jsx";
import "./App.css";

function App() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
