"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

export default function ThemeToggle() {
  // this local storage x nextjs compatibility inspired by https://hackernoon.com/storing-and-retrieving-data-in-nextjs-using-localstorage-and-typescript
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // if they don't have data stored yet, default to dark mode
    if (typeof window !== "undefined") {
      const darkMode = window.localStorage.getItem("theme");
      // if they don't have data stored yet, default to dark mode
      if (darkMode === null || darkMode === undefined) {
        return false;
      } else {
        return darkMode == "dark" ? true : false;
      }
    }
    return false;
  });
  const [selectedTheme, setSelectedTheme] = useState<string>();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    const checkbox = document.getElementById("checkbox") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = isDarkMode;
    }
    setSelectedTheme(`${isDarkMode ? "dark" : "light"}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  return (
    <div
      className="theme-toggle flex justify-center items-center w-8 h-8 bg-indigo-500 rounded-full"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {selectedTheme == "dark" ? (
        <FontAwesomeIcon icon={faMoon} size="xs" className="icon" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="xs" className="icon" />
      )}
    </div>
  );
}
