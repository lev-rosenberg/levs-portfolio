"use client";
import ContactForm from "../components/ContactForm";
import { useContext } from "react";
import { Context } from "../context";
export default function Contact() {
  const { state } = useContext(Context);
  return (
    <div className="contact-page" style={{ fontSize: `${state.fontSize}px` }}>
      <h1>
        <strong className="text-5xl">Let&apos;s chat!</strong>
      </h1>
      <div className="bottom-border">
        <p>
          Interested in working with me? Reach out at{" "}
          <a href="mailto:lev.rosenberg@gmail.com" className="underline">
            lev.rosenberg@gmail.com
          </a>{" "}
          or through the form below. I&apos;ll get back to you ASAP.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
