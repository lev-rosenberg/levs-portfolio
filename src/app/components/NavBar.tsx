import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul className="flex gap-3 justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}
