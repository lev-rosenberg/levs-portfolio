"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useContext } from "react";
import { Context } from "../context";

export default function NavBar() {
  const pathname = usePathname();
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({
      type: "SET_PROJECT",
      payload: { projectUrl: "", projectTitle: "" },
    });
  }, [dispatch, pathname]);

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
        <li className="only-desktop">
          <Link
            className={`p-underline ${pathname === "/Resume" ? "active" : ""}`}
            href="/Resume"
          >
            Resume
          </Link>
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
