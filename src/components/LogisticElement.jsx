import React from "react";

const LogisticElement = ({ list }) => {
    return (
        <div className="flex w-full flex-wrap justify-center mt-20">
            {list.map((content, index) => (
                <div className="flex flex-col w-36 lg:w-40 items-center xs:mr-6 mb-16">
                    <div className="pb-4">
                        {content.svg}
                    </div>
                    <p className="text-white w-full text-center">
                        {content.line}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default LogisticElement;