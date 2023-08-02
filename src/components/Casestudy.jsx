import { card, rapidgas } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import React from "react";
import GetStarted from "./GetStarted";
import GetStartedDynamic from "./GetStartedDynamic";
import { Navigation, Pagination, A11y, Scrollbar } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import CasestudeCarousal from "./CasestudeCarousal";
import 'swiper/css';
import { ReactComponent as Arrow } from "../assets/dropdown-1.svg";


const Casestudy = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ">
        <div className="flex flex-col justify-between  w-full">
          <h2 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[80.8px] leading-[50px]">
            <span className="text-white">Our success stories</span>
          </h2>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left w-[90%] `}>
              We deliver flawless digital products tailored to specific industries by engaging the top talent in India, which every client desires.
            </p>
          </div>
        </div>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStartedDynamic link={"/work"} title={"Case Studies"} name={"More"} />
        </div>
      </div>
      <Swiper

        modules={[Navigation, Pagination, A11y, Scrollbar]}
        className="mySwiper"
        slidesPerView={"auto"}
        spaceBetween={50}

      >
        <SwiperSlide><CasestudeCarousal /></SwiperSlide>
        <SwiperSlide><CasestudeCarousal /></SwiperSlide>
        <SwiperSlide><CasestudeCarousal /></SwiperSlide>
        <SwiperButtonNext />
      </Swiper>


      <div className={`ss:hidden mt-10 ${styles.flexCenter}`}>
        <GetStartedDynamic link={"/case-studies"} title={"Case Studies"} name={"More"} />
      </div>
    </section>
  );
}
export default Casestudy;



const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center mt-4">
      <button onClick={() => swiper.slidePrev()} className="mr-1 rounded text-white p-2 bg-gray-500 rotate-90"><Arrow className="!mt-0" /></button>
      <button onClick={() => swiper.slideNext()} className="ml-1 rounded  text-white p-2 bg-gray-500 rotate-[270deg]"><Arrow className="!mt-0" /></button>
    </div>
  );
};