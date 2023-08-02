import React from "react";
import bag_icon from "../../src/assets/bag.svg";
import ContactUs from "./ContactUs";
const Contact = () => {
  return (
    <section className="py-5">
      <div className="flex  flex-col   md:flex-row  items-center gap-8 mb-12 text-white">
        <div className="md:w-1/2">
          <div className=" mb-5">
            <h2 className=" text-white mb-7 text-5xl font-bold">
              Contact Us
            </h2>
            <span className="text-gradient text-5xl mb-9 font-medium">for project discussion</span>

            <p className="text-white opacity-75 mt-6  text-xl">
              Once you fill out this form, our sales representatives will
              contact you within 24 hours.
            </p>

          </div>
          <div className="grid gap-7 xs:gap-20 grid-cols-2 mx-10 xs:mx-20 mt-10 ">

            <div className="">
              <i className="">
                <img
                  loading="lazy"
                  src={bag_icon}
                  width="52"
                  height="49"
                  alt="FactsAndFiguresIcon1"
                  className=" ls-is-cached lazyloaded"
                />
              </i>
              <div className="flex-grow">
                <h3 className="h4 text-white text-2xl font-medium mb-4 mt-4">12+</h3>
                <p className="text-white opacity-75 mb-0 text-1xl font-medium">
                  Years of Experience
                </p>

              </div>
              <span className="contact-us-line"></span>
            </div>
            <div className="">
              <i className="">
                <img
                  loading="lazy"
                  src={bag_icon}
                  width="52"
                  height="49"
                  alt="FactsAndFiguresIcon1"
                  className=" ls-is-cached lazyloaded"
                />
              </i>
              <div className="flex-grow">
                <h3 className="h4 text-white text-2xl font-medium mb-4 mt-4">180+</h3>
                <p className="text-white opacity-75 mb-0 text-1xl font-medium">
                  In-House Talent
                </p>

              </div>
              <span className="contact-us-line"></span>
            </div>
            <div className="">
              <i className="">
                <img
                  loading="lazy"
                  src={bag_icon}
                  width="52"
                  height="49"
                  alt="FactsAndFiguresIcon1"
                  className=" ls-is-cached lazyloaded"
                />
              </i>
              <div className="flex-grow">
                <h3 className="h4 text-white text-2xl font-medium mb-4 mt-4">750+</h3>
                <p className="text-white opacity-75 mb-0 text-1xl font-medium">
                  Project Delivered
                </p>

              </div>
              <span className="contact-us-line"></span>
            </div>
            <div className="">
              <i className="">
                <img
                  loading="lazy"
                  src={bag_icon}
                  width="52"
                  height="49"
                  alt="FactsAndFiguresIcon1"
                  className=" ls-is-cached lazyloaded"
                />
              </i>
              <div className="flex-grow">
                <h3 className=" text-white text-2xl font-medium mb-4 mt-4">92%</h3>
                <p className="text-white opacity-75 mb-0 text-1xl font-medium">
                  Client satisfaction rate
                </p>

              </div>
              <span className="contact-us-line"></span>
            </div>
          </div>

        </div>
        <div className="w-full md:w-3/5 font-poppins">

          <ContactUs className="rounded-lg"/>

        </div>
      </div>

    </section>
  );
};

export default Contact;
