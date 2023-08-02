import React from "react";
import styles from "../style";
import {
    Footer,
    Navbar,
    ProcessComponent
} from "../components";

const IosProcessEx = () => {
    return (
        <div className="bg-primary w-full">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <ProcessComponent />
            <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default IosProcessEx;