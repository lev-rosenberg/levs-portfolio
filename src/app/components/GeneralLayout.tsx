"use client";
import Me from "./Me";
import Head from "./Head";
import Foot from "./Foot";
import "../styles/globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function GeneralLayout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Head />
      <Me />
      <main className="overflow-clip h-full">{children}</main>
      <Foot />
    </div>
  );
}
