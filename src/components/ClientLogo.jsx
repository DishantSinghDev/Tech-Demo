import { card } from "../assets";
import styles, { clientLayout } from "../style";
import Button from "./Button";


const ClientLogo = () => {
    const list = [
        {
            link: "https://express.abdaar.com/storage/app/uploads/public/5f1/374/aeb/5f1374aeb55d5399905792.png",
            alt: "abdaar"
        },
        {
            link: "https://i.ibb.co/4SCdHNr/image-removebg-preview-2.png",
            alt: "Solo Salon"
        },
        {
            link: "https://i.ibb.co/LkvvVX0/image-removebg-preview-3-1.png",
            alt: "jumbogaz"
        },
        {
            link: "https://i.ibb.co/f1GJ2Cv/image-removebg-preview-4.png",
            alt: "dodo1"
        },
        {
            link: "https://play-lh.googleusercontent.com/mvBig7V0U9g7xfpRlAgqxOqLSQmM5P7JsiWTiaQ2hffODkrRxHlvdjKpG_qChgC3zeY=w480-h960-rw",
            alt: "Dhabi"
        },
        {
            link: "https://i.ibb.co/qkcQMft/image-removebg-preview-5.png",
            alt: "Gift’em"
        },
        {
            link: "https://i.ibb.co/SNHpmwb/image-removebg-preview-6.png",
            alt: "Vite LPG"
        },
        {
            link: "https://i.ibb.co/pX5vkFD/image-removebg-preview-7-1.png",
            alt: "Raynsport"
        },
    ]
    return (
        <section className={clientLayout.section}>
            <div className={clientLayout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Our Esteemed Clients
                </h2>

                <p className={`${styles.paragraph}  mt-5`}>
                    By assembling a team of dedicated offshore developers, DishIs Technology has successfully aided global enterprises in their growth by providing top-quality software solutions.
                </p>
            </div>

            <div className={clientLayout.sectionImg}>
                <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 flex gap-10 items-center justify-center flex-wrap">
                    {list.map((links, index) => (
                        <div
                            key={index}
                            className="w-1/3 xs:w-1/5 flex items-center">
                            <img tabIndex="0" className="grayscale transition duration-500 hover:grayscale-0 " src={links.link}
                                alt={links.alt} role="img" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ClientLogo;
