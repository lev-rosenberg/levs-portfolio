"use client";
import { useContext } from "react";
import { Context } from "../context";
export default function Contact() {
  const { state } = useContext(Context);
  return (
    <div
      className="left-page top-page resume-page"
      style={{ fontSize: `${state.fontSize}px` }}
    >
      <h1>
        <strong>Resume</strong>
      </h1>
      {/* <div className="iframe-container"> */}
      <embed className="w-full h-full" src="/Lev_Rosenberg_Resume.pdf"></embed>
      {/* </div> */}
    </div>
  );
}
