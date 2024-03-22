"use client";
import React, { useContext } from "react";
import { Context } from "../context";

export default function About() {
  const { state } = useContext(Context);

  return (
    <div
      className="left-page center-page"
      style={{ fontSize: `${state.fontSize}px` }}
    >
      <h1>
        <strong className="text-5xl">About Me</strong>
      </h1>
      <div className="left-border">
        <p>
          I’m a fourth year at Northwestern studying comp sci & cog sci who
          wants to apply my technical skills towards mission-driven roles.
        </p>
        <br />
        <p>
          I also run a ceramics business and arrange professional A Capella
          music!
        </p>
        <p className="font-bold">
          I&apos;m currently looking for full time SWE roles starting in
          September 2024. If you think I&apos;d be a good fit for your company,
          please reach out!
        </p>
      </div>
    </div>
  );
}
