"use client";
import React, { useContext } from "react";
import Skills from "../components/Skills";
import { Context } from "../context";

export default function About() {
  const { state } = useContext(Context);
  const languages = ["JavaScript", "TypeScript", "Python", "C", "C++"];
  const frontend = [
    "React",
    "Next",
    "Redux",
    "CSS",
    "Tailwind",
    "Figma",
    "MUI",
    "D3",
    "Konva",
    "visx",
  ];
  const backend = [
    "Node",
    "Express",
    "Django",
    "Firestore",
    "PostgreSQL",
    "Firebase",
    "GraphQL",
    "REST",
    "WebSockets",
  ];
  return (
    <div
      className="left-page top-page"
      style={{ fontSize: `${state.fontSize}px` }}
    >
      <h1>
        <strong className="text-5xl">About Me</strong>
      </h1>
      <h2>Lev the engineer</h2>
      <div className="left-border">
        <p>
          I am a software engineer who enjoys <strong>wearing many hats</strong>
          . I relish in the creativity and design that comes with frontend
          development, the systems thinking required of backend work, and the
          balance of technical expertise and user empathy found on the product
          side.
        </p>
        <br />
        <p>
          Most of all, I am a <strong>lover of learning</strong>. A double major
          in comp sci and cognitive science, I Whether that be CS, Linguistics,
          Neuroscience, Politcs, History, Cooking, Politics, or really anything
          you throw at me!
        </p>
        <br />
        <p>
          I&apos;m currently{" "}
          <strong>
            looking for full time full stack and/or frontend roles
          </strong>{" "}
          starting in September 2024. If you think I&apos;d be a good fit for
          your company, please reach out!
        </p>
      </div>
      <h2>Lev the artist</h2>
      <div className="left-border">
        <p>
          I love building things off the computer. To that end I run my own
          ceramics business, ADAMAH Ceramics, and arrange professional A Capella
          music!
        </p>
        <br />
        <p>
          At ADAMAH Ceramics, each piece is a unique{" "}
          <strong> blend of sculptural creativity and practicality</strong>.
          Whether it&apos;s a chalice with a hand-shaped stem or a teapot shaped
          from an unconventional donut-inspired form, I strive to make art an
          integral part of your daily life.
        </p>
        <br />
        <p>
          Over the past 8 years of arranging vocal music, I&apos; learned to
          make each arrangement subvert expectations and bring{" "}
          <strong>a new perspective to popular music</strong>. I love the
          challenge of taking a song everyone knows and figuring out how to make
          it my own.
        </p>
      </div>
      {/* <h2>My tech stack</h2>
      <div className="technical-skills left-border">
        <p>Programming Languages: </p>
        <Skills skillList={languages} />
        <p>Frontend tools: </p>
        <Skills skillList={frontend} />
        <p>Backend tools: </p>
        <Skills skillList={backend} />
      </div> */}
    </div>
  );
}
