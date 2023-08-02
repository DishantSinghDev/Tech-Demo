import React from "react";
import { Link } from "react-router-dom";

const FlutterComponent = () => {
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
        <section className="sm:px-16 px-6 flex justify-center my-20 items-start font-poppins pt-14">
            <div className="xl:max-w-[1280px] flex flex-col w-full pb-10">
                <div className="text-white w-full text-center">
                    <div className="text-5xl font-medium pb-5">
                        Tools and Technologies That Our <span className="text-secondary">Flutter App</span> Developers Use
                    </div>
                    <div>
                        Here are the technologies and tools that our Flutter app developers use to build powerful web and mobile applications.
                    </div>
                </div>
                <div className="w-full gap-9 flex md:flex-row flex-col mt-10">
                    <div className="bg-secondary md:w-2/6 w-full rounded-xl p-5">
                        <div className="text-3xl text-primary w-full font-semibold pb-5">
                            Technology Stack
                        </div>
                        {list.map((content, index) => (
                            <div key={index} className="bg-white w-full rounded-lg mb-10">
                                <h1 className="p-3 border-b border-primary w-full text-xl font-semibold text-primary">
                                    {content.head}
                                </h1>
                                <ul className="list-[circle] text-sm grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-2  p-3 ml-5 pr-7">
                                    {Object.values(content.lists).map((items, Itemindex) => (
                                        <li key={Itemindex}>{items}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="bg-secondary w-full md:w-2/3  rounded-xl p-5">
                        <div className="text-3xl text-primary font-semibold pb-4">
                            Team Strength
                        </div>
                        <div className="pb-5 text-base">
                            <p className="pb-2">
                                The Flutter development team's strength for crafting a dynamic application differs from project to project. The Average project hours are anywhere between 200-350. Here is the common team strength for most projects.
                            </p>
                            <p className="pb-2">
                                Garner Huge Customer Retention and Impact with a Robust Flutter App For Your Business
                            </p>
                            <p className="">
                                Hire our expert Flutter developers who build killer applications by deploying the latest Flutter trends
                            </p>
                        </div>
                        <div>
                            <ul className="list-[circle] grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-2 p-3">
                                <li>
                                    1-2 Senior Flutter Developers
                                </li>
                                <li>
                                    2 Junior Flutter Developers
                                </li>
                                <li>
                                    1 UI/UX Designer
                                </li>
                                <li>
                                    1 QA Analyst or Expert
                                </li>
                                <li>
                                    Project Manager or Coordinato
                                </li>
                            </ul>
                        </div>
                        <div className="py-3">
                            <Link to="/request-quote">
                                <button className="bg-primary border-2 border-primary rounded-lg text-secondary transition duration-300 hover:text-primary hover:bg-transparent  px-3 py-3">
                                    Hire Flutter Experts
                                </button>
                            </Link>
                        </div>
                        <div className="w-full flex justify-center">
                            <img src="https://cdn.moontechnolabs.com/live/images/images_svg/app_team.svg" alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default FlutterComponent