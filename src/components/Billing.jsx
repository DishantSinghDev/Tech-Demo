import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import GetStartedSM from "./GetStartedSM";
import {features, industry} from "../constants";

const Billing = () => (
        <section id="product" className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
                    {industry.map((feature, index) => (
                        <GetStartedSM key={index} name={feature.title} link={feature.link} index={feature.id} icon={feature.icon}/>
                    ))}
                </div>

                {/* gradient start */}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                {/* gradient end */}
            </div>

            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Industry Verticals
                    <br className="sm:block hidden" /> We Cater To
                </h2>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    We help our clients across diverse industries rapidly navigate technology changes and drive digital transformation. We've done everything from enterprise apps to innovative consumer-focused apps and multiplayer games.
                </p>

                {/*<div className="flex flex-row flex-wrap sm:mt-10 mt-6">*/}
                {/*  <img*/}
                {/*    src={apple}*/}
                {/*    alt="google_play"*/}
                {/*    className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"*/}
                {/*  />*/}
                {/*  <img*/}
                {/*    src={google}*/}
                {/*    alt="google_play"*/}
                {/*    className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"*/}
                {/*  />*/}
                {/*</div>*/}
            </div>
    </section>
);

export default Billing;
