import GeneralLayout from "../components/GeneralLayout";
import Link from "next/link";
export default function Home() {
  return (
    <GeneralLayout>
      <div className="flex flex-col justify-center h-full w-1/2 pl-16">
        <h1>
          Hey! I&apos;m <strong>Lev Rosenberg</strong>
        </h1>
        <div className="border-l-2 border-indigo-500 p-2">
          <p>
            I’m a fourth year at Northwestern studying comp sci & cog sci who
            wants to apply my technical skills towards mission-driven roles.
          </p>
          <br />
          <p>
            Check out my work
            <Link href="/Projects">
              <button>here</button>
            </Link>
          </p>
        </div>
      </div>
    </GeneralLayout>
  );
}
