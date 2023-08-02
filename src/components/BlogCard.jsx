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

const BlogCard = ({ content, title, img, id, date, category, className }) => {
  const [wordLimit, setWordLimit] = useState(18);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setWordLimit(50);
      } else {
        setWordLimit(17);
      }
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const truncatedContent = truncateContent(content, wordLimit);

  return (
    <div id={id} className={`${className} font-poppins p-4 lg:h-[35rem] h-[30rem] w-full ss:w-1/2 md:w-1/3 max-w-full`}>
      <div className="h-full rounded-md border overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img
            className="h-full w-full object-cover object-center transition-all duration-500 hover:scale-105"
            src={img}
            alt="blog"
          />
        </div>
        <div className="p-6">
          <h1 className="title-font text-lg font-poppins font-semibold text-[20px] leading- text-white mb-6">
            <Link className=" transition duration-500 hover:text-secondary">
              {title}
            </Link>
          </h1>
          <div className="text-white gap-x-2 flex border-b pb-2">
            <div>{date} |</div>
            <div className="text-secondary transition duration-300 hover:text-white">
              <Link to="">{category}</Link>
            </div>
          </div>
          <p className="font-poppins pt-3 leading-relaxed text-sm mb-10 text-white">
            {truncatedContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
