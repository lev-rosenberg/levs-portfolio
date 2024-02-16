import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";

type ProjectItemProps = {
  title: string;
  description: string;
  image: string;
  skills: string[];
  link?: string;
  spotify?: string;
  youtube?: string;
};

export default function ProjectItem({
  title,
  description,
  image,
  link,
  skills,
  spotify,
  youtube,
}: ProjectItemProps) {
  return (
    <div className="project-item">
      <div className="project-img relative self-center w-24 h-24">
        <Image className="project-img" src={image} alt={""} fill={true} />
      </div>
      <div className="flex flex-col w-full h-full pl-3 justify-between text-wrap">
        <div>
          <div className="flex justify-between">
            <h2>{title}</h2>
            <div className="flex gap-3">
              {link && (
                <a href={link} target="_blank">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}
              {spotify && (
                <a href={spotify} target="_blank">
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
              )}
              {youtube && (
                <a href={youtube} target="_blank">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              )}
            </div>
          </div>
          <p>{description}</p>
        </div>
        <div className="flex pt-5 flex-wrap">
          {skills.map((skill, i) => (
            <p className="skill" key={i}>
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}