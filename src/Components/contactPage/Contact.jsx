import React from "react";
import { ContactDetails } from "./ContactDetails";
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <div>
      <div className="mx-auto my-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-black lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>

      {/* Reviews from Other Customers */}
      {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-yellow-50 text-black"> 
        <h1 className="text-center text-4xl font-semibold mt-8">
          Customer Reviews
        </h1>
        <ReviewSlider />
      </div> */}
    </div>
  )
}
