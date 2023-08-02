import React from 'react'
import {card, rapidgas} from "../assets";
import { Link } from 'react-router-dom';
import { caseStudiesLinks } from '../constants';

const CasestudeCarousal = () => {
  return (
    <div className=" rounded-xl bg-black-gradient-2 flex flex-col items-center px-5 py-12 mx-auto md:flex-row lg:px-16">
    <div
        className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
        <h1 className="font-poppins font-semibold mb-8 text-2xl tracking-tighter text-white md:text-5xl title-font"> Gas Delivery Service </h1>
        <p className="font-poppins font-normal text-[18px] mb-8 text-base leading-relaxed text-left text-white "> Gas delivery services obtained easy with our on-demand application. This on-demand application serves you to book your gas cylinder in seconds. Just download, register, and order your gas cylinder and you will receive it in an element of few minutes. </p>
        <div className="flex flex-col justify-center lg:flex-row">
            <Link to={caseStudiesLinks[0].link}
               className="inline-flex items-center font-semibold text-white md:mb-2 lg:mb-0 hover:text-white "
               title="read more"> Read more about it » </Link>
        </div>
    </div>
    <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
        <img className="object-cover object-center rounded-lg " alt="hero"
             src={rapidgas}/>
    </div>
</div>
  )
}

export default CasestudeCarousal