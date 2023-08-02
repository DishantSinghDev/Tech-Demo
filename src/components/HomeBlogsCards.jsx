import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    if (words.length > wordLimit) {
        const truncatedWords = words.slice(0, wordLimit);
        return truncatedWords.join(" ") + "...";
    }
    return content;
};

const HomeBlogsCard = ({ content, title, img, id, className }) => {
    return (
        <div id={id} className={`${className} font-poppins p-4 w-full ss:w-1/2 md:w-1/3 max-w-full`}>
            <div className="h-full rounded-md bg-black-gradient-2">
                <div className="h-48 rounded-md overflow-hidden">
                    <img
                        className="h-full w-full object-cover object-center transition-all duration-500 hover:scale-105"
                        src={img}
                        alt="blog"
                    />
                </div>
                <div className="p-6">
                    <h1 className="title-font text-lg font-poppins font-semibold text-[20px] leading-normal text-white mb-6">
                        <Link className=" transition duration-500 hover:text-secondary">
                            {title}
                        </Link>
                    </h1>
                    <p className="font-poppins pt-3 leading-relaxed text-sm mb-10 text-white">
                        {content}
                    </p>
                    <button className="text-white rounded-lg py-1 px-3 mb-10 bg-secondary">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeBlogsCard;
