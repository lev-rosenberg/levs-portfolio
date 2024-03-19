import Image from "next/image";
import { useContext } from "react";
import { Context } from "../context";

export default function Me() {
  const { state } = useContext(Context);
  const visible = state.project.projectUrl !== null ? "hidden" : "visible";

  return (
    <div className={`silouette ${visible}`}>
      <Image
        src="/images/silouetteWithLabels.png"
        alt="Picture of the author"
        fill={true}
        sizes="(max-width: 768px) 50vw"
        priority={true}
      />
    </div>
  );
}
