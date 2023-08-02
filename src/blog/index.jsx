import React, { useState } from "react";
import styles from "../style";
import {
    Footer,
    Navbar,
    TabbedNavigation,

} from "../components";
import { Seo } from "../components"
import { BlogMeta } from "../constants/metaData";
import { blogs } from "../constants";
import BlogCard from "../components/BlogCard";
import Contact from "../components/Contact";

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [blogsToShow, setBlogsToShow] = useState(4);
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
    ];
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };
    const handleLoadMore = () => {
        setBlogsToShow(prevCount => prevCount + 6);
    };
    const displayedBlogs = blogs.slice(0, blogsToShow);
    return (
        <div className="bg-primary w-full">
            <Seo
                title={BlogMeta.metaTitle}
                description={BlogMeta.metaDescription}
                ogImage={BlogMeta.ogImage}
                twitterImage={BlogMeta.twitterImage}
            />
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            {/* Change the Imgae Url in below section to change the image used in blog Page */}
            <section style={{ backgroundPosition: '50%' }} className="sticky py-14 bg-cover bg-no-repeat h-[32.875rem] w-full bg-[url('https://peerbits.com/static/blog-banner-84fea0cd79413208d94997fe1ae2685d.jpg')]">
                <div className="flex py-10 pt-12 h-full w-full md:mt-12 justify-center items-center">
                    <div className="font-poppins banner-content text-center md:py-7">
                        <h1 className="sm:text-[50px] text-[40px] font-medium text-white mb-10 max-w-4xl leading-normal mx-auto">
                            Stay ahead of the edge with our latest technology blogs
                        </h1>
                        <p className="text-white opacity-75 mx-auto lead text-lg mb-0">
                            Empower people through technology and innovative solutions
                        </p>
                    </div>
                </div>
            </section>
            <div className="w-full pt-24">
                <TabbedNavigation categories={categories} elementId="remove-fixed-nav" onCategorySelect={handleCategorySelect} defaultSelectedCategory="All" />

                <div className={`bg-primary  ${styles.flexStart} ${styles.paddingX}`}>
                    <div className={`${styles.boxWidth} flex flex-row flex-wrap`}>
                        {displayedBlogs.map((content, index) => (
                            <BlogCard
                                key={index}
                                className={`${selectedCategory === content.id.first_id || selectedCategory === content.id.seconds_id ? 'inline' : 'hidden'}`}
                                title={content.title}
                                content={content.content}
                                id={index}
                                category={content.id.seconds_id}
                                img={content.img}
                                date={content.date}
                            />
                        ))}

                    </div>
                </div>
                <div className="w-full flex justify-center">
                    {displayedBlogs.length < blogs.length ? (
                        <button className="my-8 px-6 py-3 drop-shadow-md text-white border border-white shadow-cla-blue px-4 py-1 rounded-full transition duration-300 hover:duration-500 hover:text-primary bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400" onClick={handleLoadMore}>
                            Load More
                        </button>
                    ) : (
                        <p className="my-8 text-white py-3.5 transition-all duration-300">No more results</p>
                    )}
                </div>

            </div>
            <div id="remove-fixed-nav" className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Blog;