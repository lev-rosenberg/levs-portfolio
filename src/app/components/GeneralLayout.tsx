"use client";
import Me from "./Me";
import Head from "./Head";
import Foot from "./Foot";
import "../styles/globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

import { Inter } from "next/font/google";

const title = Inter({ weight: ["800"], subsets: ["latin"] });
const body = Inter({ weight: ["300"], subsets: ["latin"] });

export default function GeneralLayout({ children }: LayoutProps) {
  return (
    <>
      <style jsx global>{`
        h1 {
          font-family: ${title.style.fontFamily};
        }
        body {
          font-family: ${body.style.fontFamily};
        }
      `}</style>
      <div className="layout">
        <Head />
        <Me />
        <main>{children}</main>
        <Foot />
      </div>
    </>
  );
}
