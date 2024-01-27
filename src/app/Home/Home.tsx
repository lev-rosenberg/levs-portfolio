import GeneralLayout from "../components/GeneralLayout";
import Link from "next/link";

export default function Home() {
  return (
    <GeneralLayout>
      <div className="left-page center-page">
        <h1>
          Hey! I&apos;m <strong>Lev Rosenberg</strong>
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
          <br />
          {/* <p>
            I’m currently looking for a full time software engineering role
            starting in September 2024. If you think I&apos;d be a good fit for
            your company, please reach out!
          </p> */}
          {/* <br /> */}
          <p>
            Check out what I&apos;ve been working on{" "}
            <Link href="/Projects">
              <button>here</button>
            </Link>
          </p>
        </div>
      </div>
    </GeneralLayout>
  );
}
