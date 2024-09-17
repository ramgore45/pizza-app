import React from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/logos/pizzalogo.png";

// Icons
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// Footer Links
const CompanyLinks = ["About Us", "Careers", "Franchise Opportunities"];
const MenuLinks = ["Pizza Menu", "Special Offers", "Online Ordering", "Nutritional Info"];
const ContactLinks = ["Contact Us", "Find a Store", "Catering"];
const LegalLinks = ["Privacy Policy", "Cookie Policy", "Terms of Service"];

export const Footer = () => { 
  return (
    <div className="bg-gray-800">
      <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between w-11/12 max-w-screen-xl text-gray-400 leading-6 mx-auto py-14">
        
        <div className="lg:w-1/3 self-center flex pl-3 lg:pl-5">
            <img src={Logo} alt="Pizza Logo" className="object-contain w-40" />
        </div>
        {/* Section 1 */}
        <div className="border-b w-full flex flex-wrap lg:flex-nowrap gap-y-5 flex-row pb-5 border-gray-700">
          <div className="w-1/2 lg:w-1/3 flex flex-col gap-3 lg:border-r lg:border-gray-700 pl-3 lg:pl-5">
            <h1 className="text-white font-semibold text-lg">Pizza Place</h1>
            <div className="flex flex-col gap-2">
              {CompanyLinks.map((link, index) => (
                <div key={index} className="text-sm cursor-pointer hover:text-white transition-all duration-200">
                  <Link to={link.split(" ").join("-").toLowerCase()}>{link}</Link>
                </div>
              ))}
            </div>
            <div className=" flex gap-3 text-xl mt-4">
              <FaFacebook className="cursor-pointer hover:text-white" />
              <FaInstagram className="cursor-pointer hover:text-white" />
              <FaTwitter className="cursor-pointer hover:text-white" />
              <FaYoutube className="cursor-pointer hover:text-white" />
            </div>
          </div>

          <div className="w-1/2 lg:w-1/3 flex flex-col gap-3 lg:border-r lg:border-gray-700 pl-3 lg:pl-5">
            <h1 className="text-white font-semibold text-lg">Menu</h1>
            <div className="flex flex-col gap-2 mt-2">
              {MenuLinks.map((link, index) => (
                <div key={index} className="text-sm cursor-pointer hover:text-white transition-all duration-200">
                  <Link to={link.split(" ").join("-").toLowerCase()}>{link}</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="w-1/2 lg:w-1/3 flex flex-col gap-3 lg:border-r lg:border-gray-700 pl-3 lg:pl-5">
            <h1 className="text-white font-semibold text-lg">Contact</h1>
            <div className="flex flex-col gap-2 mt-2">
              {ContactLinks.map((link, index) => (
                <div key={index} className="text-sm cursor-pointer hover:text-white transition-all duration-200">
                  <Link to={link.split(" ").join("-").toLowerCase()}>{link}</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:gap-6 w-1/2 lg:w-auto">
            {LegalLinks.map((link, index) => (
              <div
                key={index}
                className={`text-sm cursor-pointer hover:text-white transition-all duration-200 ${index < LegalLinks.length - 1 ? 'pr-3' : ''}`}
              >
                <Link to={link.split(" ").join("-").toLowerCase()}>{link}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 w-full">
          <div className="text-center text-gray-50 text-sm m-4 lg:mt-0">
            Made with ❤️ by Pizza Place © 2024
          </div>
      </div>
    </div>
  );
};
