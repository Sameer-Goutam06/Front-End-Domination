/* eslint-disable no-unused-vars */
//Refer to ThemeContext.jsx for the context provider it is the ContextProvider API
//Refer to ThemeSwitcher.jsx for the context consumer it is the useContext API
// ThemeSwitcher.jsx
import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
