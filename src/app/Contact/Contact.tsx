import GeneralLayout from "../components/GeneralLayout";
import ContactForm from "../components/ContactForm";
export default function Contact() {
  return (
    <GeneralLayout>
      <div className="flex flex-col h-full items-center justify start">
        <ContactForm />
      </div>
    </GeneralLayout>
  );
}
