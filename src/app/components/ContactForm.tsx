"use client";

import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

// from the formspree.io website
export default function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [state, handleSubmit] = useForm("xkndorjr");

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
    }
  }, [state]);

  return (
    <div className="contact-form w-full">
      {!submitted ? (
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-full"
        >
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Let me know what you're looking for!"
          />
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
