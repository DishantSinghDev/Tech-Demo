import React from "react";

const FlowChart1 = () => {
    return (
        <div className="mt-12 ">
            <div className="grid sm:grid-cols-2 gap-5 grid-cols-1 md:grid-cols-4  w-full relative md:justify-between">
                <div className="text-primary min-w-max relative text-center lines bg-white font-medium border-2 border-secondary text-lg rounded-md py-2 px-5">
                    PRODUCT OWNER
                </div>
                <div className="text-primary min-w-max relative text-center lines lines2 bg-white font-medium border-2 border-secondary text-lg rounded-md py-2 px-5">
                    SCRUM MASTER
                </div>
                <div className="text-primary min-w-max relative text-center lines lines2 bg-white font-medium border-2 border-secondary text-lg rounded-md py-2 px-5">
                    DEVELOPMENT TEAM
                </div>
                <div className="text-primary min-w-max relative text-center lines bg-white font-medium border-2 border-secondary text-lg rounded-md py-2 px-5">
                    STACKHOLDERS
                </div>
                <div className="absolute hidden md:inline-block left-[50%] arrow border-r-2 border-secondary top-24 w-1 h-16 "></div>
            </div>
            <div className="flex md:flex-row flex-col justify-between gap-10 items-center mt-11 md:mt-32 relative">
                <div className="lg:w-[15rem] xl:w-72 md:w-[12rem] bubble relative text-center text-white w-full border-2 border-secondary px-3 py-28 rounded-3xl">
                    Sprint Length<br /> (No More than 1 Month)
                </div>
                <div className="flex flow-chart flex-col justify-center bg-secondary border-2 border-primary text-center rounded-3xl text-primary p-5 w-full lg:w-[29rem] md:w-[25rem]">
                    <div className="w-full flex justify-center">
                        <h1 className="text-4xl border-b w-[105px] border-primary pb-5 font-medium">
                            Sprint
                        </h1>
                    </div>
                    <h2 className="text-2xl font-medium py-5">
                        1 - 4 weeks
                    </h2>
                    <p className="leading-relaxed">
                        Sprint is the container event and heart of the scrum to create a potentially releaseable product Increment
                    </p>
                </div>
                <div className="text-lg arrows relative font-normal pb-5 md:border-b-2 border-secondary w-full md:w-1/4 text-white leading-relaxed mb-16 text-center">
                    tentially Releasable <br /> Product Increment
                </div>
            </div>
        </div>
    )
}

export default FlowChart1;