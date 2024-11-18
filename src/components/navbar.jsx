import { useEffect, useState } from "react"
import logo from "../assets/Logo.png"
import { motion } from "framer-motion"

export const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
    }
    const navLinks = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Products", link: "#products" },
        { name: "Services", link: "#services" },
        { name: "Contact us", link: "#contact" },
    ]

    const topVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: 45,
            backgroundColor: "#052e24"
        }
    }
    const centerVariants = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    }
    const bottomVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor: "#052e24"
        }
    }
    const listVariants = {
        closed: {
            x: "100%"
        },
        opened: {
            x: "0",
            transition: {
                duration: .35
            }
        }
    }

    const navWrapper = "flex items-center justify-between py-5 px-10 z-20 md:py-6 md:px-28"
    const animateNav = openNav ? "opened" : "closed"
    return (
        <div className="sticky top-0">
            <div className={scrolling ? `${navWrapper} bg-darkGreen shadow-md` : `${navWrapper}`}>
                {/* Logo section */}
                <img src={logo} className="size-1/2 md:size-auto" alt="" />

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
                        onClick={() => setOpenNav(!openNav)}
                        className='w-10 h-8 flex flex-col justify-between items-end relative z-30'>
                        <motion.div variants={topVariants} animate={animateNav} className="w-10 h-[2px] bg-white rounded origin-left"></motion.div>
                        <motion.div variants={centerVariants} animate={animateNav} className="w-7 h-[2px] bg-white rounded"></motion.div>
                        <motion.div variants={bottomVariants} animate={animateNav} className="w-10 h-[2px] bg-white rounded origin-left"></motion.div>
                    </button>
                    {
                        openNav &&
                        <motion.div variants={listVariants} initial={"closed"} animate={"opened"} className="absolute top-[15px] right-[30px] rounded-xl left-[30px] mb-10 bg-lime
                             text-black flex flex-col items-center gap-5 pt-[100px] text-2xl h-[500px] max-w-full">
                            {
                                navLinks.map(link => (
                                    <div className="" key={link.name}>
                                        <a href={link.link}>
                                            {link.name}
                                        </a>
                                    </div>
                                ))
                            }
                        </motion.div>
                    }
                </div>
            </div>
        </div>
    )
}
