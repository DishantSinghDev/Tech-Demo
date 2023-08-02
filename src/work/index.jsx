import React, { useState } from "react";
import styles from "../style";
import {
    Footer,
    Navbar,
    TabbedNavigation,
    SquareCards,
    Contact
} from "../components";
import { blogs } from "../constants";

const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
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
    return (
        <div className="bg-primary w-full">

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            {/* Change the Imgae Url in below section to change the image used in blog Page */}
            <section style={{ backgroundPosition: '50%' }} className="sticky py-14 bg-cover bg-no-repeat h-[32.875rem] w-full bg-[url('https://www.peerbits.com/static/work-banner-5d0316d5d917ecdbdbb5e738ebc7f9e4.jpg')]">
                <div className="flex py-10 pt-12 h-full w-full md:mt-12 justify-center items-center">
                    <div className="font-poppins banner-content text-center md:py-7">
                        <h1 className="sm:text-[50px] text-[40px] font-medium text-white mb-10 max-w-4xl leading-normal mx-auto">
                        We helped 500+ global companies to digitalize their business with our unbeatable tech solutions.
                        </h1>
                    </div>
                </div>
            </section>
            <div className="w-full pt-24 mb-20">
                <TabbedNavigation categories={categories} elementId="remove-fixed-nav" onCategorySelect={handleCategorySelect} defaultSelectedCategory="All" />

                <div className={`bg-primary  ${styles.flexStart} ${styles.paddingX}`}>
                    <div className={`${styles.boxWidth} flex flex-row flex-wrap`}>
                        {blogs.map((content, index) => (
                            <SquareCards
                                key={index}
                                className={`${selectedCategory === content.id.first_id || selectedCategory === content.id.seconds_id ? 'inline' : 'hidden'}`}
                                title={content.title}
                                content={content.content}
                                id={content.id.seconds_id}
                                img={content.img}
                            />
                        ))}

                    </div>
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

export default Work;