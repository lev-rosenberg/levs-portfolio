"use client";
import { useState, useContext } from "react";
import { Context } from "../context";
import ProjectItem from "../components/ProjectItem";
import WebsitePreview from "../components/WebsitePreview";
export default function Projects() {
  const [activeProjectType, setActiveProjectType] = useState("Software");

  const projectTypes = ["Software", "Music", "Ceramics", "UX Research"];
  const { state } = useContext(Context);

  return (
    <div className="flex h-full">
      <div
        className="left-page top-page"
        style={{ fontSize: `${state.fontSize}px` }}
      >
        <>
          <h1>
            <strong className="text-5xl">My Work</strong>
          </h1>
          <div className="left-border">
            <div className="flex gap-3 overflow-scroll">
              {projectTypes.map((projectType, i) => (
                <h2
                  key={i}
                  className={`p-underline ${
                    activeProjectType === projectType ? "active" : ""
                  }`}
                  onClick={() => setActiveProjectType(projectType)}
                >
                  {projectType}
                </h2>
              ))}
            </div>
          </div>
        </>
        <div className="p-2">
          {activeProjectType === "Software" ? (
            <>
              <ProjectItem
                title="Carbon Footprint Tracker"
                description="This is a cloud-based web-app that I developed to help myself track my carbon footprint and learn about the environmental impact of my daily choices."
                link="https://carbontracker.vercel.app/"
                image="/images/footprint.png"
                skills={[
                  "React",
                  "Next",
                  "AWS Lambda",
                  "AWS RDS",
                  "ClimatIQ API",
                ]}
              />
              <ProjectItem
                title="Angel Shot"
                description="My hackathon team and I developed this web-app to help people feel safe in uncomfortable situations by initiating a real time 'call' with an AI."
                link="https://angel-shot.netlify.app/"
                image="/images/angel-shot.png"
                skills={[
                  "React",
                  "Amazon Transcribe",
                  "Mantine",
                  "OpenAI",
                  "Vite",
                  "MediaStream API",
                ]}
              />
              <ProjectItem
                title="Split Pay"
                description="This is a full stack mobile web-app I developed for a class project. It makes it easy to split bills with your friends and keep track of who owes who."
                link="https://github.com/lev-rosenberg/split-pay-app"
                image="/images/split_bill.webp"
                notViewable
                skills={["React", "Express.js", "PostgreSQL", "Web-Sockets"]}
              />
              <ProjectItem
                title="Adamah Ceramics"
                description={
                  "This is my ceramics portfolio! In addition to my love of tech, i'm a semi-professional potter and I love to make functional ceramics."
                }
                image="/images/adamah.jpeg"
                link="https://adamah-portfolio.vercel.app/"
                skills={["React", "Next"]}
              />
              {/* <ProjectItem
                title="Maddox Image Annotator"
                description="This is a bare-bones demo of different frameworks for image annotatition that I developed for Maddox AI last summer."
                image="/images/maddox-logo.webp"
                link="https://imageannotator.netlify.app/"
                skills={["React", "Typescript", "Next", "Konva", "D3", "visx"]}
              /> */}
              <ProjectItem
                title="Design Your Delta"
                link="https://delta-lab-8ec06.firebaseapp.com/"
                description="This was a commission from a law-professor at NU. It's a web-app specifically crafted for law students, helping them pinpoint areas for academic and professional development!"
                skills={["React", "D3", "Firebase"]}
                image="/images/design_your_delta.webp"
              />
              <ProjectItem
                title="Tetris"
                description="This is a fully functional Tetris clone I built using C++."
                image="/images/tetris.png"
                link="https://github.com/lev-rosenberg/Tetrix"
                notViewable={true}
                skills={["C++", "OOP"]}
              />
              <ProjectItem
                title="Knowledge Maps"
                link="https://km-rale.netlify.app/"
                description="This is a functional prototype I co-developed as a student researcher in Delta Lab's DTR, aimed at providing CSS education to beginner-intermediate frontend developers."
                skills={["React", "CSS", "HCI Research"]}
                image="/images/delta.png"
              />
              <ProjectItem
                title="NU Art"
                link="https://artnu.vercel.app/ArtNU/Home"
                description="Here's a prototype for a social media and commission service for student artists at Northwestern that I developed along with a team of 3 other students."
                skills={["React", "Firebase"]}
                image="/images/nuart.webp"
              />
            </>
          ) : activeProjectType === "Ceramics" ? (
            <>
              <ProjectItem
                title="Adamah Ceramics"
                description={
                  "This is my ceramics portfolio! In addition to my love of tech, i'm a semi professional potter and I love to make functional ceramics."
                }
                image="/images/adamah.jpeg"
                link="https://adamah-portfolio.vercel.app/"
                skills={["React", "Next"]}
              />
            </>
          ) : activeProjectType === "Music" ? (
            <>
              <ProjectItem
                title="Set Fire to the Rain - Adele"
                description=""
                image="/images/set_fire.png"
                youtube="https://www.youtube.com/watch?v=XXo61gB8exc"
                spotify="https://open.spotify.com/track/78PwFGa5ebybvV0t0UKWLG?si=6bcd714d981b4689"
                skills={["Key: F", "SSATBB", "$40"]}
                pdf="/arr/set_fire.pdf"
              />
              <ProjectItem
                title="From Fire - Perta"
                description=""
                image="/images/set_fire.png"
                youtube="https://www.youtube.com/watch?v=Ll2AHvU0jYk"
                spotify="https://open.spotify.com/track/7lVUhyhkeprWlAk8J6dtgK?si=a674186a02144b5d"
                skills={["Key: F", "SSATBB", "$40"]}
                pdf="/arr/from_fire.pdf"
              />
              <ProjectItem
                title="Jealous - Labrinth"
                description=""
                image="/images/skyfall.png"
                youtube="https://www.youtube.com/watch?v=rmHXZfTbS1g"
                skills={["Key: Db", "SSATBB", "$25"]}
                pdf="/arr/jealous.pdf"
              />
              <ProjectItem
                title="Forbidden Fruit - Bella Coppola"
                description=""
                image="/images/skyfall.png"
                youtube="https://www.youtube.com/watch?v=hPMFT53sJ5o"
                skills={["Key: Db", "SSATBB", "$25"]}
                pdf="/arr/forbidden_fruit.pdf"
              />
              <ProjectItem
                title="All For Us - Labrinth"
                description=""
                image="/images/all_for_us.png"
                youtube="https://www.youtube.com/watch?v=ElP40adun7Q"
                skills={["Key: Bb", "SSATBB", "$30"]}
                pdf="/arr/all_for_us.pdf"
              />
              <ProjectItem
                title="Before I Knew You - Erez Zobary"
                description=""
                image="/images/skyfall.png"
                youtube="https://www.youtube.com/watch?v=H-Abz-Xp_cs&list=PL_SyT0gMIumA4huvVxurkFkrt-lCSGzl7&index=3"
                skills={["Key: Db", "SSATBB", "$25"]}
                pdf="/arr/before_i_knew_you.pdf"
              />
              <ProjectItem
                title="Skyfall - Adele"
                description=""
                image="/images/skyfall.png"
                youtube="https://www.youtube.com/watch?v=xhMOcBAbqdw"
                skills={["Key: Eb", "SSATBB", "$15"]}
                pdf="/arr/skyfall.pdf"
              />
              <ProjectItem
                title="Daniel Caesar Medley"
                description="A combination of Blessed, Get You, Best Part, and Hold me Down"
                image="/images/daniel_caesar.png"
                youtube="https://www.youtube.com/watch?v=H-Abz-Xp_cs&list=PL_SyT0gMIumA4huvVxurkFkrt-lCSGzl7&index=3"
                skills={["Key: Db", "SSATBB", "$15"]}
                pdf="/arr/daniel_caesar_medley.pdf"
              />
            </>
          ) : (
            <>
              <ProjectItem
                title="Knowledge Maps"
                description="Developed during my time in Delta Lab's DTR, this project introduces a UX-driven tool to enhance CSS learning. Based on HCI research, the tool guides beginner-intermediate developers through structured analysis of professional websites to build expert-level intuition."
                image="/images/delta.png"
                skills={["User Testing", "HCI Research", "Agile Methodology"]}
                pdf="/writeups/km_writeup.pdf"
              />
              <ProjectItem
                title="TunePad Research Study"
                description="This project applies Contextual Design principles to optimize TunePad, a dual-purpose platform for music and coding education. Through UX research and user interviews, it explores how to enhance the tool's effectiveness for both novice programmers and musicians, proposing test-driven design improvements. Created during an independant study at NU."
                image="https://tunepad.com/assets/images/landing/logo-blue.svg"
                skills={[
                  "Contextual Design",
                  "UX Research",
                  "User-Centered Design",
                ]}
                pdf="/writeups/tunepad_ux_research.pdf"
              />
            </>
          )}
        </div>
      </div>
      <WebsitePreview />
    </div>
  );
}
