import logo from "../assets/Logo.png"
import { motion } from "framer-motion"

export const Navbar = () => {
    const navLinks = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Products", link: "#products" },
        { name: "Services", link: "#services" },
        { name: "Contact us", link: "#contact" },
    ]
    return (
        <div className="sticky top-0">
            <div className="flex items-center justify-between mx-10 py-10 md:mx-28">
                {/* Logo section */}
                <img src={logo} alt="" />

                {/* ======= Links section ================== */}
                <ul className="hidden gap-10 text-white md:flex">
                    {
                        navLinks.map((link, i) => (
                            <li className="" key={i}>
                                <a href={link.link} className=" text-xl pb-2 after:content-[''] after:block 
                                after:h-[2px] after:w-[3px] after:bg-inherit after:transition-all after:duration-500 
                                after:hover:w-full after:hover:bg-white">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
                {/* ============ Mobile Navbar  */}
                <div className="md:hidden">
                    <button
                        onClick=""
                        className='w-10 h-7 flex flex-col justify-between relative z-30'>
                        <motion.div className="w-10 h-1 bg-white rounded origin-left"></motion.div>
                        <motion.div className="w-10 h-1 bg-white rounded"></motion.div>
                        <motion.div className="w-10 h-1 bg-white rounded origin-left"></motion.div>
                    </button>
                </div>
            </div>
        </div>
    )
}
