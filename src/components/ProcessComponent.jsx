import React from "react";
import { Link } from "react-router-dom";

const ProcessComponent = () => {
    const list = [
        {
            head: "Language",
            lists: ["Dart"]
        },
        {
            head: "IDE",
            lists: ["Android Studio", "VS Code"]
        },
        {
            head: "Packages",
            lists: ["FL Charts", "Provider", "Getx", "Http", "Intl", "Googleapis", "Firebase Messaging"]
        },
        {
            head: "Database",
            lists: ["SQLite", "Realm"]
        },
        {
            head: "Architecture",
            lists: ["BloC Pattern", "Getx"]
        },
        {
            head: "Tools",
            lists: ["Flutter SDK"]
        },
    ]


    return (
        <section className="bg-secondary sm:px-16 px-6 flex justify-center my-20 items-start font-poppins pt-14">
            <div className="xl:max-w-[1280px] lg:max-w-[1100px] md:max-w-[930px] flex flex-col relative w-full pb-10">
                <div className="text-primary w-full text-center">
                    <div className="text-3xl md:text-5xl font-medium pb-5">
                        Our iOS Application Development <span className="text-white">Process</span>
                    </div>
                    <div>
                        Our iPhone app development services follow a systematic approach that is effective over time for an iOS app.
                    </div>
                </div>
                <div className="mt-12 z-[11] relative grid grid-cols-1 md:grid-cols-5">
                    <div className="resline my-auto absolute md:w-full xl:w-[1280px] md:left-[0%] left-[23px] h-[1030px] w-1 md:h-1 border-l-2 md:border-b-2 border-primary z-[9]"></div>
                    <div className="flex pb-5 flex-row md:flex-col md:gap-0 gap-8 md:items-center z-10">
                        <div className="mb-11">
                            <h1 className="text-lg w-[50px] text-center font-semibold rounded-full p-2 border-[3px] border-primary bg-white text-primary">
                                01
                            </h1>
                        </div>
                        <div className="flex md:text-center flex-col items-start md:items-center">
                            <img src="https://cdn.moontechnolabs.com/live/images/images_svg/android_process_image_1.svg" alt="" />
                            <h1 className="my-4 text-lg md:min-w-max font-semibold">
                                Requirement Gathering
                            </h1>
                            <ul className="text-sm">
                                <li>
                                    Define the Purpose
                                </li>
                                <li>
                                    Research & Analysis
                                </li>
                                <li>
                                    Identify Features
                                </li>
                                <li>
                                    Technical Requirements
                                </li>
                                <li>
                                    Budget and Timeline
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex pb-5 flex-row md:flex-col md:gap-0 gap-8 md:items-center z-10">
                        <div className="mb-11">
                            <h1 className="text-lg w-[50px] text-center font-semibold rounded-full p-2 border-[3px] border-primary bg-white text-primary">
                                02
                            </h1>
                        </div>
                        <div className="flex md:text-center flex-col items-start md:items-center">
                            <img src="https://cdn.moontechnolabs.com/live/images/images_svg/android_process_image_1.svg" alt="" />
                            <h1 className="my-4 text-lg md:min-w-max font-semibold">
                                Design
                            </h1>
                            <ul className="text-sm">
                                <li>
                                    Define the Purpose
                                </li>
                                <li>
                                    Research & Analysis
                                </li>
                                <li>
                                    Identify Features
                                </li>
                                <li>
                                    Technical Requirements
                                </li>
                                <li>
                                    Budget and Timeline
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex pb-5 flex-row md:flex-col md:gap-0 gap-8 md:items-center z-10">
                        <div className="mb-11">
                            <h1 className="text-lg w-[50px] text-center font-semibold rounded-full p-2 border-[3px] border-primary bg-white text-primary">
                                03
                            </h1>
                        </div>
                        <div className="flex md:text-center flex-col items-start md:items-center">
                            <img src="https://cdn.moontechnolabs.com/live/images/images_svg/android_process_image_1.svg" alt="" />
                            <h1 className="my-4 text-lg md:min-w-max font-semibold">
                                Development
                            </h1>
                            <ul className="text-sm">
                                <li>
                                    Define the Purpose
                                </li>
                                <li>
                                    Research & Analysis
                                </li>
                                <li>
                                    Identify Features
                                </li>
                                <li>
                                    Technical Requirements
                                </li>
                                <li>
                                    Budget and Timeline
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex pb-5 flex-row md:flex-col md:gap-0 gap-8 md:items-center z-10">
                        <div className="mb-11">
                            <h1 className="text-lg w-[50px] text-center font-semibold rounded-full p-2 border-[3px] border-primary bg-white text-primary">
                                04
                            </h1>
                        </div>
                        <div className="flex md:text-center flex-col items-start md:items-center">
                            <img src="https://cdn.moontechnolabs.com/live/images/images_svg/android_process_image_1.svg" alt="" />
                            <h1 className="my-4 text-lg md:min-w-max font-semibold">
                                Quality Assurance
                            </h1>
                            <ul className="text-sm">
                                <li>
                                    Define the Purpose
                                </li>
                                <li>
                                    Research & Analysis
                                </li>
                                <li>
                                    Identify Features
                                </li>
                                <li>
                                    Technical Requirements
                                </li>
                                <li>
                                    Budget and Timeline
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex pb-5 flex-row md:flex-col md:gap-0 gap-8 md:items-center z-10">
                        <div className="mb-11">
                            <h1 className="text-lg w-[50px] text-center font-semibold rounded-full p-2 border-[3px] border-primary bg-white text-primary">
                                05
                            </h1>
                        </div>
                        <div className="flex md:text-center flex-col items-start md:items-center">
                            <img src="https://cdn.moontechnolabs.com/live/images/images_svg/android_process_image_1.svg" alt="" />
                            <h1 className="my-4 text-lg md:min-w-max font-semibold">
                                Delivery & Support
                            </h1>
                            <ul className="text-sm">
                                <li>
                                    Define the Purpose
                                </li>
                                <li>
                                    Research & Analysis
                                </li>
                                <li>
                                    Identify Features
                                </li>
                                <li>
                                    Technical Requirements
                                </li>
                                <li>
                                    Budget and Timeline
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessComponent;