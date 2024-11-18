import { useState } from "react"
import { tabNav, tabsData } from "../utils"
import { motion, useAnimate } from "framer-motion"

export const ProductSection = () => {
    const [tabItem, settabItem] = useState(1)
    const headStyle = "text-[#016623] pb-6 text-[35px]"

    const id = tabsData.filter(tab => {
        return tab.id
    })


    return (
        <section id="products" className="flex flex-col my-20 mx-10 gap-10 bg-white p-5  rounded-2xl md:mx-28">
            <div className="text-center">
                <h2 className={`${headStyle} font-bold md:text-[40px]`}>Products</h2>
            </div>
            {/* ================= Tab section ============= */}
            <section className="">
                {/* ====== tab nav ====== */}
                <div
                    className="mb-10">
                    {
                        tabNav.map((nav) => (
                            <motion.button key={nav.id}
                                transition={{ duration: .5 }}
                                whileTap={{ y: 30 }}
                                onClick={() => {
                                    settabItem(nav.id)
                                }}
                                className={tabItem === nav.id ? "bg-lime mr-5 p-1 px-3 rounded-lg text-darkGreen font-semibold text-[18px]" : "transition duration-150 ease-in mr-5 cursor-pointer text-[18px] text-darkGreen font-semibold mb-10"}>{nav.name}</motion.button>
                        ))
                    }
                </div>
                {
                    tabsData.map((tab) => (
                        <main key={tab.id} className={tabItem === tab.id ? "block" : "hidden"}>
                            <section className="flex flex-col justify-center items-center mb-5 md:gap-10 md:flex-row">
                                <section className="pb-10 md:w-[45%] md:pb-0">
                                    {/* ======= display section ======= */}
                                    <div className="">
                                        <h2 className="text-[33px] font-[500] pb-5">{tab.mainHead}</h2>
                                        <p className="text-[18px] text-[#3a3a3c] pb-7">{tab.desc}</p>
                                        <ul>
                                            <h2 className="text-2xl font-[500] pb-5">Specifications</h2>
                                            {
                                                tab.specs.map(spec => (
                                                    <div key={spec} className="">
                                                        <li>
                                                            <span className="inline-block mr-3 rotate-45 size-2 bg-[#9ace12]"></span>
                                                            {spec}
                                                        </li>
                                                    </div>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </section>
                                {/* ============== image section =========== */}
                                <motion.section
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: .5 }}
                                    className="md:w-1/2 ">
                                    <img className="rounded-2xl" src={tab.img} alt="" />
                                </motion.section>
                            </section>
                        </main>
                    ))
                }
            </section>
        </section>
    )
}
