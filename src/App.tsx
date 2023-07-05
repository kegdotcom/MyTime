import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Today from "./pages/today";
import Calendar from "./pages/calendar";
import Nav from "./components/Nav";
import { Register, Login } from "./pages/account";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  return (
    <>
      <Nav darkMode={darkTheme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/today" element={<Today />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
