"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

export default function ThemeToggle() {
  const storage = window.localStorage;
  let darkMode = storage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(darkMode === "dark");

  if (!darkMode) {
    storage.setItem("theme", "light");
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      storage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      storage.setItem("theme", "light");
    }
    const checkbox = document.getElementById("checkbox") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = isDarkMode;
    }
  }, [isDarkMode, storage]);

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
