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
          I love building––be it developing software, throwing pottery,
          arranging music, lots. I'm an experienced full stack engineer, and I
          want to apply my technical skills towards mission-driven software
          roles.
        </p>
        <br />
        <p>
          I also run a ceramics business and arrange professional A Capella
          music on the side. I love to learn and create, and I'm always looking
          for new opportunities to do so.
        </p>
        <br />
        <p>
          Check out what I&apos;ve been working on{" "}
          <Link href="/Projects">
            <button className="mt-0">here</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
