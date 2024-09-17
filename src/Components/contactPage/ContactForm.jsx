import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-red-600 text-black rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-red-700">
        Have a Pizza Idea? Let’s Cook It Up Together!
      </h1>
      <p className="text-lg">
        Share your thoughts, feedback, or any special requests here.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
