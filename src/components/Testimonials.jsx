import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { Link } from "react-router-dom";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className=" absolute z-[0] w-[60%] h-[60%] rounded-full bottom-40 " />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>

      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Our esteemed global clients have highly praised us for the quality of our software development services.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
        {feedback.map((card, index) => (
          <FeedbackCard key={index} {...card} index={index} />
        ))}
      </div>
    </div>
    <div className="w-full flex justify-center mt-14">
      <Link to="">
        <div className="text-secondary hover:text-white transition-colors duration-500">
          View more testimonials
        </div>
      </Link>
    </div>
  </section>
);

export default Testimonials;
