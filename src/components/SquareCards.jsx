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

const SquareCards = ({ content, title, img, id, className }) => {
    const [wordLimit, setWordLimit] = useState(18);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1300) {
                setWordLimit(40);
            } else {
                setWordLimit(30);
            }
        };

        handleResize(); // Initial check

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const truncatedContent = truncateContent(content, wordLimit);

    return (
        <div className={`${className} font-poppins pb-6 h-full sm:h-[23rem] w-full`}>
            <div className="flex h-full sm:flex-row flex-col rounded-md bg-black-gradient-2 overflow-hidden">
                <div className="h-[25rem] sm:h-full w-full sm:w-2/5 overflow-hidden">
                    <img
                        className="h-full w-full object-cover object-center"
                        src={img}
                        alt="blog"
                    />
                </div>
                <div className="px-8 mt-5 w-full sm:w-3/5">
                    <h1 className="title-font text-lg font-poppins font-semibold text-[20px] leading- text-white mb-6">
                        <Link className=" transition duration-500 hover:text-secondary">
                            {title}
                        </Link>
                    </h1>

                    <p className="font-poppins pt-3 leading-relaxed text-sm text-white">
                        {truncatedContent}
                    </p>
                    <div className="text-white  mt-10 pb-5 flex w-60 ss:flex-row flex-col justify-between">
                        <div className="font-semibold">
                            Category
                        </div>
                        <div className="text-white transition duration-300 hover:text-secondary">
                            <Link to="">{id}</Link>
                        </div>
                    </div>
                    <div className="text-secondary transition duration-300 hover:text-white pb-5">
                        <Link>
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SquareCards;
