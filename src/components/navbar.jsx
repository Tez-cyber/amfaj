import logo from "../assets/Logo.png"

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
            <div className="flex items-center justify-between mx-28 py-10">
                {/* Logo section */}
                <img src={logo} alt="" />

                {/* ======= Links section ================== */}
                <ul className="flex gap-10 text-white">
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
            </div>
        </div>
    )
}
