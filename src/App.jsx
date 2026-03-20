import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Landing/Hero.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
