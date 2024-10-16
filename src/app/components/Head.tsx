"use client";
import ThemeToggle from "./ThemeToggle";
import FontControl from "./FontControl";
import NavBar from "./NavBar";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Context } from "../context";
export default function Head() {
  const pathname = usePathname();
  // const { state } = useContext(Context);
  return (
    <header style={{ fontSize: "16px" }}>
      <FontControl />
      <NavBar />
      <ThemeToggle />
    </header>
  );
}
