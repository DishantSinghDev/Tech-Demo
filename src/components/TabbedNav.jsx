import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';

const TabbedNavigation = ({ categories, onCategorySelect, defaultSelectedCategory }) => {
    const swiperRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState(defaultSelectedCategory);


    useEffect(() => {
        const swiper = new Swiper(swiperRef.current, {
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });


        return () => {
            swiper.destroy();
        };
    }, []);


    const handlePrevClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };


    return (
        <div id="tabbed-nav" className={`sticky top-24 z-40 bg-primary py-4 sm:px-16 px-6 flex justify-center items-start`}>
            <div className="swiper-container xl:max-w-[1280px] sm:text-sm xs:te overflow-hidden w-full relative" ref={swiperRef}>
                <div style={{ width: '100px' }} className="swiper-wrapper">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`${selectedCategory === category ? 'bg-white text-primary hover:text-primary' : ''} min-w-max relative ml-12 text-white py-2 px-4 rounded-full  max-w-max border border-[#fff] swiper-slide hover:text-green-300 overflow-hidden shadow-md `}
                            style={{ whiteSpace: 'nowrap' }}
                            onClick={() => {
                                onCategorySelect(category);
                                handleCategorySelect(category)
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div onClick={handlePrevClick} className="z-[9] mr-4 swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2">
                    <button className="rounded-lg text-white p-3 bg-gray-600 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="20px" height="20px" fillRule="nonzero">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                <g transform="translate(233.82841,247.63921) rotate(180) scale(5.12,5.12)">
                                    <path d="M19.71875,8.28125l-1.4375,1.4375l15.28125,15.28125l-15.28125,15.28125l1.4375,1.4375l16,-16l0.6875,-0.71875l-0.6875,-0.71875z"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <div onClick={handleNextClick} className="z-10 swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2">
                    <button className="rounded-lg text-white p-3 bg-gray-600 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 50 50" width="20px" height="20px"><path d="M 19.71875 8.28125 L 18.28125 9.71875 L 33.5625 25 L 18.28125 40.28125 L 19.71875 41.71875 L 35.71875 25.71875 L 36.40625 25 L 35.71875 24.28125 Z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TabbedNavigation;
