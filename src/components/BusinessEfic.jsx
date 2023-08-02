import React from "react";
import LogisticCards from "./LogisticCards";

const BusinessEfic = () => {
    const list1 = [
        {
            data: "Discovery"
        },
        {
            data: "Design"
        },
        {
            data: "Development"
        },
        {
            data: "Release"
        }
    ]
    return (
        <section className="bg-secondary font-poppins flex justify-center py-20 items-start sm:px-16 px-6">
            <div className="xl:max-w-[1280px] w-full flex flex-col">
                <div>
                    <p className="text-white tracking-widest">
                        LOGISTICS AND TRANSPORTATION SOFTWARE DEVELOPMENT SERVICES
                    </p>
                    <h1 className="md:text-[50px] text-[40px] font-medium mb-10 text-white max-w-4xl leading-normal">
                        To <span className="text-primary">improve</span> business efficiency
                    </h1>
                    <p className="text-white text-lg">
                        We understand your unique needs and use advanced technology to deliver a result-oriented solution.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full justify-center mt-10">
                    <LogisticCards img="https://i.ibb.co/wycH6Bj/icons8-key-128.png" head="Turnkey Software Development" content="Are you looking to transform your logistics business ecosystem and improve outcomes? Our expert logistics software developers can build a reliable and scalable solution that will help you meet your goals." list={list1} />
                    <LogisticCards img="https://i.ibb.co/wycH6Bj/icons8-key-128.png" head="Turnkey Software Development" content="Are you looking to transform your logistics business ecosystem and improve outcomes? Our expert logistics software developers can build a reliable and scalable solution that will help you meet your goals." list={list1} />
                    <LogisticCards img="https://i.ibb.co/wycH6Bj/icons8-key-128.png" head="Turnkey Software Development" content="Are you looking to transform your logistics business ecosystem and improve outcomes? Our expert logistics software developers can build a reliable and scalable solution that will help you meet your goals." list={list1} />
                    <LogisticCards img="https://i.ibb.co/wycH6Bj/icons8-key-128.png" head="Turnkey Software Development" content="Are you looking to transform your logistics business ecosystem and improve outcomes? Our expert logistics software developers can build a reliable and scalable solution that will help you meet your goals." list={list1} />
                </div>
            </div>
        </section>
    )
}

export default BusinessEfic;