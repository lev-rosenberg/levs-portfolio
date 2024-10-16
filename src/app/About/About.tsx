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
          Software engineering came at me from left field. I came into college
          undecided until a friend told me I should take an intro CS class. Now,
          I had never touched coding in my life, and didn&apos;t have any plans
          to. But I&apos;m a curious guy, so I tried it out. Immediately, I fell
          in love. I was captivated by the problem solving, the systems
          thinking, the creativity, the balance between big-picture concepts and
          low-level details, and all of software&apos; broad applications in the
          world.
        </p>
        <br />
        <p>
          I quickly found an outlet for creativity and design on the frontend
          side. My first couple professional roles were both frontend focused.
          But meanwhile I was always curious about what goes on behind the
          scenes. And as soon as I discovered backend work and the
          systems-thinking it engages, I was hooked. Soon, I started whipping up
          full stack apps in my free time. Then, through some awesome classes at
          Northwestern (shoutout DTR), I developed a deep appreciation for
          human-computer interaction––bridging that gap between the technical
          and the human. I realized that figuring out how people think and
          behave is both fun and necessary if you want to build solutions that
          resonate with real users.
        </p>
      </div>
      <br />
      <h2>The Artist</h2>
      <div className="left-border">
        <p>
          Beyond the technical, I spend most of my time making music and
          pottery. I&apos;m a singer and pianist, but favorite part of music is
          arranging it. Drilling deep on the details of specific chords and
          voicings, but also drawing back and architecting the rise and fall of
          a song. Being creative and subverting expectations. And always
          thinking about the people I&apos;m arranging for. What are their
          strengths and weaknesses as musicians and how can I craft an
          arrangement that fits the group perfectly.
        </p>{" "}
        <br />
        <p>
          As a pottery, I make functional work––I want to make things that
          people will actually use. But that’s not to say there&apos;s no room
          for artistry. Whether it&apos;s a mug with a hand-shaped base or a
          teapot shaped like a torus form, my favorite part of ceramics is
          making art and beauty an integral part of daily life.
        </p>
      </div>
      <br />
      <h2>The Generalist</h2>
      <div className="left-border">
        <p>
          What connects my work across different fields is a focus on people.
          Whether I&apos;m developing software, arranging music, or crafting
          pottery, I&apos;m driven by the desire to create experiences that
          resonate. I believe great solutions, in any domain, start with
          understanding who they&apos;re for.
        </p>
        <br />
        <p>
          I&apos;m a lifelong learner. I recieved degrees in Computer Science
          and Cognitive Science from Northwestern, but my curiosity extends to
          linguistics, neuroscience, sustainability, history, and more. I&apos;m
          always seeking to broaden my understanding of the world, and I love
          finding ways to bring that knowledge into my work to make a meaningful
          impact.
        </p>
      </div>
    </div>
  );
}
