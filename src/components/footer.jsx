import logo from "../assets/Logo.png"
import { styles, navLinks } from "../utils"

export const Footer = () => {
    return (
        <section className="bg-[#1c1c1f] py-7">
            {/* ======= Top section */}
            <section className="px-10">
                <div className="">
                    <img src={logo} className="size-[40%] md:size-auto" alt="" />
                    <div className="pt-5">
                        <p className={`${styles.footerHead}`}>useful links</p>
                        <ul className="gap-10 text-white ">
                            {
                                navLinks.map((link, i) => (
                                    <li className="" key={i}>
                                        <a href={link.link} className="text-sm pb-2">
                                            {link.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className=""></div>
            </section>
            {/*  ======= Horizontal line ======== */}

            {/*  ============= socials ========== */}
        </section>
    )
}
