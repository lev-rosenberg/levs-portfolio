"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

// from the formspree.io website
export default function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [state, handleSubmit] = useForm("xkndorjr");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  function handleFormSubmission(e: React.FormEvent<HTMLFormElement>) {
    // e.preventDefault();
    setSubmitted(true);
    console.log("form submission");
    const form = document.getElementById("contact-form") as HTMLFormElement;
    form.reset();
    handleSubmit(e);
  }
  return (
    <div>
      {!submitted ? (
        <form id="contact-form" onSubmit={handleFormSubmission}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      ) : (
        <p>Thanks for reaching out! I&apos;ll get back to you ASAP.</p>
      )}
    </div>
  );
}
