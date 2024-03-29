import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Foot() {
  return (
    <footer className="border-t pt-3">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/lev-rosenberg-72756a211/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn as IconProp} size="xs" />
          </a>
        </li>
        <li>
          <a href="https://github.com/lev-rosenberg" target="_blank">
            <FontAwesomeIcon icon={faGithub as IconProp} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/adamah_ceramics/" target="_blank">
            <FontAwesomeIcon icon={faInstagram as IconProp} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
