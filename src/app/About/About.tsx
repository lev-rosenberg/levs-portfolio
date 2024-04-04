"use client";
import React, { useContext } from "react";
import { Context } from "../context";

export default function About() {
  const { state } = useContext(Context);
  return (
    <div
      className="left-page top-page"
      style={{ fontSize: `${state.fontSize}px` }}
    >
      <h1>
        <strong className="text-5xl">About Me</strong>
      </h1>
      <h2>Lev the Engineer</h2>
      <div className="left-border">
        <p>
          I am a software engineer who enjoys wearing many hats . I relish in
          the creativity and design that comes with frontend development, the
          systems thinking required of backend work, and the balance of
          technical expertise and user empathy found on the product side.
        </p>
        <br />
        <p>
          Most of all, I am a lover of learning. A double major in computer
          science and cognitive science, I refuse to limit the breadth of my
          interests––whether that be CS, linguistics, neuroscience, politcs,
          history, cooking, art, music, or really anything you throw at me!
        </p>
        <br />
        <p>
          I&apos;m currently looking for full time full stack and/or frontend
          roles, especially in the startup realm. If you think I&apos;d be a
          good fit for your company, please reach out at{" "}
          <a href="mailto:lev.rosenberg@gmail.com" className="underline">
            lev.rosenberg@gmail.com
          </a>{" "}
          or{" "}
          <a href="tel:781-898-5553" className="underline">
            781-898-5553
          </a>
          !
        </p>
      </div>
      <h2>Lev the Artist</h2>
      <div className="left-border">
        <p>
          I love building things off the computer. To that end I run my own
          ceramics business, ADAMAH Ceramics, and arrange professional A Capella
          music!
        </p>
        <br />
        <p>
          At ADAMAH Ceramics, each piece is a unique blend of sculptural
          creativity and practicality. Whether it&apos;s a chalice with a
          hand-shaped stem or a teapot shaped from an unconventional
          donut-inspired form, I strive to make art an integral part of your
          daily life.
        </p>
        <br />
        <p>
          Over the past 8 years of arranging vocal music, I&apos;ve learned to
          make each arrangement subvert expectations and bring a new perspective
          to popular music. I love the challenge of taking a song everyone knows
          and figuring out how to make it my own.
        </p>
      </div>
    </div>
  );
}
