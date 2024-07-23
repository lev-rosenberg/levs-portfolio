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
        <p>Reach out through the form below. I&apos;ll get back to you ASAP.</p>
      </div>
      <ContactForm />
      <div className="top-border">
        <p>
          Or, if you prefer, you can also reach me at{" "}
          <a href="mailto:lev.rosenberg@gmail.com" className="underline">
            lev.rosenberg@gmail.com
          </a>{" "}
          or{" "}
          <a href="tel:781-898-5553" className="underline">
            781-898-5553
          </a>
        </p>
      </div>
    </div>
  );
}
