import React from "react";

const PowerClients = () => {
    return (
        <section className="font-poppins flex justify-center py-20 items-start sm:px-16 px-6">
                <div className="xl:max-w-[1280px] justify-between w-full flex flex-col">
                    <div className="text-4xl font-medium mb-11 text-white leading-normal">
                        <h1>
                            Power we added to our <span className="text-secondary">valued clients</span>
                        </h1>
                    </div>
                    <div className="flex flex-wrap w-full text-secondary justify-center xs:justify-between">
                        <div className="flex flex-col w-40 items-center mb-12">
                            <h1 className="text-5xl font-medium mb-10">
                                81%
                            </h1>
                            <p className="w-full text-center text-white text-lg font-medium">
                                Increase in new user acquisition
                            </p>
                        </div>
                        <div className="flex flex-col w-40 items-center mb-12">
                            <h1 className="text-5xl font-medium mb-10">
                                4X
                            </h1>
                            <p className="w-full text-center text-white text-lg font-medium">
                                Growth in the customer base
                            </p>
                        </div>
                        <div className="flex flex-col w-40 items-center mb-12">
                            <h1 className="text-5xl font-medium mb-10">
                                55%
                            </h1>
                            <p className="w-full text-center text-white text-lg font-medium">
                                Improvement in customer engagement
                            </p>
                        </div>
                        <div className="flex flex-col w-40 items-center">
                            <h1 className="text-5xl font-medium mb-10">
                                59%
                            </h1>
                            <p className="w-full text-center text-white text-lg font-medium">
                                Reduction in customer attrition
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default PowerClients