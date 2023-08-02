import React from "react";

const ProcessCards = ({ list }) => {
    return (
        <div className="flex w-full justify-center gap-5 flex-wrap">
            {list.map((content, index) => (
                <div key={index} className={` flex flex-col items-center justify-center w-full sm:w-80 bg-secondary px-3 py-6 rounded-lg`}>
                    <div className="pb-5">
                        {content.svg}
                    </div>
                    <div className="text-primary w-full text-center text-lg font-normal">
                        {content.line}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProcessCards;