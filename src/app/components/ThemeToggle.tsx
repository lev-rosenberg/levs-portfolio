"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

export default function ThemeToggle() {
  // this local storage x nextjs compatibility inspired by https://hackernoon.com/storing-and-retrieving-data-in-nextjs-using-localstorage-and-typescript
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const darkMode = window.localStorage.getItem("theme");
      if (darkMode === null || darkMode === undefined) {
        return true;
      }
      return `${darkMode}` ? true : false;
    }
    return true;
  });

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
  }, [isDarkMode]);

  return (
    <div
      className="theme-toggle flex justify-center items-center w-8 h-8 bg-indigo-500 rounded-full"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <FontAwesomeIcon icon={faMoon} size="xs" className="icon" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="xs" className="icon" />
      )}
    </div>
  );
}
