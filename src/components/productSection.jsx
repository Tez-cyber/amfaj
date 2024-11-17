import { tabsData } from "../utils"

export const ProductSection = () => {
    const headStyle = "text-[#016623] pb-6 text-[35px]"

    return (
        <section className="flex flex-col my-20 mx-10 gap-10 bg-white p-5  rounded-2xl md:mx-28">
            <div className="text-center">
                <h2 className={`${headStyle} font-bold md:text-[40px]`}>Products</h2>
            </div>
            {/* ================= Tab section ============= */}
            <section className="">
                {
                    tabsData.map((tab) => (
                        <main key={tab.id}>
                            {/* ====== tab nav ====== */}
                            <div className="">
                                <p className="text-[18px] text-darkGreen font-semibold">{tab.nav}</p>
                            </div>
                            <section className="flex flex-col md:gap-10 md:flex-row">
                                <section className="pb-10 md:w-[45%] md:pb-0">
                                    {/* ======= display section ======= */}
                                    <div className="">
                                        <h2 className="text-[33px] font-[500] pb-5">{tab.mainHead}</h2>
                                        <p className="text-[18px] text-[#3a3a3c] pb-7">{tab.desc}</p>
                                        <ul>
                                            <h2 className="text-2xl font-[500] pb-5">Specifications</h2>
                                            {
                                                tab.specs.map(spec => (
                                                    <div className="">
                                                        <li>{spec}</li>
                                                    </div>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </section>
                                {/* ============== image section =========== */}
                                <section className="md:w-1/2 ">
                                    <img src={tab.img} alt="" />
                                </section>
                            </section>
                        </main>
                    ))
                }
            </section>
        </section>
    )
}
