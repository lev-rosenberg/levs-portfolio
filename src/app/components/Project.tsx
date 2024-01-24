import { Project } from "next/dist/build/swc";
import Image from "next/image";

type ProjectItemProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
};

export default function ProjectItem({
  title,
  description,
  image,
  link,
  skills,
}: ProjectItemProps) {
  return (
    <div className="project-item">
      <div>
        <Image src={image} alt={""} width={200} height={200} />
      </div>
      <div className="flex-flex col pl-3">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="flex">
          {skills.map((skill, i) => (
            <p className="py-1 px-3 mr-1 bg-indigo-300 rounded" key={i}>
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
