import React from "react";

const LogisticCards = ({img, head, content, isSmall, list}) => {
    return (
        <div className={`${isSmall === true ? "sm:w-[300px] md:w-[300px] p-5 lg:w-[380px] " : "p-10 "} flex flex-col  w-full rounded text-white bg-primary `}>
            <div className="w-14 pb-5">
                <img src={img} className="w-full h-full" alt="" />
            </div>
            <div className="text-xl pb-5 font-normal">
                {head}
            </div>
            <div className={`${isSmall === true ? "text-sm " : "text-lg "} pb-5 text-gray-400`}>
                {content}
            </div>
            <div className="pl-3">
                <ul className="list-disc text-secondary font-normal">
                    {list.map((content, index) => (
                        <li key={index}>{content.data}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LogisticCards;