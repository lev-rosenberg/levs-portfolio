import GeneralLayout from "../components/GeneralLayout";
import Contact from "./Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lev Rosenberg's Portfolio",
};

export default function Main() {
  return (
    <GeneralLayout>
      <Contact />
    </GeneralLayout>
  );
}
