import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { blogs } from "../constants";
import SquareCards from './SquareCards';

const CardsSwiper = () => {
    const swiperRef = useRef(null);
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.on('slideChange', () => {
                const swiper = swiperRef.current.swiper;
                setIsFirstSlide(swiper.isBeginning);
                setIsLastSlide(swiper.isEnd);
                setActiveIndex(swiper.activeIndex);
            });
        }
    }, []);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleButtonClick = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    const FirstThreeBlogs = blogs.slice(0, 3);

    return (
        <div>
            <Swiper ref={swiperRef} spaceBetween={50} slidesPerView="auto">
                {FirstThreeBlogs.map((content, index) => (
                    <SwiperSlide style={{textAlign: "start"}} className='h-auto w-full' key={index} >
                        <SquareCards
                            title={content.title}
                            content={content.content}
                            id={content.id.seconds_id}
                            img={content.img}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-between w-full mt-5">
                <div>
                    {FirstThreeBlogs.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            className={`rounded text-white px-4 py-2 mr-1 bg-gray-600 shadow-md ${activeIndex === index ? 'bg-blue-500 opacity-50' : ''
                                }`}
                        >
                        </button>
                    ))}
                </div>
                <div>

                    <button
                        id="prevButton"
                        onClick={goPrev}
                        className={`rounded-lg text-white p-3 bg-gray-600 shadow-md mr-3 ${isFirstSlide ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 256 256"
                            width="20px"
                            height="20px"
                            fillRule="nonzero"
                        >
                            <g
                                fill="#ffffff"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                style={{ mixBlendMode: 'normal' }}
                            >
                                <g transform="translate(233.82841,247.63921) rotate(180) scale(5.12,5.12)">
                                    <path d="M19.71875,8.28125l-1.4375,1.4375l15.28125,15.28125l-15.28125,15.28125l1.4375,1.4375l16,-16l0.6875,-0.71875l-0.6875,-0.71875z"></path>
                                </g>
                            </g>
                        </svg>
                    </button>

                    <button
                        id="nextButton"
                        onClick={goNext}
                        className={`rounded-lg text-white p-3 bg-gray-600 shadow-md ${isLastSlide ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 50 50" width="20px" height="20px">
                            <path d="M 19.71875 8.28125 L 18.28125 9.71875 L 33.5625 25 L 18.28125 40.28125 L 19.71875 41.71875 L 35.71875 25.71875 L 36.40625 25 L 35.71875 24.28125 Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardsSwiper;
