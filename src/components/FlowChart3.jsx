import React from "react";

const FlowChart3 = () => {
    return (
        <div className="mt-12 ">
            <div className="grid sm:grid-cols-2 gap-5 grid-cols-1 md:grid-cols-3  w-full relative md:justify-between">
                <div className="text-primary min-w-max relative text-center lines bg-white font-medium border-2 border-secondary text-lg rounded-md py-2 px-5">
                    PRODUCT OWNER
                </div>
                <div className="text-primary min-w-max relative text-center lines lines3 bg-white font-medium border-2 border-secondary text-lg rounded-md py-2 px-5">
                    SCRUM MASTER
                </div>
                <div className="text-primary min-w-max relative text-center lines bg-white font-medium border-2 border-secondary text-lg rounded-md py-2 px-5">
                    TEAM MEMBERS
                </div>
                <div className="absolute hidden md:inline-block left-[49.5%] arrow border-r-2 border-secondary top-24 w-1 h-16 "></div>
            </div>
            <div className="flex md:flex-row flex-col justify-between gap-10 items-center mt-11 md:mt-32 relative">
                <div className="lg:w-[15rem] xl:w-72 md:w-[12rem] bubble relative text-white w-full border-2 border-secondary py-[5.5rem] rounded-3xl">
                    <ul className="list-disc lg:pl-12 grid grid-cols-1 justify-items-center md:justify-items-start w-full xl:pl-20 md:pl-7">
                        <li>
                            Progress Report
                        </li>
                        <li>
                            Today’s Plan / Goal
                        </li>
                        <li>
                            Open Impediments
                        </li>
                    </ul>
                </div>
                <div className="flex flow-chart flex-col justify-center bg-secondary border-2 border-primary text-center rounded-3xl text-primary p-5 w-full lg:w-[29rem] md:w-[25rem]">
                    <div className="w-full flex justify-center">
                        <h1 className="text-4xl border-b w-[218px] border-primary pb-5 font-medium">
                            Daily Scrum
                        </h1>
                    </div>
                    <h2 className="text-2xl font-medium py-5">
                        15 Mins
                    </h2>
                    <p className="leading-relaxed">
                        Are we on track to achieve our<br />forecasted Sprint Goal?
                    </p>
                </div>
                <div className="flex flex-col w-1/4">
                    <div className="text-lg arrows relative min-w-max font-normal pb-3 md:border-b-2 border-secondary w-full  text-white leading-relaxed md:mb-12 text-center">
                        Team Communication
                    </div>
                    <div className="text-lg arrows relative font-normal pb-3 md:border-b-2 border-secondary w-full  text-white leading-relaxed md:mb-12 text-center">
                        Risk Assessment
                    </div>
                    <div className="text-lg arrows relative font-normal pb-3 md:border-b-2 border-secondary w-full  text-white leading-relaxed text-center">
                        Plan Adjustment
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowChart3;