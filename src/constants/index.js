import {
    people01,
    people02,
    people03,
    facebook,
    instagram,
    linkedin,
    twitter,
    airbnb,
    binance,
    coinbase,
    dropbox,
    send,
    shield,
    star,
    creativity,
    excellence,
    trust,
    healthcare,
    logistic,
    oilgas,
    education,
    hotel,
    iot,
    webrtc,
    blockchain,
    arvr,
    iotRound,
    webrtcRound,
    blockchainRound,
    arvrRound,
    reactRound,
    ios,
    iOSRound,
    andRound,
    angularRound,
    dotnetRound,
    cloudComputing,
    cloudMigration,
    cicd,
    healthcareSquare,
    manufacturing,
    media,
    construction,
    educationsqure,
    ecommerceSqure,
    socialnetworking,
    retail,
    realestate,
    energy,
    hospitality,
    logistics,
    flutterblog,
    behance,
    dribble,
} from "../assets";
import CompanyDropdown from "../navigation/DropdownContents/CompanyDropdown";
import DevelopersDropdown from "../navigation/DropdownContents/DevelopersDropdown";
import HireDedicatedDropdown from "../navigation/DropdownContents/HireDedicatedDropdown";
import ProductsDropdown from "../navigation/DropdownContents/ProductsDropdown";

export const caseStudiesLinks = [
    {
        link: "/case-studies/bridging_the_gap_in_online_education_integration_of_ai_and_gaming"
    }
]

export const navLinks = [{
        id: "home",
        title: "Company",
        Dropdown: <ProductsDropdown/>,
    },
    {
        id: "features",
        title: "Services",
        Dropdown: <DevelopersDropdown/>,
    },
    {
        id: "product",
        title: "Industry",
        Dropdown: <CompanyDropdown/>,
    },
    {
        id: "product1",
        title: "Hire Dedicated",
        Dropdown: <HireDedicatedDropdown/>,
    },
    {
        id: "clients1",
        Dropdown: "",
        title: "Works",
    },
    {
        id: "clients2",
        Dropdown: "",
        title: "Blog",
    },
    {
        id: "clients3",
        Dropdown: "",
        title: "Schedule Call",
    },
    {
        id: "clients",
        Dropdown: "",
        title: "Get a free Quote",
    },
];

export const features = [{
        id: "feature-1",
        icon: creativity,
        title: "Creativity",
        content: "With extensive industry experience, we offer a wide range of customer-focused services by empowering enterprises through flexible and cutting-edge global delivery models.",
    },
    {
        id: "feature-2",
        icon: excellence,
        title: "Excellence",
        content: "Our dedication to continuous improvement allows us to turn the ordinary into the extraordinary.",
    },
    {
        id: "feature-3",
        icon: trust,
        title: "Integrity & Trust",
        content: "We believe that actions speak louder than words, and we work hard to ensure that our actions align with our commitments.",
    },
];

export const services = [{
        id: "service-1",
        title: "Software Development",
        content: "Our custom software development services leverage the power of technology to create industry-specific solutions that unlock tomorrow's opportunities.",
        icons: [healthcare, logistic, oilgas, education, hotel],
        iconlink: ["/", "/", "/", "/", "/"],
        name: ["Health Care", "Logistic", "Oil & Gas", "Education", "Tours & Travel"],
        link: "/"
    },
    {
        id: "service-2",
        title: "Digital Transformation",
        content: "Using our distinctive approach to digital transformation, we assist businesses in undergoing fundamental changes and adapting quickly to capitalize on future opportunities.",
        icons: [iotRound, webrtcRound, blockchainRound, arvrRound],
        iconlink: ["/", "/", "/", "/"],
        name: ["IOT", "WebRtc", "Blockchain", "AR/VR"],
        link: "/"
    },
    {
        id: "service-3",
        title: "Resource as a Service",
        content: "Our team consists of experienced developers who specialize in creating, fixing, and delivering high-quality products within established timelines.",
        icons: [reactRound, iOSRound, andRound, angularRound, dotnetRound],
        iconlink: ["/", "/", "/", "/", "/"],
        name: ["React Native/JS", "iOS/Swift", "Android", "Angular", "Dot Net"],
        link: "/"
    },
    {
        id: "service-4",
        title: "DevOps Service",
        content: "Our range of DevOps services includes but is not limited to CI/CD, Microservices, Platform as a Service, and other related offerings.",
        icons: [cloudComputing, cloudMigration, cicd],
        iconlink: ["/", "/", "/"],
        name: ["Cloud Computing", "Cloud Migration", "CI CD"],
        link: "/"
    },
];

export const industry = [{
        id: "service-1",
        title: "Health Care",
        icon: healthcareSquare,
        link: "/"
    },
    {
        id: "service-2",
        title: "Manufacturing",
        icon: manufacturing,
        link: "/"
    },
    {
        id: "service-3",
        title: "Media & Entertainment",
        icon: media,
        link: "/"
    },
    {
        id: "service-4",
        title: "Construction",
        icon: construction,
        link: "/"
    },
    {
        id: "service-5",
        title: "Education / eLearning",
        icon: educationsqure,
        link: "/"
    },
    {
        id: "service-6",
        title: "eCommerce",
        icon: ecommerceSqure,
        link: "/"
    },
    {
        id: "service-7",
        title: "Social Networking",
        icon: socialnetworking,
        link: "/"
    },
    {
        id: "service-8",
        title: "Retail",
        icon: retail,
        link: "/"
    },
    {
        id: "service-9",
        title: "Real Estate",
        icon: realestate,
        link: "/"
    },
    {
        id: "service-10",
        title: "Energy",
        icon: energy,
        link: "/"
    },
    {
        id: "service-11",
        title: "Travel & Hospitality",
        icon: hospitality,
        link: "/"
    },
    {
        id: "service-12",
        title: "Logistics",
        icon: logistics,
        link: "/"
    },
];

export const feedback = [{
        id: "feedback-1",
        subheader: "Amazing efforts and On time Delivery",
        content: "I would highly recommend DishIs Technology, it has been a pleasure to work with them on my App Development. I am so glad to have you as a development partner. I wish him the best of luck for success. A thing which I have observed that is Quality Proof and On-Time Delivery for My all Defined Milestone irrespective of the situation but never missed the Delivery timeline.",
        name: "Joe Martin",
        title: "Nena Celeste",
        img: people01,
    },
    {
        id: "feedback-3",
        subheader: "Great Work & RIch Experience to achieve my business GOAL",
        content: "I have been working with DishIs Technology for the last 8 months. It’s been a wonderful experience so far with them, On-Time Delivery with Quality Proof products have been delivered. The Most Important aspect is Daily Call Updates and Project Progress to me with the latest Development and enhancement on my Product. I would give them the highest rating for superb efforts",
        name: "Vincent Mogaka Nyabuto",
        title: "Cladchat (Founder)",
        img: people03,
    },
    {
        id: "feedback-2",
        subheader: "",
        content: "<b> DishIs Technology </b> did amazing work, they committed to delivering and they have the right skills and experience to deliver the scope of work on time with high quality, most importantly, they have a nice attitude and easy going persons that makes you feel comfortable working with them.",
        name: "Mohammad Al-Masri",
        title: "Scanning Application",
        img: people02,
    },
];


// For ImageSlider

export const ImageSlider = [
    {
        img: "https://www.peerbits.com/static/2c1109ccb68573d2c26b7cffd4e383cb/a3213/online-exam-platform-development-slider-4.webp"
    },
    {
        img: "https://www.peerbits.com/static/25c9399efc2d6ff33abe8610bc0bcca4/a3213/online-exam-platform-development-slider-3.webp"
    },
    {
        img: "https://www.peerbits.com/static/132ff3d69c25275e7b41ecac3da1c145/a3213/online-exam-platform-development-slider-2.webp"
    },
    {
        img: "https://www.peerbits.com/static/178e0018eb70cba636d2ce94cfc7e993/a3213/online-exam-platform-development-slider-1.webp"
    },
]


export const cases = [
    {
        id: {
            first_id: "All",
            seconds_id: "SaaS"
        },
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Flutter Beta Framework to Native App Design/Development",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
    },
    {
        id: {
            first_id: "All",
            seconds_id: "IoT"
        },
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Benefits of outsourcing PHP development",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
    },
    {
        id: {
            first_id: "All",
            seconds_id: "Logistics"
        },
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Flutter Beta Framework to Native App Design/Development",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
    },
]

export const blogs = [
    {
        id: {
            first_id: "All",
            seconds_id: "SaaS"
        },
        date: "May 22, 2023",
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Flutter Beta Framework to Native App Design",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
        time: 3,  // In Minutes only
    },
    {
        id: {
            first_id: "All",
            seconds_id: "IoT"
        },
        date: "May 22, 2023",
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Benefits of outsourcing PHP development",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
        time: 5,
    },
    {
        id: {
            first_id: "All",
            seconds_id: "SaaS"
        },
        date: "May 22, 2023",
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Flutter Beta Framework to Native App Design",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
        time: 8,
    },
    {
        id: {
            first_id: "All",
            seconds_id: "Software"
        },
        date: "May 22, 2023",
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Flutter Beta Framework to Native App Design",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
        time: 2,
    },
    {
        id: {
            first_id: "All",
            seconds_id: "SaaS"
        },
        date: "May 22, 2023",
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Benefits of outsourcing PHP development",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
        time: 6,
    },
    {
        id: {
            first_id: "All",
            seconds_id: "IoT"
        },
        date: "May 22, 2023",
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Flutter Beta Framework to Native App Design",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
        time: 8,
    },
    {
        id: {
            first_id: "All",
            seconds_id: "Software"
        },
        date: "May 22, 2023",
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Flutter Beta Framework to Native App Design",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
        time: 3,
    },
    {
        id: {
            first_id: "All",
            seconds_id: "SaaS"
        },
        date: "May 22, 2023",
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Benefits of outsourcing PHP development",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
        time: 5,
    },
    {
        id: {
            first_id: "All",
            seconds_id: "Logistics"
        },
        date: "May 22, 2023",
        content: "Fast Development with Hot Reloading: With Flutter’s Hot Reload, developers can preview code changes in the emulator, simulators, or hardware for Android or iOS, without recompiling the app.",
        title: "Flutter Beta Framework to Native App Design",
        img: 'https://www.peerbits.com/static/cf4e12146b63e518afa07218c0aa5c95/d80fd/centralized-social-platform-development-thumb.webp',
        time: 6,
    },
];

export const stats = [{
        id: "stats-1",
        title: "Projects Completed",
        value: "600+",
    },
    {
        id: "stats-2",
        title: "Years of Experience",
        value: "7+",
    },
    {
        id: "stats-3",
        title: "Specific Industry",
        value: "20+",
    },
];

export const footerLinks = [{
        title: "Useful Links",
        links: [{
                name: "Content",
                link: "https://www.hoobank.com/content/",
            },
            {
                name: "How it Works",
                link: "https://www.hoobank.com/how-it-works/",
            },
            {
                name: "Create",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "Explore",
                link: "https://www.hoobank.com/explore/",
            },
            {
                name: "Terms & Services",
                link: "https://www.hoobank.com/terms-and-services/",
            },
        ],
    },
    {
        title: "Community",
        links: [{
                name: "Help Center",
                link: "https://www.hoobank.com/help-center/",
            },
            {
                name: "Partners",
                link: "https://www.hoobank.com/partners/",
            },
            {
                name: "Suggestions",
                link: "https://www.hoobank.com/suggestions/",
            },
            {
                name: "Blog",
                link: "https://www.hoobank.com/blog/",
            },
            {
                name: "Newsletters",
                link: "https://www.hoobank.com/newsletters/",
            },
        ],
    },
    {
        title: "Partner",
        links: [{
                name: "Our Partner",
                link: "https://www.hoobank.com/our-partner/",
            },
            {
                name: "Become a Partner",
                link: "https://www.hoobank.com/become-a-partner/",
            },
        ],
    },
];

export const socialMedia = [{
        id: "social-media-1",
        icon: dribble,
        link: "https://dribbble.com/DishIs-technology",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/DishIs.technology",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://twitter.com/DishIsT",
    },
    {
        id: "social-media-4",
        icon: behance,
        link: "https://www.behance.net/DishIs/",
    },
];

export const clients = [{
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];