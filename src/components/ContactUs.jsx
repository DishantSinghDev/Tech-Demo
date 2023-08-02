import React from "react";
import { useState } from 'react';
import CountrySelector from "./CountryCode";


const ContactUs = ({ className }) => {
    const [userName, setUserName] = useState('');
    const [nameError, setNameError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userBudget, setUserBudget] = useState('');
    const [userMobile, setUserMobile] = useState('');
    const [userSkype, setUserSkype] = useState('');
    const [userProff, setUserProff] = useState('');
    const [emailError, setEmailError] = useState('');
    const [userMess, setUserMess] = useState('');
    const [messError, setMessError] = useState('');
    const [sent, setSent] = useState('');
    const [country, setCountry] = useState('India');
    const [isNameInputFocused, setIsNameInputFocused] = useState(false);
    const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
    const [isSkypeInputFocused, setIsSkypeInputFocused] = useState(false);
    const [isBudgetInputFocused, setIsBudgetInputFocused] = useState(false);
    const [isProffInputFocused, setIsProffInputFocused] = useState(false);
    const [isMessInputFocused, setIsMessInputFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // State for loader
    // For User Name

    const handleNameChange = (event) => {
        setUserName(event.target.value);
        setNameError('');
    };


    const handleNameBlur = () => {
        if (userName.trim() === '') {
            setNameError('Name is required');
        }
    };

    // For User Email

    const handleEmailChange = (event) => {
        setUserEmail(event.target.value);
        setEmailError('');
    };

    const handleBudgetChange = (event) => {
        setUserBudget(event.target.value);
    };

    const handleProffChange = (event) => {
        setUserProff(event.target.value);
    };

    const handleSkypeChange = (event) => {
        setUserSkype(event.target.value);
    };


    const handleEmailBlur = () => {
        if (userEmail.trim() === '') {
            setEmailError('Email is required');
        }
    };

    // For User Message

    const handleMessChange = (event) => {
        setUserMess(event.target.value);
        setMessError('');
    };


    const handleMessBlur = () => {
        if (userMess.trim() === '') {
            setMessError('Message is required');
        }
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (isLoading) return; // Prevent multiple submissions

        setIsLoading(true); // Enable loader

        // Prepare the request body data
        const requestBody = {
            Username: userName,
            Useremail: userEmail,
            Usermobile: userMobile,
            Usercountry: country,
            Userprojectbudget: userBudget,
            Userprojectinformation: userProff,
            Service: userMess,
        };

        try {
            // Make the API request
            const response = await fetch(
                "https://yourapi.com/contactus/data",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            if (response.ok) {
                // Request succeeded, do something with the response
                setSent("Successfully Sent!");
            } else {
                // Request failed, handle the error
                setSent("Oops failed to send!");
            }
        } catch (error) {
            console.error(
                "An error occurred while submitting the contact form:",
                error
            );
        }
        setIsLoading(false); // Disable loader after API request completes
    };

    const handleCountryName = (countryName) => {
        setCountry(countryName);
    };

    const handleMobile = (number) => {
        setUserMobile(number);
    };

    return (
        <div className={` font-poppins w-[100%] flex flex-col md:flex-row md:w-[100%]`}>
            <div className={`${className} w-[100%]  bg-white text-[#51555c] p-4 sm:p-12`} >
                <div className="font-thin flex flex-col w-[100%] ">
                    <form onSubmit={handleOnSubmit}>
                        <div className="flex flex-col md:space-x-4 md:flex-row">
                            <div className="flex flex-col mb-10 md:w-1/2">
                                <label className="text-gray-500 py-2 text-base">Your Name *</label>
                                <input
                                    className={`focus:outline-none border-b-2 py-2 w-full ${isNameInputFocused ? 'border-green-400 border-b-2 transition-colors duration-200' : 'border-b-2 transition-colors duration-200'}`}
                                    placeholder="Enter your name *"
                                    type="text"
                                    name="Username"
                                    value={userName}
                                    onChange={handleNameChange}
                                    onFocus={() => {
                                        setIsNameInputFocused(true);
                                    }}
                                    onBlur={() => {
                                        setIsNameInputFocused(false);
                                        handleNameBlur();
                                    }}
                                    required
                                />
                                {nameError && <p className="text-red-400 py-1 text-sm">{nameError}</p>}
                            </div>
                            <div className="flex flex-col md:w-1/2">
                                <label className="text-gray-500 py-2 text-base">Your Email *</label>
                                <input
                                    className={`focus:outline-none border-b-2 py-2 w-full ${isEmailInputFocused ? 'border-green-400 border-b-2 transition-colors duration-200' : 'border-b-2 transition-colors duration-200'}`}
                                    placeholder="Enter your Email Address *"
                                    type="email"
                                    name="Useremail"
                                    value={userEmail}
                                    onChange={handleEmailChange}
                                    onFocus={() => {
                                        setIsEmailInputFocused(true);
                                    }}
                                    onBlur={() => {
                                        setIsEmailInputFocused(false);
                                        handleEmailBlur();
                                    }}
                                    required
                                />
                                {emailError && <p className="text-red-400 py-1 text-sm">{emailError}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col md:space-x-4 md:flex-row">
                            <div className="flex flex-col mb-10 md:w-1/2">
                                <label className="text-gray-500 py-2 text-base">Your Phone *</label>
                                <CountrySelector countryName={handleCountryName} onChange={handleMobile} />
                            </div>
                            <div className="flex flex-col md:w-1/2">
                                <label className="text-gray-500 py-2 text-base">Skype</label>
                                <input
                                    className={`focus:outline-none border-b-2 py-2 w-full ${isSkypeInputFocused ? 'border-green-400 border-b-2 transition-colors duration-200' : 'border-b-2 transition-colors duration-200'}`}
                                    placeholder="Enter your Skype id *"
                                    type="tel"
                                    onFocus={() => {
                                        setIsSkypeInputFocused(true);
                                    }}
                                    onBlur={() => {
                                        setIsSkypeInputFocused(false);
                                    }}
                                    value={userSkype}
                                    onChange={handleSkypeChange}
                                />
                            </div>
                        </div>


                        <div className="flex flex-col md:space-x-4 md:flex-row">
                            <div className="flex flex-col mb-10 md:w-1/2">
                                <label className="py-2 text-gray-500">Budget</label>
                                <select
                                    required
                                    name="Budget"
                                    onFocus={() => {
                                        setIsBudgetInputFocused(true);
                                    }}
                                    onBlur={() => {
                                        setIsBudgetInputFocused(false);
                                    }}
                                    onChange={handleBudgetChange}
                                    value={userBudget}
                                    className={`focus:outline-none bg-transparent border-b-2 py-1 ${isBudgetInputFocused ? 'border-green-400 border-b-2 transition-colors duration-200' : 'border-b-2 transition-colors duration-200'} `}
                                >
                                    <option value="none">Budget</option>
                                    <option value="Below 10K">Below 10K</option>
                                    <option value="10k-25k">10k-25k</option>
                                    <option value="25k-50k">25k-50k</option>
                                    <option value="50k-100k">50k-100k</option>
                                    <option value="100k and more">100k and more</option>
                                </select>
                            </div>

                            <div className="flex flex-col md:w-1/2">
                                <label className="py-2 text-gray-500">I prefer to</label>
                                <select
                                    onFocus={() => {
                                        setIsProffInputFocused(true);
                                    }}
                                    onBlur={() => {
                                        setIsProffInputFocused(false);
                                    }}
                                    onChange={handleProffChange}
                                    value={userProff}
                                    className={`focus:outline-none bg-transparent w-full border-b-2 py-1 ${isProffInputFocused ? 'border-green-400 border-b-2 transition-colors duration-200' : 'border-b-2 transition-colors duration-200'} `}
                                >
                                    <option value="none">I prefer to</option>
                                    <option value="Software Developer">Software Developer</option>
                                    <option value="Team Extension">Team Extension</option>
                                    <option value="DevOps">DevOps</option>
                                    <option value="Product Engineering">Product Engineering</option>
                                    <option value="IoT">IoT</option>
                                    <option value="Digital Transformation">Digital Transformation</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col  mb-10">
                            <label className="py-2 " >  Message </label>
                            <textarea
                                name="description"
                                placeholder="Message *"
                                row="3"
                                className={`focus:outline-none border-b-2 py-2 ${isMessInputFocused ? 'border-green-400 border-b-2 transition-colors duration-200 ' : 'border-b-2 transition-colors duration-200'} `}
                                required
                                value={userMess}
                                onChange={handleMessChange}
                                onFocus={() => {
                                    setIsMessInputFocused(true); // Set the input focus flag
                                }}
                                onBlur={() => {
                                    setIsMessInputFocused(false);
                                    handleMessBlur() // Reset the input focus flag
                                }}
                            />
                            {messError && <p className="text-red-400 py-1 text-sm">{messError}</p>}
                        </div>
                        <div className="py-4 text-right">
                            <button className="border-2 bg-[#42b847] border-[#42b847] w-[160px] rounded-3xl text-lg p-2  text-white  hover:bg-white hover:text-[#42b847]" disabled={isLoading} >{isLoading ? "Sending..." : "Send Now"}</button>
                        </div>
                        {sent && <p className="text-red-400 w-full text-center py-1 text-sm">{sent}</p>}
                        <div className=" text-center">
                            <p className="py-2">Facing trouble in submitting form? then simply mail us on</p>
                            <a className=" text-green-400 hover:border-b-2 hover:border-green-400 " href="mailto:info@dishis.in">info@dishis.in</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
