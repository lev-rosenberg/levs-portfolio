"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { Context } from "../context";
import TypedText from "../components/TypedText";

export default function Home() {
  const { state } = useContext(Context);

  return (
    <div
      className="left-page center-page"
      style={{ fontSize: `${state.fontSize}px` }}
    >
      <h1>
        Hey! I&apos;m{" "}
        <strong>
          <TypedText string="Lev Rosenberg." typeSpeed={100}></TypedText>
        </strong>
      </h1>
      <div className="left-border">
        <p>
          I&apos;m an experienced full stack engineer who loves creating––be it
          developing software, throwing pottery, arranging music, or whipping up
          the best grilled cheese (ask me abt my recipe).
        </p>
        <br />
        <p>
          I also run a small ceramics business. And I arrange professional A
          Capella music on the side. Check out everything I&apos;ve been working
          on{" "}
          <Link href="/Projects">
            <button className="mt-0">here</button>
          </Link>
        </p>
        <br />
        <p>
          I&apos;m currently on the hunt for SWE roles where I can apply my
          technical skills towards building mission-driven software. Please{" "}
          <Link href="/Contact">
            <button className="mt-0">reach out</button>
          </Link>{" "}
          if you think I&apos;d be a good fit for your team.
        </p>
      </div>
    </div>
  );
}
