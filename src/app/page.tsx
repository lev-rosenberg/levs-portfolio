import Home from "./Home/Home";
import { Metadata } from "next";
import GeneralLayout from "./components/GeneralLayout";
export const metadata: Metadata = {
  title: "Lev Rosenberg's Portfolio",
};

export default function Main() {
  return (
    <GeneralLayout>
      <Home />
    </GeneralLayout>
  );
}
