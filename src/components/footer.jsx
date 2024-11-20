import logo from "../assets/Logo.png"
import { styles, navLinks } from "../utils"

export const Footer = () => {
    return (
        <section className="bg-[#1c1c1f] py-7">
            {/* ======= Top section */}
            <section className="px-10 flex flex-col justify-between md:flex-row">
                <section className="flex justify-between items-center md:block">
                    <img src={logo} className="size-[40%] md:size-auto" alt="" />
                    <div className="md:pt-5">
                        <p className={`${styles.footerHead}`}>useful links</p>
                        <ul className="gap-10 text-white ">
                            {
                                navLinks.map((link, i) => (
                                    <li className="" key={i}>
                                        <a href={link.link} className="text-lg pb-2">
                                            {link.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
                <section className="flex flex-col gap-4 mt-20 md:mt-0 md:w-[60%]">
                    <section className="flex justify-evenly md:gap-4 md:flex-col">
                        {/* ======== Phone ====== */}
                        <section className={`${styles.contactWrap}`}>
                            <img src="/icons/call.png" alt="" />
                            <div className="text-white text-[17px]">
                                <p>+234(0) 8055606558</p>
                                <p>+234(0) 8069243134</p>
                            </div>
                        </section>
                        {/*  ======= Emails */}
                        <section className={`${styles.contactWrap}`}>
                            <img src="/icons/email.png" alt="" />
                            <div className="text-white text-[17px]">
                                <p>fajagroproduct@gmail.com</p>
                                <p>fajade1973@gmail.com</p>
                            </div>
                        </section>
                    </section>
                    {/* ========= Locations */}
                    <section className={`${styles.contactWrap} items-baseline`}>
                        <img src="/icons/place.png" alt="" />
                        <section className="text-white mt-6 grid gap-10 grid-cols-2 md:grid-cols-3">
                            <div className="">
                                <p className={`${styles.footerHead}`}>Lagos</p>
                                <p className="">
                                    Olumo street, <br className="hidden md:block" />
                                    Agege, Lagos <br className="hidden md:block" />
                                    State, Nigeria
                                </p>
                            </div>
                            <div className="">
                                <p className={`${styles.footerHead}`}>Ogbomosho</p>
                                <p className="">
                                    Beside Akintola, <br className="hidden md:block" />
                                    Oke Ado Akintola Road , <br className="hidden md:block" />
                                    Ogbomosho, Oyo <br className="hidden md:block" />
                                    State, Nigeria
                                </p>
                            </div>
                            <div className="">
                                <p className={`${styles.footerHead}`}>Kano</p>
                                <p className="">
                                    Dawanau market, <br className="hidden md:block" />
                                    Kano state,
                                    Nigeria
                                </p>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
            {/*  ======= Horizontal line ======== */}

            {/*  ============= socials ========== */}
        </section>
    )
}
