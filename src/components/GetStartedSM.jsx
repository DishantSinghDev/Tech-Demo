import styles from "../style";
import { arrowUp } from "../assets";

const GetStartedSM = ({ icon, name, link, index }) => (
    <a href={link} key={index}
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-lg bg-blue-gradient p-[2px] relative cursor-pointer`}
    >
      <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-lg`}
      >
        <div className={`${styles.flexStart} flex-row absolute top-[20px]`}>
          <img
              src={icon}
              alt="arrow-up"
              className="w-[50px] h-[50px] mb-5 object-contain"
          />
        </div>

        <p className="font-poppins justify-center items-center font-medium text-center absolute bottom-[10px] text-[16px] px-2 leading-[23.4px]">
          <span className="text-gradient justify-center items-center text-center">{name}</span>
        </p>
      </div>
    </a>
);

export default GetStartedSM;
