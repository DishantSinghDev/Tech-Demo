import React from "react";

const StickyCards = ({ isCol, list }) => {
    return (
        <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-0 w-full justify-center">
            {list.map((content, index) => (
                <div key={index} className={`${isCol === true ? "flex-col " : "flex-row "} flex items-center justify-center w-full bg-primary p-5 border border-white`}>
                    <div className={`${isCol === true ? "pb-2 " : "pr-2 "}`}>
                        {content.svg}
                    </div>
                    <div className="text-white w-full text-center text-lg font-normal">
                        {content.line}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StickyCards;