import GeneralLayout from "../components/GeneralLayout";
import Resume from "./Resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lev Rosenberg's Portfolio",
};

export default function Main() {
  return (
    <GeneralLayout>
      <Resume />
    </GeneralLayout>
  );
}
