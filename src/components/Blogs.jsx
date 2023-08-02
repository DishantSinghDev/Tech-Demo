import {blogs, feedback} from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import BlogCard from "./BlogCard";
import HomeBlogsCard from "./HomeBlogsCards";

const fewBlogs = blogs.slice(0, 3)
const Blogs = () => (
    <section
        id="clients"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
        <div className=" absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40 " />

        <div className="w-full flex justify-between items-center md:flex-col flex-col sm:mb-16 mb-6 relative z-[1] ">
            <h2 className={styles.heading2}>
                Features blogs
            </h2>

            <div className="w-full md:mt-0 mt-6 py-5">
                <p className={`${styles.paragraph} text-left max-w-[800px]`}>
                    Stay ahead of the curve by reading our latest blog posts, which are based on real-world experience and the latest advancements in technology.
                </p>
            </div>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            <div className="flex flex-wrap -m-4">
                {fewBlogs.map((card,index) => (
                    <HomeBlogsCard key={index} {...card} index={index} />
                ))}
            </div>
        </div>
    </section>
);

export default Blogs;
