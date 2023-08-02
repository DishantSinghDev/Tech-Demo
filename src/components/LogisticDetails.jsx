import React from "react";
import { Link } from "react-router-dom";
import GradientHexagon from "./GradientHexagon";

const LogisticDetails = () => {
    return (
        <section className="bg-black-gradient-2 font-poppins flex justify-center py-10 items-start sm:px-16 px-6">
            <div className="xl:max-w-[1280px] justify-between w-full h-full items-center flex md:flex-row flex-col">
                <div className="text-[30px] font-medium mb-10 text-white leading-normal">
                    <h1>
                        Take your logistics business to the next level by <span className="text-primary">creating an innovative software</span> solution with our experts.
                    </h1>
                    <Link to="/request-quote" className="">
                        <button className="border-2 border-secondary mt-12 rounded-full bg-transparent text-secondary text-xl px-10 py-2 transition duration-300 hover:bg-secondary hover:text-primary ">
                            Get a free consultation from our expert
                        </button>
                    </Link>
                </div>
                <div className="mx-auto mt-10 md:mt-0 flex justify-center grow-0 shrink-0 basis-auto w-full md:flex md:grow-0 md:shrink-0 md:basis-auto md:w-[45%]">
                    <GradientHexagon />
                </div>
            </div>
        </section>
    )
}
export default LogisticDetails;