import Me from "./Me";
import NavBar from "./NavBar";
import Foot from "./Foot";
import "../styles/globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function GeneralLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen justify-between p-3">
      <NavBar />
      <Me />
      <main className="h-full p-10">{children}</main>
      <Foot />
    </div>
  );
}
