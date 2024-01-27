import GeneralLayout from "../components/GeneralLayout";
import ContactForm from "../components/ContactForm";
export default function Contact() {
  return (
    <GeneralLayout>
      <div className="flex flex-col text-center items-center pb-3">
        {/* <div className="left-page center-page"> */}
        <h1>
          <strong className="text-5xl">Contact Me</strong>
        </h1>
        <div className="w-96 pb-10">
          <p>
            Interested in my work? Message me here! I&apos;ll get back to you
            ASAP.
          </p>
          <br />
          <p className="font-bold">
            I&apos;m currently looking for full time SWE roles starting in
            September 2024. If you think I&apos;d be a good fit for your
            company, please reach out!
          </p>
        </div>
        <ContactForm />
      </div>
    </GeneralLayout>
  );
}
