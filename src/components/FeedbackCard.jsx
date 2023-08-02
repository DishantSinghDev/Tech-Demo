import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img, subheader, index }) => (
    <>
        {
            index === 0 ? (
                <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-black-gradient-2 text-center sm:p-8">
                    <div className="h-full flex flex-col justify-center space-y-4">
                        <img className="w-20 h-20 mx-auto rounded-full"
                             src={img}
                             alt="user avatar" height="220" width="220" loading="lazy"/>
                        {
                            subheader !== "" &&  <p className="font-poppins font-semibold text-[20px] leading-[32.4px] text-white my-10">{subheader}</p>
                        }
                        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10" dangerouslySetInnerHTML={{__html: content}}></p>
                        <div>
                            <h6 className="font-poppins font-semibold text-[20px] leading-[32px] text-white leading-none">{name}</h6>
                            <span className="font-poppins font-normal text-xs leading-[24px] text-dimWhite">{title}</span>
                        </div>
                    </div>
                </div>
            ):(
                <div className="p-6 border border-gray-100 rounded-xl bg-black-gradient-2 sm:flex sm:space-x-8 sm:p-8">
                    <img className="w-20 h-20 mx-auto rounded-full"
                         src={img}
                         alt="user avatar" height="220" width="220" loading="lazy"/>
                    <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                        {
                            subheader !== "" &&  <p className="font-poppins font-semibold text-[20px] leading-[32.4px] text-white">{subheader}</p>
                        }
                        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white" dangerouslySetInnerHTML={{__html: content}}></p>
                        <div>
                            <h6 className="font-poppins font-semibold text-[20px] leading-[32px] text-white leading-none">{name}</h6>
                            <span className="font-poppins font-normal text-xs leading-[24px] text-dimWhite">{title}</span>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  // <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card transition duration-300">
  //   <img
  //     src={quotes}
  //     alt="double_quotes"
  //     className="w-[42.6px] h-[27.6px] object-contain"
  //   />
  //
  //   <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
  //     {content}
  //   </p>
  //
  //   <div className="flex flex-row">
  //     <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
  //
  //     <div className="flex flex-col ml-4">
  //       <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
  //         {name}
  //       </h4>
  //
  //       <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
  //         {title}
  //       </p>
  //     </div>
  //   </div>
  // </div>
);

export default FeedbackCard;
