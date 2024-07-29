import React from "react";
import { useCustomTheme } from "./Theme";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useCustomTheme("");

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "green" : "#ffffff",
        height: "100vh",
      }}
    >
      <h1> {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;
