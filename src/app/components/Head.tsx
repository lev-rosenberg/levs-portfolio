"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import FontControl from "./FontControl";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Context } from "../context";
export default function Head() {
  const pathname = usePathname();
  const { state } = useContext(Context);
  return (
    <header style={{ fontSize: `${state.fontSize}px` }}>
      <FontControl />
      <nav>
        <ul>
          <li>
            <Link
              className={`p-underline ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`p-underline ${
                pathname === "/Projects" ? "active" : ""
              }`}
              href="/Projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={`p-underline ${
                pathname === "/Contact" ? "active" : ""
              }`}
              href="/Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}
