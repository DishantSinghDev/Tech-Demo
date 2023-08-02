import React, { useState } from "react";
import bag_icon from "../../src/assets/bag.svg";
import styles from "../style";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const GetAQuote = () => {
  const [value, setValue] = useState("+91")
  return (
    <section className="container py-5 ">
      <div className="flex  flex-col   md:flex-row  items-center gap-8 mb-12 text-white">

      <div className="w-full md:w-1/2 ">

<form class="w-full mx-auto p-8 bg-white text-black rounded shadow-md">
  <div className="flex flex-col md:flex-row gap-4 justify-between">
    <div className="input-box w-full relative py-3  ">
      <input
        type="text"
        required
        className="p-2  border-solid border border-gray-200 w-full p-1 box-border rounded text-sm "
      />
      <span className="absolute left-1 p-1 pointer-events-none duration-700 ease-in-out ">
        Name *
      </span>
    </div>
    <div className="input-box w-full relative  py-3 ">
      <input
        type="email"
        required
        className="p-2  border-solid border border-gray-200 w-full p-1 box-border rounded text-sm "
      />
      <span className="absolute left-1 p-1 pointer-events-none duration-700 ease-in-out ">
      Email *
      </span>
    </div>
  </div>
  <div className="flex flex-col md:flex-row gap-4 justify-between">
  <div className="input-box w-full pt-[0.95rem] pd-3 ">
  <PhoneInput
  className="border border-solid border-gray-200 px-2 rounded"
    placeholder="Enter phone number"
    value={value}
    onChange={setValue}/>

    </div>
    <div className="input-box w-full relative py-3  ">
      <input
        type="text"
        required
        className="p-2  border-solid border border-gray-200 w-full p-1 box-border rounded text-sm "
      />
      <span className="absolute left-1 p-1 pointer-events-none duration-700 ease-in-out ">
        Enter your skype id
      </span>
    </div>
   
  </div>
  <div className="flex flex-col md:flex-row gap-4 justify-between">
  <div className="input-box w-full relative py-3 ">
              <select className=" border-solid border border-gray-200 w-full  box-border rounded text-sm p-1">
                <option  value=" ">Select Approx Budget*</option>
                <option  value=" ">Less then $10,000</option>
                <option  value=" ">$10,000 to $20,000</option>
                <option  value=" ">$20,000 to $50,000</option>
                <option  value=" ">$50,000 and above</option>
              </select>
            </div>
            <div className="input-box w-full relative py-3 ">
              <select className=" border-solid border border-gray-200 w-full  box-border rounded text-sm p-1">
                <option  value=" ">I prefer to </option>
                <option  value=" ">Less then $10,000</option>
                <option  value=" ">$10,000 to $20,000</option>
                <option  value=" ">$20,000 to $50,000</option>
                <option  value=" ">$50,000 and above</option>
              </select>
            </div>
  </div>
  <div className="input-box  relative py-3 ">
              <textarea
              rows={8}
                required
                className="p-2  border-solid border border-gray-200 w-full p-1 box-border rounded text-sm "
              />
              <span className="absolute left-1 p-1 pointer-events-none duration-700 ease-in-out ">
                Messsage
              </span>
            </div>
  <div class="flex justify-end">
    <button
      class="px-12 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md text-white shadow-cla-blue rounded-3xl  focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Send
    </button>
  </div>
</form>

</div>

<div className="md:w-1/3  text-left">
    <h1>Project Inquiry</h1>
<div className="flex flex-col md:flex-row gap-8  justify-between text-white mb-28">
 <div>

    <h1>enquiry.peerbits

</h1>
<h1>enquiry@peerbits.com</h1>
 </div>
 <div>
<h1>+91 79 48000686</h1>
<h1>career@peerbits.com</h1>
</div>


  </div>
  {/* <div className="flex flex-col md:flex-row gap-8  justify-between text-white ">
 <div className="" >New Business
    <h1  >peerbits@gmail.com

</h1>

 </div>
 <div>General Enquiries
<h1>info@peerbits.com</h1>

</div>


  </div> */}
</div>
       
      </div>

    </section>
  );
};

export default GetAQuote;
