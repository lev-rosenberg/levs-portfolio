import Image from "next/image";

export default function Me() {
  return (
    <>
      <Image
        src="/images/silouette.png"
        alt="Picture of the author"
        width={300}
        height={300}
        className="right-0 bottom-0 absolute"
      />
    </>
  );
}
