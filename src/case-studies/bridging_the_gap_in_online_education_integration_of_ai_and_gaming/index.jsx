import React, { useState } from "react";
import styles from "../../style";
import {
    Footer,
    Navbar,
    Contact,
    ImageSwiper,
    FlatCards
} from "../../components";
import { cases } from "../../constants";
import { Link } from "react-router-dom";

const CaseStudies = () => {
    const list = [
        {
            li: "Improving system response time during peak exam hours"
        },
        {
            li: "Implementing efficient algorithms for large-scale data processing"
        },
        {
            li: "Incorporating education qualification data into performance metrics calculation"
        },
        {
            li: "Designing a cost-effective data storage solution to handle large amounts of student data"
        },
        {
            li: "Developing a personalization system based on student performance analysis"
        },
        {
            li: "Adding gamification elements to increase student engagement and motivation"
        },
    ]

    const list1 = [
        {
            li: "Optimized database queries through the implementation of load-balancing techniques, resulting in a significant improvement in response time."
        },
        {
            li: "Implemented parallel processing algorithms and cloud computing to streamline data processing, making it more efficient."
        },
        {
            li: "Developed algorithms to consider the impact of education qualifications and integrated the relevant data with data validation checks to maintain data consistency and accuracy."
        },
        {
            li: "Designed scalable and cost-effective cloud storage solutions that incorporate data compression techniques, enabling the efficient handling of massive amounts of student data."
        },
        {
            li: "Developed a personalized system that leverages machine learning algorithms to predict student performance and suggest personalized study plans."
        },
        {
            li: "Designed engaging and interactive activities, including leaderboards, to enhance student engagement and motivation."
        },
    ]

    const list2 = [
        {
            li: "Created comprehensive and exhaustive exam taking application with multiple platforms."
        },
        {
            li: "Exhaustive tracking of student performance with the help of various dashboards & reports."
        },
    ]

    const list3 = [
        {
            li: "Exam Creation"
        },
        {
            li: "Exam Taking"
        },
        {
            li: "Student & Batch Management"
        },
        {
            li: "Teacher Management"
        },
        {
            li: "Student & Teacher Dashboards"
        },
    ]
    return (
        <div className="bg-primary w-full overflow-hidden md:overflow-visible">

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            {/* Change the Imgae Url in below section to change the image used in blog Page */}
            <section style={{ backgroundPosition: '50%' }} className="py-14 bg-cover bg-no-repeat h-[32.875rem] w-full bg-[url('https://i.ibb.co/qr9vWXH/DALL-E-2023-05-27-23-58-51-a-landscape-black-background-with-white-fading-stripes-on-its-corners.png')]">
                <div className="flex py-10 pt-12 h-full w-full md:mt-12 justify-center items-center">
                    <div className="font-poppins banner-content text-center md:py-7">
                        <h1 className="sm:text-[50px] text-[40px] font-medium text-white mb-10 max-w-4xl leading-normal mx-auto">
                            Bridging the Gap in <span className="text-secondary">Online Education</span>: Integration of AI and Gaming
                        </h1>
                    </div>
                </div>
            </section>
            <section className="bg-gray-700">
                <div className=" sm:px-16 px-6 flex justify-center items-start font-poppins pt-14">

                    <div className=" xl:max-w-[1280px] flex md:flex-row flex-col w-full">
                        <div className="text-white flex flex-col pr-36">
                            <div className="text-5xl font font-normal pb-8">
                                About
                            </div>
                            <div className="h-0.5 w-16 bg-secondary">
                            </div>
                            <div className="pb-10 pt-8">
                                <div className="text-white text-base pb-1.5 font-medium">
                                    Category
                                </div>
                                <div className="text-gray-300 text-sm">
                                    Education
                                </div>
                            </div>
                        </div>
                        <div className="w-full text-white pr-6" >
                            We built a custom solution for teachers, students, and educational institutes that is known for its user-friendly web-based platform. Teachers can effortlessly create exams at both institute and individual levels, while students can take exams and track their results. This platform provides students with a vast selection of competitive and board exams to practice with, giving them the freedom to choose their subject, language, time, and place. Parents can also use the platform to stay informed of their children's progress and customize mock tests for extra practice. With the ability to form communities and stay connected, it serves as the all-encompassing solution for education stakeholders.
                        </div>
                    </div>
                </div>
                <div className="sm:px-16 px-6 flex pb-14 items-start font-poppins justify-center">
                    <div className="flex flex-col xl:max-w-[1280px] w-full sm:flex-row mt-10">
                        <div className="bg-black-gradient-2 p-5 sm:mr-6 mb-10 w-full h-[200px] sm:w-[400px] rounded">
                            <div className="text-white text-lg font-medium pb-4">
                                Team Members
                            </div>
                            <div className="text-black text-5xl font-semibold pb-10">
                                9
                            </div>
                            <div className="h-1 w-12 bg-secondary">

                            </div>
                        </div>
                        <div className="bg-gray-500 p-5 h-[200px] w-full sm:w-[400px] rounded">
                            <div className="text-white text-lg font-medium pb-4">
                                Project delivery time
                            </div>
                            <div className="text-black text-5xl font-semibold pb-10">
                                On-going
                            </div>
                            <div className="h-1 w-12 bg-secondary">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="sm:px-16 px-6 flex pb-14 items-start font-poppins justify-center">
                    <div className="flex flex-col xl:max-w-[1280px] w-full  mt-10">
                        <FlatCards isBr={true} listImgColor="" reverseClassName="primary" className="bg-secondary" head1="The" head2="Challenge" list={list} />
                        <FlatCards isBr={true} listImgColor="rgb(0 246 255 / var(--tw-bg-opacity))" reverseClassName="secondary" className="bg-transparent" head1="The" head2="Solution" list={list1} />
                        <ImageSwiper />
                        <FlatCards isBr={false} listImgColor="" reverseClassName="primary" className="bg-secondary" head1="" head2="Results" list={list2} />
                        <FlatCards isBr={true} listImgColor="" reverseClassName="primary" className="bg-secondary" head1="Key" head2="features" list={list3} />
                    </div>
                </div>
            </section>
            <section className="bg-secondary sm:px-16 px-6 flex justify-center items-start font-poppins pt-14">
                <div className="xl:max-w-[1280px] flex flex-col w-full pb-10">
                    <div className="text-white">
                        <div className="text-5xl font-medium pb-5">
                            <span className="text-primary">Tech stacks</span> we used
                        </div>
                        <div>
                            We employed a variety of cutting-edge technologies and frameworks to develop edutech - an online exam solution, including:
                        </div>
                    </div>
                    <div className="flex w-full mt-16 justify-center flex-wrap">
                        <div className="flex flex-col items-center w-40 xs:mr-10 mb-16">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="60px" height="60px"><path fill="#fff" d="M114,124H14c-5.5,0-10-4.5-10-10V14C4,8.5,8.5,4,14,4h100c5.5,0,10,4.5,10,10v100 C124,119.5,119.5,124,114,124z" /><path fill="#71c2ff" d="M47.9,86.8c1.2,1.1,1.3,3,0.2,4.2c-0.6,0.7-1.4,1-2.2,1c-0.7,0-1.4-0.2-2-0.8L31.8,80.2c-0.6-0.6-1-1.4-1-2.2 s0.4-1.7,1-2.2l12.1-11.1c1.2-1.1,3.1-1,4.2,0.2s1,3.1-0.2,4.2L38.3,78L47.9,86.8z M75.1,56.9l-16.5,44.4c-0.5,1.3-1.8,2.1-3.1,1.9 c-0.3,0-0.5-0.1-0.8-0.2c-1.6-0.6-2.3-2.3-1.8-3.9l16.5-44.4c0.6-1.6,2.3-2.3,3.9-1.8C74.9,53.6,75.7,55.3,75.1,56.9z M96.2,80.2 L84.1,91.3c-0.6,0.5-1.3,0.8-2,0.8c-0.8,0-1.6-0.3-2.2-1c-1.1-1.2-1-3.1,0.2-4.2l9.6-8.8l-9.6-8.8c-1.2-1.1-1.3-3-0.2-4.2 c1.1-1.2,3-1.3,4.2-0.2l12.1,11.1c0.6,0.6,1,1.4,1,2.2S96.8,79.7,96.2,80.2z" /><path fill="#444b54" d="M114,127H14c-7.2,0-13-5.8-13-13V41c0-1.7,1.3-3,3-3s3,1.3,3,3v73c0,3.9,3.1,7,7,7h100c3.9,0,7-3.1,7-7V14 c0-3.9-3.1-7-7-7H14c-3.9,0-7,3.1-7,7v11h104c1.7,0,3,1.3,3,3s-1.3,3-3,3H4c-1.7,0-3-1.3-3-3V14C1,6.8,6.8,1,14,1h100 c7.2,0,13,5.8,13,13v100C127,121.2,121.2,127,114,127z" /><circle cx="16" cy="16" r="3" fill="#444b54" /><circle cx="26" cy="16" r="3" fill="#444b54" /><circle cx="36" cy="16" r="3" fill="#444b54" /></svg>
                            <div className="text-base text-gray-600 w-full text-center py-4">
                                Technologies
                            </div>
                            <div className="text-white text-lg w-full text-center">
                                Python, TypeScript, Angular, React, React Native
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-40 xs:mr-10 mb-16">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="60px" height="60px"><circle cx="128.317" cy="22.841" r="11.651" fill="#FF4A73" /><circle cx="53.866" cy="53.418" r="11.651" fill="#FF4A73" /><circle cx="22.841" cy="127.683" r="11.651" fill="#FF4A73" /><circle cx="53.418" cy="202.134" r="11.651" fill="#FF4A73" /><circle cx="127.683" cy="233.159" r="11.651" fill="#FF4A73" /><circle cx="202.134" cy="202.582" r="11.651" fill="#FF4A73" /><circle cx="233.159" cy="128.317" r="11.651" fill="#FF4A73" /><circle cx="202.582" cy="53.866" r="11.651" fill="#FF4A73" /><g><polygon fill="#5FCDFF" points="127.998,182.917 183.346,162.13 183.346,93.87 127.998,114.658" /><polygon fill="#5FCDFF" points="127.998,182.917 72.651,162.13 72.651,93.87 127.998,114.658" /><polygon fill="#30B6FF" points="183.349,93.867 183.349,162.133 172.338,166.266 172.338,97.999" /><polygon fill="#73D7F9" points="139.012,110.522 139.012,178.781 128.002,182.914 128.002,114.655" /><polygon fill="#5FCDFF" points="127.998,73.083 72.651,93.87 128.002,114.655 183.346,93.87" /><polygon fill="#30B6FF" points="128.002,114.655 128.002,182.914 116.991,178.781 116.991,110.522" /><polygon fill="#73D7F9" points="83.665,97.999 83.665,166.266 72.654,162.133 72.654,93.867" /><polygon fill="#30B6FF" points="183.349,93.867 128.002,114.655 117.358,110.654 162.061,93.867 117.358,77.079 128.002,73.086" /><polygon fill="#73D7F9" points="92.474,93.867 137.911,110.933 128.002,114.655 72.654,93.867 128.002,73.086 137.911,76.808" /></g><g><path fill="#5F266D" d="M233.159,112.666c-7.246,0-13.339,4.956-15.114,11.651h-30.699V93.87c0-1.616-1.012-3.147-2.59-3.743 c-0.001,0-0.002-0.001-0.004-0.002l-9.279-3.485l19.251-19.26c6.248,3.63,13.987,2.49,18.926-2.448 c6.116-6.117,6.118-16.017,0-22.134c-6.115-6.116-16.017-6.119-22.134,0c-5.186,5.186-5.924,12.984-2.453,18.93l-21.813,21.823 l-34.932-13.119V37.955c6.695-1.774,11.651-7.868,11.651-15.114c0-8.63-7.021-15.651-15.651-15.651s-15.651,7.021-15.651,15.651 c0,7.246,4.956,13.339,11.651,15.114v32.238L89.413,83.302L67.383,61.273c3.477-5.989,2.672-13.8-2.45-18.922 c-6.117-6.115-16.017-6.118-22.134,0c-6.116,6.115-6.119,16.017,0,22.134c5.092,5.093,12.863,5.997,18.933,2.451l19.456,19.456 l-9.942,3.734c0,0,0,0-0.001,0c-1.559,0.585-2.594,2.102-2.594,3.744v29.813H37.955c-1.774-6.695-7.868-11.651-15.114-11.651 c-8.63,0-15.651,7.021-15.651,15.651s7.021,15.651,15.651,15.651c7.246,0,13.339-4.956,15.114-11.651H68.65v30.447 c0,1.667,1.033,3.159,2.593,3.745l9.282,3.487l-19.255,19.255c-5.989-3.476-13.799-2.67-18.92,2.451 c-6.116,6.116-6.118,16.017,0,22.134c6.115,6.116,16.017,6.119,22.134,0c5.094-5.093,5.996-12.865,2.45-18.935l21.816-21.816 l34.929,13.12v32.475c-6.694,1.775-11.648,7.868-11.648,15.113c0,8.63,7.021,15.651,15.651,15.651s15.651-7.021,15.651-15.651 c0-7.247-4.958-13.341-11.654-15.115v-32.237l34.909-13.111l22.029,22.029c-3.478,5.989-2.674,13.802,2.449,18.925 c6.117,6.115,16.017,6.118,22.134,0c6.116-6.115,6.119-16.017,0-22.134c-5.091-5.092-12.86-5.997-18.931-2.453l-19.456-19.456 l9.938-3.732c1.561-0.586,2.594-2.078,2.594-3.745v-29.813h30.699c1.774,6.695,7.868,11.651,15.114,11.651 c8.63,0,15.651-7.021,15.651-15.651S241.789,112.666,233.159,112.666z M197.172,48.455c2.99-2.99,7.829-2.99,10.82,0 c2.99,2.99,2.99,7.831,0,10.82c-2.981,2.984-7.836,2.984-10.82,0C194.182,56.287,194.182,51.446,197.172,48.455z M59.276,58.828 c-2.989,2.99-7.83,2.991-10.821,0c-2.99-2.99-2.99-7.83,0-10.82c2.99-2.99,7.83-2.99,10.82,0 C62.259,50.991,62.259,55.845,59.276,58.828z M22.841,135.334c-4.219,0-7.651-3.433-7.651-7.651s3.433-7.651,7.651-7.651 s7.651,3.433,7.651,7.651S27.06,135.334,22.841,135.334z M58.828,207.545c-2.99,2.99-7.829,2.99-10.82,0 c-2.99-2.99-2.99-7.831,0-10.82c2.982-2.983,7.837-2.983,10.82,0C61.818,199.713,61.819,204.554,58.828,207.545z M196.724,197.172 c2.989-2.99,7.83-2.991,10.821,0c2.99,2.99,2.99,7.829,0,10.82c-2.99,2.99-7.83,2.99-10.82,0 C193.741,205.009,193.741,200.155,196.724,197.172z M120.666,22.841c0-4.219,3.433-7.651,7.651-7.651s7.651,3.433,7.651,7.651 s-3.433,7.651-7.651,7.651S120.666,27.06,120.666,22.841z M76.65,159.359c0-7.129,0-52.934,0-59.714l47.349,17.785v59.714 C112.062,172.661,87.259,163.344,76.65,159.359z M135.334,233.159c0,4.219-3.433,7.651-7.651,7.651s-7.651-3.433-7.651-7.651 s3.433-7.651,7.651-7.651S135.334,228.94,135.334,233.159z M127.996,110.386L84.027,93.871l43.971-16.514l43.971,16.514 L127.996,110.386z M179.346,159.359L132,177.141v-59.713l47.346-17.782V159.359z M233.159,135.968 c-4.219,0-7.651-3.433-7.651-7.651s3.433-7.651,7.651-7.651s7.651,3.433,7.651,7.651S237.377,135.968,233.159,135.968z" /><path fill="#5F266D" d="M167.595,137.667c2.209,0,4-1.791,4-4v-14c0-2.209-1.791-4-4-4s-4,1.791-4,4v14 C163.595,135.875,165.386,137.667,167.595,137.667z" /><path fill="#5F266D" d="M167.595,152.875c2.209,0,4-1.791,4-4v-0.208c0-2.209-1.791-4-4-4s-4,1.791-4,4v0.208 C163.595,151.084,165.386,152.875,167.595,152.875z" /></g></svg>
                            <div className="text-base text-gray-600 w-full text-center py-4">
                                Frameworks
                            </div>
                            <div className="text-white text-lg w-full text-center">
                                Django, Django Rest
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-40 xs:mr-10 mb-16">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="60px" height="60px" baseProfile="basic"><path fill="#babffc" d="M42,14V9c0-2.206-1.794-4-4-4H10C7.794,5,6,6.794,6,9v5c0,2.206,1.794,4,4,4c-2.206,0-4,1.794-4,4v5	c0,2.206,1.794,4,4,4c-2.206,0-4,1.794-4,4v5c0,2.206,1.794,4,4,4h28c2.206,0,4-1.794,4-4v-5c0-2.206-1.794-4-4-4	c2.206,0,4-1.794,4-4v-5c0-2.206-1.794-4-4-4C40.206,18,42,16.206,42,14z" /><path fill="#324561" d="M39,19H9c-0.553,0-1-0.448-1-1s0.447-1,1-1h30c0.553,0,1,0.448,1,1S39.553,19,39,19z" /><path fill="#324561" d="M39,32H9c-0.553,0-1-0.448-1-1s0.447-1,1-1h30c0.553,0,1,0.448,1,1S39.553,32,39,32z" /></svg>
                            <div className="text-base text-gray-600 w-full text-center py-4">
                                Database
                            </div>
                            <div className="text-white text-lg w-full text-center">
                                PostgreSQL, Redis
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-40 xs:mr-10 mb-16">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60px" height="60px"><path fill="#ed7899" d="M37 3H49V45H37z" /><path fill="#f283a5" d="M37 3H49V9H37z" /><path fill="#85cbf8" d="M25 7H37V45H25z" /><path fill="#9fddff" d="M25 7H37V13H25z" /><path fill="#72caaf" d="M49 13H57V46H49z" /><path fill="#88d7b6" d="M49 13H57V19H49z" /><path fill="#88d7b6" d="M49 13H57V19H49z" /><path fill="#f9e3ae" d="M11.19 12.32H21.369999999999997V43.6H11.19z" transform="rotate(15.33 16.282 27.955)" /><path fill="#faefde" d="M14.84 12.81H25.02V16.46H14.84z" transform="rotate(15.33 19.937 14.64)" /><path fill="#f9dd8f" d="M9 55H13V63H9zM51 55H55V63H51z" /><path fill="#cda1a7" d="M1.5 45.5H62.5V54.5H1.5z" /><path fill="#c4939c" d="M5.5,50h53a4,4,0,0,1,4,4v.5a0,0,0,0,1,0,0H1.5a0,0,0,0,1,0,0V54A4,4,0,0,1,5.5,50Z" /><path fill="#8d6c9f" d="M12 48a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V49A1 1 0 0 0 12 48zM7 48a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V49A1 1 0 0 0 7 48zM17 48a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V49A1 1 0 0 0 17 48zM22 48a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V49A1 1 0 0 0 22 48zM27 48a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V49A1 1 0 0 0 27 48zM32 48a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V49A1 1 0 0 0 32 48zM37 48a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V49A1 1 0 0 0 37 48zM42 48a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V49A1 1 0 0 0 42 48zM47 48a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V49A1 1 0 0 0 47 48zM57 48a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V49A1 1 0 0 0 57 48zM52 48a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V49A1 1 0 0 0 52 48z" /><path fill="#8d6c9f" d="M61,44H58V15a3,3,0,0,0-3-3H51a3,3,0,0,0-1,.18V5a3,3,0,0,0-3-3H39a3,3,0,0,0-3,3V6.18A3,3,0,0,0,35,6H27a3,3,0,0,0-3,3v3.66a3,3,0,0,0-.7-.3L17.5,10.8a3,3,0,0,0-3.67,2.12L6.58,40A3,3,0,0,0,8.7,43.64L10,44H3a3,3,0,0,0-3,3v6a3,3,0,0,0,3,3H8v5a3,3,0,0,0,6,0V56H50v5a3,3,0,0,0,6,0V56h5a3,3,0,0,0,3-3V47A3,3,0,0,0,61,44ZM51,14h4a1,1,0,0,1,1,1V44H50V42h4a1,1,0,0,0,0-2H50V20h4a1,1,0,0,0,0-2H50V15A1,1,0,0,1,51,14ZM38,5a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V44H38V5ZM26,9a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V44H26ZM8.51,40.49l7.25-27A1,1,0,0,1,17,12.73l5.8,1.55a1,1,0,0,1,.71,1.23l-7.25,27a1,1,0,0,1-1.22.71l-5.8-1.55A1,1,0,0,1,8.51,40.49Zm9.66,2.59L24,21.33V44H17.73A3,3,0,0,0,18.17,43.08ZM12,61a1,1,0,0,1-2,0V56h2Zm42,0a1,1,0,0,1-2,0V56h2Zm8-8a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V47a1,1,0,0,1,1-1H61a1,1,0,0,1,1,1Z" /><path fill="#8d6c9f" d="M33 12H29a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zM41 10h4a1 1 0 0 0 0-2H41a1 1 0 0 0 0 2zM41 42h4a1 1 0 0 0 0-2H41a1 1 0 0 0 0 2zM33 40H29a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zM16.92 16.86l3.86 1A1 1 0 1 0 21.3 16l-3.86-1a1 1 0 0 0-.52 1.93zM15.79 40.37a1 1 0 0 0-.71-1.22l-3.86-1A1 1 0 1 0 10.7 40l3.86 1a1 1 0 0 0 1.22-.71z" /></svg>
                            <div className="text-base text-gray-600 w-full text-center py-4">
                                Libraries & Packages
                            </div>
                            <div className="text-white text-lg w-full text-center">
                                Django-Redis, Django-celery-beat, openpyxl, Pandas
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-40 xs:mr-10 mb-16">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="60px" height="60px"><path fill="#846f75" d="M128,76.941a2.5,2.5,0,0,0-2.5,2.5v97.118a2.5,2.5,0,0,0,5,0V79.441A2.5,2.5,0,0,0,128,76.941Z" /><path fill="#846f75" d="M106.916,52.6H55.1a2.5,2.5,0,0,0-2.5,2.5v48.558a2.5,2.5,0,0,0,5,0V57.6h49.32a2.5,2.5,0,0,0,0-5Z" /><path fill="#846f75" d="M200.9,52.6h-51.82a2.5,2.5,0,0,0,0,5H198.4v46.058a2.5,2.5,0,0,0,5,0V55.1A2.5,2.5,0,0,0,200.9,52.6Z" /><path fill="#846f75" d="M200.9,149.846a2.5,2.5,0,0,0-2.5,2.5v6a2.5,2.5,0,0,0,5,0v-6A2.5,2.5,0,0,0,200.9,149.846Z" /><path fill="#846f75" d="M200.9,168.032a2.5,2.5,0,0,0-2.5,2.5v12.186a2.5,2.5,0,0,0,5,0V170.532A2.5,2.5,0,0,0,200.9,168.032Z" /><path fill="#846f75" d="M200.9,192.4a2.5,2.5,0,0,0-2.5,2.5v3.5h-3.5a2.5,2.5,0,0,0,0,5h6a2.5,2.5,0,0,0,2.5-2.5v-6A2.5,2.5,0,0,0,200.9,192.4Z" /><path fill="#846f75" d="M181.631,198.4H168.357a2.5,2.5,0,1,0,0,5h13.274a2.5,2.5,0,0,0,0-5Z" /><path fill="#846f75" d="M155.084,198.4h-6a2.5,2.5,0,0,0,0,5h6a2.5,2.5,0,0,0,0-5Z" /><path fill="#846f75" d="M55.1,160.846a2.5,2.5,0,0,0,2.5-2.5v-6a2.5,2.5,0,0,0-5,0v6A2.5,2.5,0,0,0,55.1,160.846Z" /><path fill="#846f75" d="M55.1,185.218a2.5,2.5,0,0,0,2.5-2.5V170.532a2.5,2.5,0,0,0-5,0v12.186A2.5,2.5,0,0,0,55.1,185.218Z" /><path fill="#846f75" d="M61.1,198.4H57.6v-3.5a2.5,2.5,0,0,0-5,0v6a2.5,2.5,0,0,0,2.5,2.5h6a2.5,2.5,0,1,0,0-5Z" /><path fill="#846f75" d="M87.643,198.4H74.369a2.5,2.5,0,0,0,0,5H87.643a2.5,2.5,0,1,0,0-5Z" /><path fill="#846f75" d="M106.916,198.4h-6a2.5,2.5,0,0,0,0,5h6a2.5,2.5,0,0,0,0-5Z" /><path fill="#a58bc9" d="M150.334,40.758,129.25,28.585a2.5,2.5,0,0,0-2.5,0L105.666,40.758a2.5,2.5,0,0,0-1.25,2.165V67.268a2.5,2.5,0,0,0,1.25,2.165L126.75,81.606a2.5,2.5,0,0,0,2.5,0l21.084-12.173a2.5,2.5,0,0,0,1.25-2.165V42.923A2.5,2.5,0,0,0,150.334,40.758ZM128,33.637l16.084,9.286L128,52.209l-16.084-9.286Zm0,42.917L109.416,65.825V47.253L126.75,57.261a2.5,2.5,0,0,0,2.5,0l17.334-10.008V65.825Z" /><path fill="#a58bc9" d="M150.334,186.567,129.25,174.394a2.5,2.5,0,0,0-2.5,0l-21.084,12.173a2.5,2.5,0,0,0-1.25,2.165v24.345a2.5,2.5,0,0,0,1.25,2.165l21.084,12.173a2.5,2.5,0,0,0,2.5,0l21.084-12.173a2.5,2.5,0,0,0,1.25-2.165V188.732A2.5,2.5,0,0,0,150.334,186.567ZM128,179.446l16.084,9.286L128,198.018l-16.084-9.286Zm0,42.917-18.584-10.729V193.062l17.334,10.007a2.5,2.5,0,0,0,2.5,0l17.334-10.007v18.572Z" /><path fill="#a58bc9" d="M223.238,113.662l-21.084-12.173a2.5,2.5,0,0,0-2.5,0L178.57,113.662a2.5,2.5,0,0,0-1.25,2.165v24.346a2.5,2.5,0,0,0,1.25,2.165l21.084,12.172a2.5,2.5,0,0,0,2.5,0l21.084-12.172a2.5,2.5,0,0,0,1.25-2.165V115.827A2.5,2.5,0,0,0,223.238,113.662ZM200.9,106.541l16.085,9.286L200.9,125.113l-16.084-9.286Zm0,42.917L182.32,138.729V120.157l17.334,10.008a2.5,2.5,0,0,0,2.5,0l17.334-10.008v18.572Z" /><path fill="#a58bc9" d="M77.43,113.662,56.346,101.489a2.5,2.5,0,0,0-2.5,0L32.762,113.662a2.5,2.5,0,0,0-1.25,2.165v24.346a2.5,2.5,0,0,0,1.25,2.165L53.846,154.51a2.5,2.5,0,0,0,2.5,0L77.43,142.338a2.5,2.5,0,0,0,1.25-2.165V115.827A2.5,2.5,0,0,0,77.43,113.662ZM55.1,106.541l16.083,9.286L55.1,125.113l-16.084-9.286Zm0,42.917L36.512,138.729V120.157l17.334,10.008a2.5,2.5,0,0,0,2.5,0L73.68,120.157v18.572Z" /></svg>
                            <div className="text-base text-gray-600 w-full text-center py-4">
                                Tools & Utilities
                            </div>
                            <div className="text-white text-lg w-full text-center">
                                Docker, Jenkins, nginx
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section className="sm:px-16 px-6 flex justify-center items-start font-poppins pt-14">
                <div className="xl:max-w-[1280px] flex flex-col w-full pb-10">
                    <div className="text-white">
                        <div className="text-5xl font-medium pb-5">
                            <span className="text-secondary">Have a look at <br />
                                Our </span> success stories
                        </div>
                        <div>
                            Over the years, Peerbits have delivered several customized solutions to their clients across the globe. You can get a closer look at few of such success stories here.
                        </div>
                    </div>
                    <div className="w-full flex-wrap flex gap-5 justify-center  mt-10">
                        {cases.map((content, index) => (
                            <Link key={index} to={content.link} className="w-80 mb-5">
                                <div className=" sm:mr-6">
                                    <div className="">
                                        <img src={content.img} className="w-full h-full object-cover object-center transition duration-500 scale-100 hover:scale-90 rounded" alt="" />
                                    </div>
                                    <div className="text-white mt-6">
                                        {content.content}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="w-full flex justify-center mt-14">
                        <Link to="/work">
                            <div className="text-secondary hover:text-white transition-colors duration-500">
                                View more case studies
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <div className={`bg-primary pt-10 ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default CaseStudies;