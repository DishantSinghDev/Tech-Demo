import React from "react";

const Methodology = ({className}) => {
    return (
        <section className={`${className} bg-black-gradient-2 font-poppins flex justify-center py-20 items-start sm:px-16 px-6`}>
            <div className="xl:max-w-[1280px] w-full flex flex-col">
                <div>
                    <h1 className="md:text-[50px] text-[40px] font-medium mb-10 text-white max-w-4xl leading-normal">
                        Our Lean-Agile <span className="text-primary">Methodology</span>
                    </h1>
                    <p className="text-white text-lg mb-11">
                        The development roadmap designed only for your business success
                    </p>
                </div>
                <div>
                    <img className="w-full h-full" src="https://www.peerbits.com/static/26724226f2c167bcda45a2943db0f4fc/71b3f/fintech-methodology-img.webp" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Methodology;