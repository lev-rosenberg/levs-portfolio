import Image from "next/image";

export default function Me() {
  return (
    <div className="silouette">
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
