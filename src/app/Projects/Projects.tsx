import GeneralLayout from "../components/GeneralLayout";
import ProjectItem from "../components/Project";
export default function Projects() {
  return (
    <GeneralLayout>
      <div className="flex flex-col h-full items-center justify start">
        <ProjectItem
          title={"Adamah Ceramics"}
          description={
            "This is my ceramics portfolio! In addition to my love of tech, i'm a semi professional potter and I love to make functional ceramics."
          }
          image={"/images/adamah.jpeg"}
          link={"https://adamah-portfolio.vercel.app/"}
          skills={["React.js", "Next", "CSS"]}
        />
      </div>
    </GeneralLayout>
  );
}
