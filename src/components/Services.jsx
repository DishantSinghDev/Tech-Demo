import { services } from "../constants";
import styles from "../style";
import ServiceCard from "./ServiceCard";

const Services = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className=" absolute z-[0] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40 " />

    <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1] ">
      <h2 className={styles.heading2}>
        Outsourced software development services
      </h2>

      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-full`}>
          At the core of our software development philosophy is the belief that meeting our clients' business needs is our top priority. Comprehensive software development outsourcing solutions to support your business.
        </p>
      </div>
    </div>

    {/*<div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">*/}
    <div
        className="grid  rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 mt-5 xl:grid-cols-3">
      {services.map((card, index) => (
        <ServiceCard key={index} {...card} />
      ))}
    </div>
  </section>
);

export default Services;
