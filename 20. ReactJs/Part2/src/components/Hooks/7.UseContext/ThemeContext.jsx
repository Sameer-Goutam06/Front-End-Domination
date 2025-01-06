/* eslint-disable no-unused-vars */
// ThemeContext.js
import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Create a custom provider component
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
