import React from "react";
import {
    Footer,
    Navbar,
} from "../components";
import styles from "../style";
import GetAFreeQuote from "../components/GetAFreeQuote";
import { GetAFreeQuoteMeta } from "../constants/metaData"
import { Seo } from "../components";

const RequestQuote = () => {
    return (
        <div className="bg-primary w-full overflow-hidden md:overflow-visible">
            <Seo
                title={GetAFreeQuoteMeta.metaTitle}
                description={GetAFreeQuoteMeta.metaDescription}
                ogImage={GetAFreeQuoteMeta.ogImage}
                twitterImage={GetAFreeQuoteMeta.twitterImage}
            />
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <GetAFreeQuote className="mt-28"/>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default RequestQuote;