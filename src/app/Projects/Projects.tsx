"use client";
import { useState } from "react";
import GeneralLayout from "../components/GeneralLayout";
import ProjectItem from "../components/Project";

export default function Projects() {
  const [activeProjectType, setActiveProjectType] = useState("Software");
  const [selectedProject, setSelectedProject] = useState(null); // [title, description, image, link, skills]

  const projectTypes = ["Software", "Ceramics", "Music"];
  return (
    <GeneralLayout>
      <div className="left-page top-page">
        <>
          <h1>
            <strong className="text-5xl">My Work</strong>
          </h1>
          <div className="left-border">
            <div className="flex gap-3">
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
        <div className="overflow-y-scroll p-2">
          {activeProjectType === "Software" ? (
            <>
              <ProjectItem
                title="Maddox Image Annotator"
                description="This is a bare-bones demo of different frameworks for image annotatition that I developed for Maddox AI last summer."
                image="/images/maddox-logo.webp"
                link="https://imageannotator.netlify.app/"
                skills={["React", "Typescript", "Next", "Konva", "D3", "visx"]}
              />
              <ProjectItem
                title="Adamah Ceramics"
                description={
                  "This is my ceramics portfolio! In addition to my love of tech, i'm a semi-professional potter and I love to make functional ceramics."
                }
                image="/images/adamah.jpeg"
                link="https://adamah-portfolio.vercel.app/"
                skills={["React.js", "Next"]}
              />
              <ProjectItem
                title="Tetris"
                description="This is a fully functional Tetris clone I built using C++."
                image="/images/tetris.png"
                link="https://github.com/lev-rosenberg/Tetrix"
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
              <ProjectItem
                title="Design Your Delta"
                link="https://delta-lab-8ec06.firebaseapp.com/"
                description="This was a commission from a law-professor at NU. It's a web-app specifically crafted for law students, helping them pinpoint areas for academic and professional development!"
                skills={["React", "D3", "Firebase"]}
                image="/images/design_your_delta.webp"
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
                skills={["React.js", "Next"]}
              />
            </>
          ) : (
            <>
              <ProjectItem
                title="Set Fire to the Rain - Adele"
                description="Contact me if you're interested in purchasing the sheet music!"
                image="/images/set_fire.png"
                youtube="https://www.youtube.com/watch?v=XXo61gB8exc"
                spotify="https://open.spotify.com/track/78PwFGa5ebybvV0t0UKWLG?si=6bcd714d981b4689"
                skills={["Key: F", "SSATBB", "$40"]}
              />
              <ProjectItem
                title="From Fire - Perta"
                description="Contact me if you're interested in purchasing the sheet music!"
                image="/images/set_fire.png"
                youtube="https://www.youtube.com/watch?v=Ll2AHvU0jYk"
                spotify="https://open.spotify.com/track/7lVUhyhkeprWlAk8J6dtgK?si=a674186a02144b5d"
                skills={["Key: F", "SSATBB", "$40"]}
              />
              <ProjectItem
                title="Jealous - Labrinth"
                description="Contact me if you're interested in purchasing the sheet music!"
                image="/images/skyfall.png"
                youtube="https://www.youtube.com/watch?v=rmHXZfTbS1g"
                skills={["Key: Db", "SSATBB", "$25"]}
              />
              <ProjectItem
                title="Forbidden Fruit - Bella Coppola"
                description="Contact me if you're interested in purchasing the sheet music!"
                image="/images/skyfall.png"
                youtube="https://www.youtube.com/watch?v=hPMFT53sJ5o"
                skills={["Key: Db", "SSATBB", "$25"]}
              />
              <ProjectItem
                title="All For Us - Labrinth"
                description="Contact me if you're interested in purchasing the sheet music!"
                image="/images/all_for_us.png"
                youtube="https://www.youtube.com/watch?v=ElP40adun7Q"
                skills={["Key: Bb", "SSATBB", "$30"]}
              />
              <ProjectItem
                title="Before I Knew You - Erez Zobary"
                description="Contact me if you're interested in purchasing the sheet music!"
                image="/images/skyfall.png"
                youtube="https://www.youtube.com/watch?v=H-Abz-Xp_cs&list=PL_SyT0gMIumA4huvVxurkFkrt-lCSGzl7&index=3"
                skills={["Key: Db", "SSATBB", "$25"]}
              />
              <ProjectItem
                title="Skyfall - Adele"
                description="Contact me if you're interested in purchasing the sheet music!"
                image="/images/skyfall.png"
                youtube="https://www.youtube.com/watch?v=xhMOcBAbqdw"
                skills={["Key: Eb", "SSATBB", "$15"]}
              />
              <ProjectItem
                title="Daniel Caesar Medley"
                description="A combination of Blessed, Get You, Best Part, and Hold me Down. Contact me if you're interested in purchasing the sheet music!"
                image="/images/daniel_caesar.png"
                youtube="https://www.youtube.com/watch?v=H-Abz-Xp_cs&list=PL_SyT0gMIumA4huvVxurkFkrt-lCSGzl7&index=3"
                skills={["Key: Db", "SSATBB", "$15"]}
              />
            </>
          )}
        </div>
      </div>
      <div className="w-full h-full right">
        <iframe src="/arr/set_fire.pdf" className="w-full h-full"></iframe>
      </div>
    </GeneralLayout>
  );
}
