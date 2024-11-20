export const styles = {
    // ============ Excellence section
    exheadStyle: "text-[#016623] pb-6 text-[30px]",
    excard: "px-5 py-10 rounded-2xl",
    excardHead: "capitalize pb-3 text-2xl md:text-[24px]",
    excardImg: "py-4",
    excardContent: "text-sm md:text-base",

    // ================ Contact Section
    label: "font-bold text-left block pb-2 text-textGray",
    input: `w-full pl-5 pr-3 py-2 rounded-lg
            border border-gray-700 focus:border-darkGreen
            transition duration-200 placeholder:text-sm md:w-[90%] 
            `,

    // ================ Footer
    footerHead: "font-semibold text-[#016622] capitalize text-[24px]",
    contactWrap: "flex items-center gap-4",
}

// ============= Navigation Links
export const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Products", link: "#products" },
    { name: "Services", link: "#services" },
    { name: "Contact us", link: "#contact" },
]

// ============== tabs data
export const tabNav = [
    { id: 1, name: "Sesame" },
    { id: 2, name: "Cashew (RCN)" },
    { id: 3, name: "Hibiscus flower" },
    { id: 4, name: "Ginger" },
    { id: 5, name: "Cocoa" },
    { id: 6, name: "Cassia Tora" },
]

export const tabsData = [
    {
        id: 1,
        img: "/sesame.png",
        mainHead: "Sesame Seeds",
        desc: `
            We are one of the top exporters of this commodity from Nigeria, 
            Our cutting edge facilities allows us to provide natural sesame 
            seeds that are cleaned and fulfill consumer specifications.
        `,
        specs: [
            "Purity: 99% Min",
            "Admixture: Less than .5-1%",
            "Moisture: Less than 6%",
            "Oil content: 52% Min",
            "FFA: 2% Maximum"
        ]
    },
    {
        id: 2,
        img: "/cashew.png",
        nav: "",
        mainHead: "Cashew (RCN)",
        desc: `
            We are committed to supply raw cashew nuts having good quality yield.
        `,
        specs: [
            "Moisture: 10% Maximum",
            "Admixture: 2% Maximum",
            "Total Defective: Less than 5%",
            "Nut Count: Between 180 – 205 nuts/kg (Kogi Quality)",
            "Nut Count: Between 170 – 190 nuts/kg (Ogbomosho",
            "KOR (Kernel Output Ratio): 48lbs Plus"
        ]
    },
    {
        id: 3,
        img: "/hibiscus.png",
        nav: "",
        mainHead: "Hibiscus flower",
        desc: `
            We have a comprehensive facility for supplying freshly cleaned hibiscus 
            flowers. We have a continuous record of high-quality Hibiscus flowers 
            that meet the following specifications:
        `,
        specs: [
            "Color: Bright Red/Dark Red",
            "Purity: More than 98%",
            "Moisture content: 8%–10%",
            "Full Flower: 85-90%",
            "Foreign matter: Less than 0.5%"
        ]
    },
    {
        id: 4,
        img: "/ginger.png",
        nav: "",
        mainHead: "Ginger",
        desc: `
           We provide the finest quality Dried Split Ginger. Our highly qualified crew 
           sources, processes, and inspects, ensuring that the cleaning is done properly 
           and the finished product fulfills international standards.
        `,
        specs: [
            "Hand Picked: European Standard ( Big pieces of whitish ginger – No Roots, No Mosels, No Powder Full of Natural Aroma)",
            "ASTA quality: (No Roots, No Mosel, No Powder Full of natural Aroma)",
            "Normal Quality: Best Quality whitish Ginger (Root, Mosel, powder Max 5%)",
            "Moisture: Max 10%",
            "Oil content: Max 2%",
            "Impurities: Less than 1%",
            "Color: Whitish",
            "Packaging: 40kg pp white bags"
        ]
    },
    {
        id: 5,
        img: "/cocoa.png",
        nav: "",
        mainHead: "Cocoa",
        desc: `
           The cocoa bean, also called cacao bean, cocoa and cacao is the dried and fully fermented seed of Theobroma cacao, from which cocoa solids.
        `,
        specs: [
            "Hand Picked: European Standard ( Big pieces of whitish ginger – No Roots, No Mosels, No Powder Full of Natural Aroma)",
            "ASTA quality: (No Roots, No Mosel, No Powder Full of natural Aroma)",
            "Normal Quality: Best Quality whitish Ginger (Root, Mosel, powder Max 5%)",
            "Moisture: Max 10%",
            "Oil content: Max 2%",
            "Impurities: Less than 1%",
            "Color: Whitish",
            "Packaging: 40kg pp white bags"
        ]
    },
    {
        id: 6,
        img: "/cassie.png",
        nav: "",
        mainHead: "Cassie Tora",
        desc: `
           We provide the finest quality Dried Split Ginger. Our highly qualified crew 
           sources, processes, and inspects, ensuring that the cleaning is done properly 
           and the finished product fulfills international standards.
        `,
        specs: [
            "Hand Picked: European Standard ( Big pieces of whitish ginger – No Roots, No Mosels, No Powder Full of Natural Aroma)",
            "ASTA quality: (No Roots, No Mosel, No Powder Full of natural Aroma)",
            "Normal Quality: Best Quality whitish Ginger (Root, Mosel, powder Max 5%)",
            "Moisture: Max 10%",
            "Oil content: Max 2%",
            "Impurities: Less than 1%",
            "Color: Whitish",
            "Packaging: 40kg pp white bags"
        ]
    }
]

// ===================== service section 
export const serviceCards = [
    {
        id: 1,
        img: "/services/serv-1.png",
        title: "Sourcing and Procurement",
        content: `
            Integrity is the bedrock of AM FAJ Global trading Limited, 
            guiding us to uphold honesty and transparency in all our dealings.
        `,
    },
    {
        id: 2,
        img: "/services/serv-2.png",
        title: "Seeds Cleaning and Destoning Services",
        content: `
            Our advanced facilities and skilled technicians ensure meticulous cleaning 
            and removal of impurities, meeting your exact specifications.
        `,
    },
    {
        id: 3,
        img: "/services/serv-3.png",
        title: "Cashew nut processing and packaging",
        content: `
           Experience top-notch cashew nut processing and packaging services tailored to your requirements. 
           Our skilled professionals ensure precision processing and packaging to preserve the quality and 
           freshness of the cashew nuts.
        `,
    },
    {
        id: 4,
        img: "/services/serv-4.png",
        title: "Logistics and Warehousing",
        content: `
            Take advantage of our efficient logistics and warehousing solutions. We manage the 
            transportation and storage of commodities with precision and care to ensure timely 
            delivery and optimal storage conditions.
        `,
    },
]