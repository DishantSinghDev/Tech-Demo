import React from "react";

const VSCards = () => {
    const list = [
        {
            data: "Complete planning and set up with full transparency"
        },
        {
            data: "Provision of standard infrastructure for the entire team"
        },
        {
            data: "All resources working under client supervision"
        },
        {
            data: "On-demand additions and developments to the project"
        },
        {
            data: "Daily/weekly stand-up meetings and progress reports for updates"
        },
        {
            data: "Knowledge sharing and transfer of technical expertise to client team"
        },
        {
            data: "Ensuring that all norms, regulations, and compliances are followed"
        },
        {
            data: "Continuous improvements based on real-time feedback"
        },
    ]
    const list2 = [
        {
            data: "Complete planning and set up with full transparency"
        },
        {
            data: "Provision of standard infrastructure for the entire team"
        },
        {
            data: "All resources working under client supervision"
        },
        {
            data: "On-demand additions and developments to the project"
        },
        {
            data: "Daily/weekly stand-up meetings and progress reports for updates"
        },
        {
            data: "Knowledge sharing and transfer of technical expertise to client team"
        },
    ]
    return (
        <div className="flex md:flex-row flex-col">
            <div className={`p-7 sm:w-[600px] md:w-[500px]  border border-secondary flex flex-col  w-full rounded-md text-white bg-primary `}>
                <div className="w-16 py-5">
                    <img src="https://i.ibb.co/kQK2Jz1/logo-2cf41be8df20395f60e1b1dd51b68243-1.png" className="w-full h-full" alt="" />
                </div>
                <div className="text-xl pb-5 font-medium">
                    Comencement
                </div>

                <div className="pl-3">
                    <ul className="list-disc text-secondary font-normal">
                        {list.map((content, index) => (
                            <li key={index} className="pb-4">{content.data}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="z-20 w-full h-5 md:w-5 overflow-visible flex justify-center md:h-full items-center">
                <div className=" p-2 max-h-[56px] rounded-full flex items-center justify-center text-3xl font-semibold bg-secondary">
                    VS
                </div>
            </div>
            <div className={`p-7 sm:w-[600px] md:pb-0 pb-10 md:w-[500px] border border-secondary flex flex-col  w-full rounded-md text-white bg-primary `}>
                <div className="w-14 pb-5">
                    <img src="https://i.ibb.co/RpTB1hj/icons8-users-128.png" className="w-full h-full" alt="" />
                </div>
                <div className="text-xl pb-5 font-medium">
                    Client
                </div>

                <div className="pl-3">
                    <ul className="list-disc text-secondary font-normal">
                        {list2.map((content, index) => (
                            <li key={index} className="pb-4">{content.data}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VSCards;