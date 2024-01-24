import Contact from "./Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lev Rosenberg's Portfolio",
};

export default function Main() {
  return <Contact />;
}
