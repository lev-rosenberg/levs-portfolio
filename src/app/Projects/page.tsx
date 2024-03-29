import GeneralLayout from "../components/GeneralLayout";
import Projects from "./Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lev Rosenberg's Portfolio",
};

export default function Main() {
  return (
    <GeneralLayout>
      <Projects />
    </GeneralLayout>
  );
}
