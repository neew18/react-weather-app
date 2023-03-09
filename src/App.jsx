import React, { createContext, useContext, useState } from "react";
import Footer from "./Footer";
import Weather from "./Weather";
import "./Weather.css";
import DayNightToggle from "react-day-and-night-toggle";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container-fluid App " id={theme}>
        <div className="position-fixed fixed-top p-3">
          <DayNightToggle
            onChange={toggleTheme}
            size="15"
            checked={theme === "dark"}
          />
        </div>
        <Weather defaultCity="New York" />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
