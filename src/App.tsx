import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Today from "./pages/today";
import Calendar from "./pages/calendar";
import Nav from "./components/Nav";
import { Register, Login } from "./pages/account";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <>
      <Nav darkMode={darkMode} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/calendar" element={<Calendar darkMode={darkMode} />} />
        <Route path="/today" element={<Today darkMode={darkMode} />} />
        <Route path="/login" element={<Login darkMode={darkMode} />} />
        <Route path="/register" element={<Register darkMode={darkMode} />} />
      </Routes>
    </>
  );
}

export default App;
