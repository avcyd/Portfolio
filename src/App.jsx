import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Hero from "./pages/Landing/Hero.jsx";
import Proficiencies from "./pages/Proficiencies/Proficiencies.jsx";
import "./App.css";
import { SiHomepage } from "react-icons/si";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
