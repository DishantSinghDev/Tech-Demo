import React from "react";
import { FlutterComponent } from "../components";
import styles from "../style";
import {
    Footer,
    Navbar
} from "../components";

const FlutterEx = () => {
    return (
        <div className="bg-primary w-full">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <FlutterComponent />
            <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default FlutterEx;