"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useContext, useState } from "react";
import { Context } from "../context";

export default function NavBar() {
  const pathname = usePathname();
  const { dispatch } = useContext(Context);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    dispatch({
      type: "SET_PROJECT",
      payload: { projectUrl: null, projectTitle: null },
    });
  }, [dispatch, pathname]);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
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
          {width > 768 ? (
            <Link
              className={`p-underline ${
                pathname === "/Resume" ? "active" : ""
              }`}
              href="/Resume"
            >
              Resume
            </Link>
          ) : (
            <a
              href="/portfolio_resume.pdf"
              download="LevsPortfolio"
              target="_blank"
            >
              Resume
            </a>
          )}
        </li>
        <li>
          <Link
            className={`p-underline ${pathname === "/Contact" ? "active" : ""}`}
            href="/Contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
