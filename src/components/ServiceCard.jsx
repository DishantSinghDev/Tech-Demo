import CustomButton from "./CustomButton";
import GetStartedSM from "./GetStartedSM";
import {arrowUp} from "../assets";

const ServiceCard = ({content, name, title, img, icons, iconlink, link}) => (
    <div
        className="relative rounded m-2 group bg-black-gradient-2 transition hover:z-[1] hover:shadow-2xl xl:block">
        <div
            className="relative p-8 space-y-8 rounded-lg transition duration-300 group-hover:border group-hover:scale-90 h-[100%]">
            <div className="space-y-2">
                <h5 className="font-poppins font-semibold text-[24px] leading-[32px] text-gradient transition">{title}</h5>
                <p className="font-poppins font-normal text-[18px] leading-[30.4px] text-white my-5">{content}</p>
            </div>
            <div className="p-8 flex justify-center flex-row">
                <div className="flex justify-center flex-row absolute bottom-[70px]">
                {
                    icons.map((item,i) => (
                        <a key={i} href={iconlink[i]} title={name[i]}>
                            <img src={item} key={i} alt={name[i]} className="w-[48px] h-[48px] mr-2 rounded-full"/>
                        </a>
                    ))
                }
                </div>
            </div>
            <div className="flex items-center justify-center  ">
                <a href="#" className="flex justify-between items-center group-hover:text-white-600 absolute bottom-[20px]">
                    <span className="text-sm text-white">Read more</span>
                    <span
                        className="-translate-x-4 opacity-0 text-2xl ml-5 transition duration-300 group-hover:opacity-100 text-white group-hover:translate-x-0">→</span>
                </a>
            </div>
        </div>
    </div>
    // <div  absolute bottom-[20px]

    //     className="flex justify-between flex-col px-8 py-10 rounded-[20px]  max-w-[350px] md:mr-8 sm:mr-4 mr-0 my-5 transition duration-300 bg-black-gradient-2 box-shadow">
    // <div className="relative group bg-black-gradient-2 transition hover:z-[1] hover:shadow-2xl xl:block">
    //     <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-black-gradient group-hover:border group-hover:scale-90 h-[100%]">
    //         <h3 className="font-poppins font-semibold text-[24px] leading-[32px] text-white">
    //             {title}
    //         </h3>
    //         <p className="font-poppins font-normal text-[18px] leading-[30.4px] text-white my-5">
    //             {content}
    //         </p>
    //         <div className="flex justify-center flex-col absolute bottom-[20px] mt-10">
    //             <div className="flex justify-center flex-row">
    //                 {
    //                     icons.map((item,i) => (
    //                         <a key={i} href={iconlink[i]} title={name[i]}>
    //                             <img src={item}  alt={name[i]} className="w-[48px] h-[48px] mr-2 rounded-full"/>
    //                         </a>
    //                     ))
    //                 }
    //             </div>
    //             <a href="#" className="flex justify-between items-center group-hover:text-yellow-600 ">
    //                 <span className="text-sm text-gradient">Read more</span>
    //                 <span
    //                     className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
    //             </a>
    //         </div>
    //
    //         {/*<div className="flex justify-center items-end max-w-[370px] mt-5">*/}
    //         {/*    <CustomButton link={link} name={"Read More"}/>*/}
    //         {/*</div>*/}
    //     </div>
    // </div>
);

export default ServiceCard;
