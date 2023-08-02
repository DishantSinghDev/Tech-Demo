import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "./model.css";
import tel from "../assets/tel.svg"
import Email from "../assets/email.svg"
import skype from "../assets/skype.svg"
import Caller from "../assets/call.svg"
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function ConnectModel({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-5xl">
                <form className="w-full flex flex-col justify-between sm:flex-row">
                 <div className="w-full md:w-[55%] p-6">
                 <button onClick={setOpen} className="md:hidden relative top-[-11px] right-[-10px] float-right">X</button>

                  <div className="input-field " >
                    <h1 className="font-bold m-2 text-2xl ">Let’s discuss more about your project</h1>
                    <div className="input-fields p-1 ">
                      <div className="flex flex-col md:flex-row gap-4 justify-between">
                      <div className="input-box w-full relative py-3  ">
                        <input
                          type="text"
                          required
                          className="  border-solid border border-gray-200 w-full p-1 box-border rounded text-sm "
                        />
                        <span className="absolute left-1 p-1 pointer-events-none duration-700 ease-in-out ">
                          Name*
                        </span>
                      </div>
                      <div className="input-box w-full relative  py-3 ">
                        <input
                          type="email"
                          required
                          className="  border-solid border border-gray-200 w-full p-1 box-border rounded text-sm "
                        />
                        <span className="absolute left-1 p-1 pointer-events-none duration-700 ease-in-out ">
                          Email*
                        </span>
                      </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 justify-between">
                      <div className="input-box w-full relative  py-3 ">
                        <input
                          type="tel"
                          required
                          className="  border-solid border border-gray-200 w-full p-1  box-border rounded text-sm "
                        />
                        <span className="absolute left-1 p-1 pointer-events-none duration-700 ease-in-out ">
                          Phone
                        </span>
                      </div>
                      <div className="input-box w-full relative  py-3 ">
                        <input
                          type="tel"
                          required
                          className="  border-solid border border-gray-200 w-full p-1 box-border rounded text-sm "
                        />
                        <span className="absolute left-1 p-1 pointer-events-none duration-700 ease-in-out ">
                          Skype/IM
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
                        <input
                          type="tel"
                          required
                          className="  border-solid border border-gray-200 w-full p-1 box-border rounded text-sm "
                        />
                        <span className="absolute left-1 p-1 pointer-events-none duration-700 ease-in-out ">
                          Browse File </span>
                      </div>
                      </div>
                      <div className="input-box  relative py-3 ">
                        <textarea


                          type=""
                          required
                          className="  border-solid border border-gray-200 w-full p-1 box-border rounded text-sm "
                        />
                        <span className="absolute left-1 p-1 pointer-events-none duration-700 ease-in-out ">
                          Brief your Requirement
                        </span>
                      </div>  
                      <div className="my-4">
                        <button className=" btn p-2 w-[110px] rounded-3xl  text-sm" >Submit </button>
                      </div>
                    </div>
                    <div className="adress-area w-full flex my-4 flex-col gap-6  md:flex-row " >
                        <div className="adress-area-1 pt-2  w-full mx-2 ">
                            <div className="flex">
                            <img src="https://cdn.moontechnolabs.com/live/images/ind_flag.svg" className=" w-[70px] p-1 pr-3" />
                        <span className=" text-sm font-bold pt-2">INDIA</span>
                            </div>
                        <p className="text-sm p-1">C-105,Ganesh Meridian,</p>
                        <p className="text-sm p-1 w-full">S.G.Hwy, Ahmedabad, GJ 380060</p>
                        <div className=" flex flex-row w-full ">
                        <a href="tel:+91 972-605-5109 " className="font-bold text-sm mr-1" >+91 972-605-5109</a>
                        <img src={Caller} className="w-4 mx-1"/>
                        <img src="https://cdn.moontechnolabs.com/live/images/images_svg/whatsapp.svg" className="mx-1" />
                        
                        </div>

                       </div>
                       <div className="adress-area-2 pt-2 pb-2 w-full">
                       <div className="flex">
                            <img src="https://cdn.moontechnolabs.com/live/images/usa-flag.svg" className=" w-[70px] p-1 pr-3" />
                        <span className="text-sm font-bold pt-2">UNITED STATES</span>
                            </div>
                            
                        <p className="text-sm  p-1">500 N Michigan Avenue, #600,</p>
                       
                        <p className="text-sm p-1   ">Chicago IL 60611 </p>
                        <p className="text-sm pb-4 px-1 border-b-2 w-[180px]"></p>
                        <p className="text-sm  p-1 "> 150 W. 25th Street, STE 403,</p>
                        <p className="text-sm p-1 mb-4  ">New York City, NYC 10001 </p>
                        <div className=" flex flex-row w-full ">
                        <a href="tel:+91 972-605-5109 " className="text-sm font-bold mr-1" >+91 972-605-5109</a>
                        <img src={Caller} className="w-4 mx-1"/>
                        <img src="https://cdn.moontechnolabs.com/live/images/images_svg/whatsapp.svg" className="mx-1" />
                        
                        </div>
                        
                       </div>
                    </div>



                  </div>
                  </div>
                  <div className="w-full md:w-[45%] flex flex-col h-[70%]   ">
                    <div className="side-bar1 map_bg_main font-white   text-white     p-3 h-[55%] ">
                    <button onClick={setOpen} className="hidden md:block md:float-right">X</button>

                        <h1 className="m-2 pt-6">Here’s what you will get after submitting your project details:</h1>
                        <ul className="list-disc px-8 text-sm leading-[28px] pt-3 ">
                            <li>A strict <span className=" list-p text-[#ffbe5c]">non-disclosure policy.</span></li>
                            <li>Get in discuss with our experts.</li>
                            <li>Get a <span className= "list-p text-[#ffbe5c]">Free consultation.</span></li>
                            <li>Turn your idea into an exceptional app.</li>
                            <li>Suggestions on<span className=" list-p text-[#ffbe5c]">revenue models & planning</span> </li>
                            <li>No obligation proposal.</li>
                            <li>Action plan to start your project.</li>
                            <li>We respond to you within 8 hours.We respond to you <span className=" list-p text-[#ffbe5c]">within 8 hours.</span></li>
                            <li>Detailed articulate email updates <span className=" list-p text-[#ffbe5c]">within 24 hours.</span></li>
                        </ul>
                    </div>
                    <div className=" side-bar2 flex flex-col h-[30%] content-between items-center ">
                        <div className="py-1 flex "> 
                            <img src={Email}  className="w-[25px] "   />
                            <a href="mailto:sales@moontechnolabs.com"  className="px-2">Sales@moontechnolabs.com</a>
                        </div>
                        <div className="py-1 flex  justify-self-start w-[240px]">  
                        <img src={skype}  className="w-[25px] py-1 "   />
                            <a href="skype:sales@moontechnolabs?chat" className=" pl-2" >Moon Technolads</a>
                        </div>


                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
