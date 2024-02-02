"use client";
import ContactForm from "../components/ContactForm";
import { useContext } from "react";
import { Context } from "../context";
export default function Contact() {
  const { state } = useContext(Context);
  return (
    <div
      className="flex flex-col text-center items-center pb-3 h-full w-full overflow-y-scroll"
      style={{ fontSize: `${state.fontSize}px` }}
    >
      <h1>
        <strong className="text-5xl">Contact Me</strong>
      </h1>
      <div className="center-text">
        <p>
          Interested in my work? Message me here! I&apos;ll get back to you
          ASAP.
        </p>
        <br />
        <p className="font-bold">
          I&apos;m currently looking for full time SWE roles starting in
          September 2024. If you think I&apos;d be a good fit for your company,
          please reach out!
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
