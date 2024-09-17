import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Order Online",
    description: "Our team is ready to take your order anytime.",
    details: "order@pizza.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit Us",
    description: "Drop by for a slice of pizza and a friendly chat.",
    details: "123 Pizza Lane, Tasty Town, NY 10001",
  },
  {
    icon: "IoCall",
    heading: "Call Us",
    description: "Available daily from 10am to 10pm",
    details: "+123 456 7890",
  },
];

export const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-yellow-500 p-4 lg:p-6">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-white"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-white">
                {ele.heading}
              </h1>
            </div>
            <p className="font-medium">{ele.description}</p>
            <p className="font-semibold">{ele.details}</p>
          </div>
        );
      })}
    </div>
  );
};
