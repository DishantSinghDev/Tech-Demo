import React from "react";
import styles from "./style";
import {
    CTA,
    Footer,
    Navbar,
    Stats,
    Testimonials,
    Hero,
    Business,
    Billing,
    Services
} from "./components";
import ClientLogo from "./components/ClientLogo";
import Casestudy from "./components/Casestudy";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import GetAFreeQuote from "./components/GetAFreeQuote";
import { HomeMeta } from "./constants/metaData"
import { Seo } from "./components";
// import AnimateText from "./components";

const Home = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
             <Seo
                title={HomeMeta.metaTitle}
                description={HomeMeta.metaDescription}
                ogImage={HomeMeta.ogImage}
                twitterImage={HomeMeta.twitterImage}
            />
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth} flex md:flex-row flex-col sm:pt-20 pt-20`}>
                    <Hero />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Services />
                    <Billing />
                    <Testimonials />
                    <ClientLogo />
                    <Casestudy />
                    <Blogs />
                    <Contact />
                    <GetAFreeQuote />
                    {/* <AnimateText text="Example of TextAnimation using AnimateText " /> */}
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home;