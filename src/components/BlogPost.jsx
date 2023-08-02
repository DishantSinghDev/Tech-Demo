import React, { useState, useEffect } from "react";
import { facebook, linkedin, twitter } from "../assets";
import Contact from "./Contact"
import styles from "../style";
import { Link } from "react-router-dom";
import { blogs } from "../constants";

const BlogPosts = ({ categoryname, title, authorIamge, authorName, authorProff, authorDetails, date, children, id }) => {
    const [text, setText] = useState("");
    const [readingTime, setReadingTime] = useState(0);
    const [headings, setHeadings] = useState([]);
    const [activeHeading, setActiveHeading] = useState(null);
    const [isAuthorFixed, setIsAuthorFixed] = useState(false);

    useEffect(() => {
        const handleTextChange = () => {
            const headingElements = document.querySelectorAll(
                "#content-read h1"
            );
            const headingTexts = Array.from(headingElements).map(
                (element) => element.textContent
            );
            setHeadings(headingTexts);
        };

        handleTextChange(); // Call the function initially

        // Add event listener to handle content changes
        const contentReadElement = document.getElementById("content-read");

        if (contentReadElement) {
            handleTextChange(); // Calculate reading time on initial page load

            // Add event listener to handle content changes
            contentReadElement.addEventListener("input", handleTextChange);
        }

        return () => {
            // Cleanup: remove event listener
            if (contentReadElement) {
                contentReadElement.removeEventListener("input", handleTextChange);
            }
        };
    }, []);

    const handleTextChange = () => {
        const divText = document.getElementById("content-read").innerText;
        setText(divText);
    };

    useEffect(() => {
        handleTextChange({ target: document.getElementById("div") }); // Calculate reading time on initial page load
    }, []);

    useEffect(() => {
        const wordsPerMinute = 200; // Average reading speed in words per minute
        const wordCount = text.trim().split(/\s+/).length; // Counting words in the text
        const timeInMinutes = wordCount / wordsPerMinute;

        setReadingTime(Math.ceil(timeInMinutes));
    }, [text]);

    useEffect(() => {
        const handleScroll = () => {
            const headingElements = document.querySelectorAll(
                "#content-read h1"
            );

            const activeHeadingIndex = Array.from(headingElements).findIndex((element) => {
                const rect = element.getBoundingClientRect();
                return rect.top >= 100 && rect.bottom <= window.innerHeight;
            });

            setActiveHeading(activeHeadingIndex);

            const authorElement = document.getElementById("author");
            const rect = authorElement.getBoundingClientRect();
            const isFixed = rect.top <= 0;
            setIsAuthorFixed(isFixed);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            // Cleanup: remove event listener
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleHeadingClick = (index) => {
        const headingElements = document.querySelectorAll(
            "#content-read h1"
        );
        const targetElement = headingElements[index];
        if (targetElement) {
            const topOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            window.scrollTo({
                top: window.pageYOffset + offsetPosition,
                behavior: "smooth",
            });
        }
    };
    const categories = [
        'All',
        'Logistics',
        'DevOps',
        'Mobile Apps',
        'SaaS',
        'Software',
        'IoT',
        'Web',
        'Healthcare',
        'Fintech',
        'React JS',
        'On-Demand',
        'React Native',
        'Node JS',
        'Dot Net',
        'Flutter',
        'Java',
        'Full Stack',
        'Vue JS',
        'Technology',
        'Cloud',
        'Golang',
        'TypeScript',
        'JavaScript',
        'Warehouse',
        'Outsourcing',
        'Python',
        'Angular',
        'Others',
        'Taxi',
        'E-commerce',
        'UI/UX',
        'Startups',
        'MEAN Stack',
        'Kotlin',
        'Android',
        'MVP',
        'iOS',
        'Retail',
        'Chatbot',
        'Blockchain',
        'Delivery',
        'Oil and Gas',
        'Laravel',
    ];
    return (
        <>
            <div className={`${isAuthorFixed ? "fixed top-20  inline-block " : "hidden"} bg-secondary text-primary font-poppins justify-between sm:px-24 px-6 w-full py-4 text-[1.25rem] font-[500] xl:justify-center z-20 flex items-center `}>
                <div>
                    {title}
                </div>
            </div>

            <div className="pt-28 font-poppins sm:px-16 px-6 bg-secondary text-center bg-opacity-25 w-full text-white flex items-center flex-col">
                <div className="text-xs pb-7">
                    {categoryname}
                </div>
                <div className="text-4xl xl:max-w-[1280px] w-full font-medium pb-5">
                    {title}
                </div>
                <div className="flex xl:max-w-[1280px] w-full items-center flex-col">
                    <div id="author" className="h-20 w-20 rounded-full border-2">
                        <div className={`${authorIamge} h-full w-full bg-cover bg- bg-center`}>
                        </div>
                    </div>
                    <div className="pt-3 font-medium text-base">
                        {authorName}
                    </div>
                    <div className="pb-5 font-extralight text-gray-400">
                        {authorProff}
                    </div>
                </div>

                <div className=" border-t xl:max-w-[1280px] flex text-sm flex-wrap justify-between w-full py-5 font-extralight text-gray-400">
                    <div className="flex">
                        <div className="pr-2 pt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="" width="15px" height="15px"><path d="M 24 4 C 21.346797 4 18.804347 4.5198865 16.482422 5.4628906 L 16.482422 5.4609375 C 13.499924 6.6709332 10.892651 8.5883961 8.8320312 10.990234 L 8.7949219 9.9335938 A 2.0002 2.0002 0 0 0 6.6953125 7.9785156 A 2.0002 2.0002 0 0 0 4.7988281 10.074219 L 5.0078125 16.070312 A 2.0002 2.0002 0 0 0 7.0761719 17.998047 L 13.072266 17.789062 A 2.0002 2.0002 0 1 0 12.933594 13.792969 L 11.652344 13.837891 C 13.333164 11.798685 15.502985 10.17546 17.986328 9.1679688 L 17.988281 9.1679688 C 19.842309 8.4149728 21.867203 8 24 8 C 32.860089 8 40 15.139911 40 24 C 40 32.860089 32.860089 40 24 40 C 15.139911 40 8 32.860089 8 24 A 2.0002 2.0002 0 1 0 4 24 C 4 35.021911 12.978089 44 24 44 C 35.021911 44 44 35.021911 44 24 C 44 12.978089 35.021911 4 24 4 z" /></svg>
                        </div>
                        Last Updated on {date}
                    </div>
                    {readingTime > 0 && (
                        <div className="flex">
                            <div className="pr-2 pt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15px" height="15px"><path d="M 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 C 18.628906 24 24 18.628906 24 12 C 24 5.371094 18.628906 0 12 0 Z M 12 2 C 17.523438 2 22 6.476563 22 12 C 22 17.523438 17.523438 22 12 22 C 6.476563 22 2 17.523438 2 12 C 2 6.476563 6.476563 2 12 2 Z M 10.9375 3.875 L 10.5 12.0625 L 10.59375 12.9375 L 16.75 18.375 L 17.71875 17.375 L 12.625 11.96875 L 12.1875 3.875 Z" /></svg>
                            </div>
                            {readingTime} min{readingTime > 1 ? 's' : ''} Read
                        </div>
                    )}

                </div>
            </div>
            <div className="xl:max-w-[1280px] w-full flex mx-auto flex-row">
                <div className="sticky top-24 pt-12 p-4 h-full w-[100px] hidden sm:flex items-center flex-col text-white">
                    <h2 className="text-xl font-light mb-4">SHARE</h2>
                    <div className="flex flex-col">
                        <a href="#" className="flex items-center hover:bg-opacity-25 p-2 justify-center mb-6 w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                            <img src={facebook} className="w-full h-full" alt="" />
                        </a>
                        <a href="#" className="flex items-center justify-center p-2 mb-6 w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600">
                            <img src={linkedin} className="w-full h-full" alt="" />
                        </a>
                        <a href="#" className="flex items-center justify-center p-2 w-10 h-10 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
                            <img src={twitter} className="w-full h-full" alt="" />
                        </a>
                    </div>
                </div>

                <div className="flex-grow md:pr-0 pr-5" style={{ overflowY: 'auto' }}>
                    <div id="content-read" className="text-white px-3 sm:px-0 pt-6 sm:pt-12 w-full" onBlur={handleTextChange}>
                        {children}
                    </div>

                    <Link to="/request-quote">
                        <img src="https://www.peerbits.com/static/ee36087342349780e919efa069c61759/c5b3e/ci-cd-in-b2b-product-development-cta-01.png" className="my-10 w-full" alt="" />
                    </Link>
                    <div className="text-white font-poppins bg-primary shadow-md flex w-full mt-10 border-t-2 border-secondary rounded">
                        <div className="w-20 m-4">

                            <div className="h-20 w-20 rounded-full border-2">
                                <div className={`${authorIamge} h-full w-full bg-cover bg- bg-center`}>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-gray-500">
                            <div className="text-base text-white font-semibold">
                                {authorName}
                            </div>
                            {authorDetails}
                        </div>
                    </div>
                </div>
                <div className="text-white hidden ml-14 mr-14 md:inline-block pt-12 font-poppins">
                    <div className="pb-5">
                        <div className="text-xl font-semibold">
                            Related Posts
                        </div>
                        <div>
                            {blogs
                                .filter((content) => content.id.seconds_id === id)
                                .slice(0, 3)
                                .map((content) => (
                                    <div key={content.id} className="py-5 border-b rounded border-secondary">
                                        <Link className="hover:text-secondary transition duration-300" to={content.link}>
                                            <div className="flex pb-2 items-center text-xs">
                                                <div className="pr-2">
                                                    <svg fill="#00F6FF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10px" height="10px">
                                                        <path d="M 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 C 18.628906 24 24 18.628906 24 12 C 24 5.371094 18.628906 0 12 0 Z M 12 2 C 17.523438 2 22 6.476563 22 12 C 22 17.523438 17.523438 22 12 22 C 6.476563 22 2 17.523438 2 12 C 2 6.476563 6.476563 2 12 2 Z M 10.9375 3.875 L 10.5 12.0625 L 10.59375 12.9375 L 16.75 18.375 L 17.71875 17.375 L 12.625 11.96875 L 12.1875 3.875 Z" />
                                                    </svg>
                                                </div>
                                                {content.time} min{content.time > 1 ? 's' : ''} Read
                                            </div>
                                            <div className="flex gap-4 items-center text-sm max-w-fit">
                                                <p className="w-32">{content.title}</p>
                                                <div className="w-28 h-16 rounded-sm overflow-hidden">
                                                    <img src={content.img} className="w-full object-cover h-full" alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <div className="text-xl mb-10 font-semibold">
                            Filter By Categories
                        </div>
                        <div className="w-[250px] scroll-button overflow-y-auto h-[150px]">
                            {categories.map((category, index) => (
                                <button className="border rounded py-1 px-4 hover:bg-secondary hover:text-black mb-5 ml-2 transition text-sm font-medium" key={index}>{category}</button>
                            ))}
                        </div>
                    </div>
                    <div className="sticky top-36 ">
                        <div className="text-xl mt-12 mb-10 font-semibold">
                            Table of contents
                        </div>
                        <ul className="ml-4 list-disc text-secondary">
                            {headings.map((heading, index) => (
                                <li key={index} onClick={() => handleHeadingClick(index)} className={`${index === activeHeading ? "text-secondary" : ""} ${index} cursor-pointer hover:text-secondary text-white`}>{heading}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-secondary pt-10 pb-10 mt-10 font-poppins">
                <div className={`  ${styles.flexStart} ${styles.paddingX}`}>
                    <div className={`${styles.boxWidth}`}>
                        <div className="text-white text-4xl font-bold ">
                            Related Post
                        </div>

                        <div className="w-full flex-wrap flex gap-5 justify-center  mt-10">
                            {blogs
                                .filter((content) => content.id.seconds_id === id)
                                .slice(0, 3)
                                .map((content) => (
                                    <Link to={content.link} className="w-80 mb-5">
                                        <div className=" sm:mr-6">
                                            <div className="overflow-hidden">
                                                <img src={content.img} className="w-full h-full object-cover object-center transition duration-500 scale-100 hover:scale-105 rounded" alt="" />
                                            </div>
                                            <div className="mt-4 mb-3 opacity-70 text-sm">
                                                {content.date}
                                            </div>
                                            <div className="text-primary  transition duration-500 hover:text-white">
                                                {content.title}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={` ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Contact />
                </div>
            </div>


        </>

    )
}

export default BlogPosts