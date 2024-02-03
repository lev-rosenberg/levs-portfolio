"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

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
