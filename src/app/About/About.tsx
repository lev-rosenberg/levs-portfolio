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
        <strong>About Me</strong>
      </h1>
      <h2>The Engineer</h2>
      <div className="left-border">
        <p>
          Software engineering came at me from left field. During my freshman
          year, a friend suggested I take an intro to computer science class. I
          had never touched code before, but I decided to give it a shot.
          Immediately, I fell in love, captivated by the problem solving, the
          balance between big-picture systems and low-level details, and all of
          software&apos;s broad applications. I quickly declared my CS major.
        </p>
        <br />
        <p>
          After learning the fundamentals, I found an outlet for creativity and
          design on the frontend side––my first couple professional roles were
          both frontend focused. But meanwhile I was always curious about what
          goes on behind the scenes. And as soon as I was introduced backend
          work, I was hooked by the systems-thinking involved. Bridging the gap
          between the technical and the human, I developed a deep appreciation
          for human-computer interaction through some awesome classes at
          Northwestern (shoutout DTR). I realized that figuring out how people
          work is both fascinating and necessary if you want to build solutions
          that resonate with real users.
        </p>
      </div>
      <br />
      <h2>The Artist</h2>
      <div className="left-border">
        <p>
          Beyond software, I spend most of my time making music and pottery.
          I&apos;m a singer and pianist, but my favorite part of music is
          arranging it––architecting the rise and fall of a piece but also
          drilling deep on the details of specific chords and voicings. And
          throughout the process, the musicians I&apos;m arranging for remain
          top of mind so that I can craft an arrangement that fits the group
          perfectly and plays to everyone&apos;s strengths.
        </p>
        <br />
        <p>
          As a potter, I make functional work––I want to make things that people
          will actually use. But that&apos;s not to say there&apos;s no room for
          artistry. Whether it&apos;s a mug with a hand-shaped base or a
          donut-shaped teapot, my favorite part of ceramics is making art an
          integral part of daily life.
        </p>
      </div>
      <br />
      <h2>The Generalist</h2>
      <div className="left-border">
        <p>
          I&apos;m a lifelong learner. I received degrees in Computer Science
          and Cognitive Science from Northwestern, but my curiosity extends to
          linguistics, neuroscience, sustainability, history, and more. I&apos;m
          always seeking to broaden my understanding of the world, and I love
          finding ways to apply that knowledge towards meaningful impact.
        </p>
        <br />
        <p>
          What connects my work across disciplines is a focus on people. Whether
          I&apos;m developing software, arranging music, or crafting pottery, I
          believe great solutions, in any domain, start with understanding who
          they&apos;re for.
        </p>
      </div>
    </div>
  );
}
