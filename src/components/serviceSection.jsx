import { serviceCards } from "../utils"


export const ServiceSection = () => {
    return (
        <section id="services" className="flex flex-col my-20 mx-10 gap-10 bg-[#ffebe0] p-5 rounded-2xl md:px-8 md:mx-28">
            <section className="text-center">
                <h2 className={`text-[#016623] pb-6 text-[25px] font-bold leading-tight md:text-[40px]`}>
                    Expert Services <br className="hidden md:block" />
                    Tailored to Your Needs
                </h2>
                <p className="text-[13px] md:text-xl">
                    At AMFAJ Global Trading Limited, we offer a comprehensive range of services to meet <br className="hidden md:block" />
                    the diverse needs of our clients. Our dedicated team is committed to providing <br className="hidden md:block" />
                    exceptional support and expertise at every stage of our services.
                </p>
            </section>
            {/* ================= Card section ============= */}
            <section className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
                {
                    serviceCards.map((card) => (
                        <section key={card.id} className="bg-white rounded-xl p-4">
                            <img src={card.img} alt="" />
                            <main className="pt-5">
                                <h2 className="text-mainGreen text-lg md:text-[20px]">{card.title}</h2>
                                <p className="pt-2 text-[13px] md:text-base">{card.content}</p>
                            </main> 
                        </section>
                    ))
                }
            </section>
        </section>
    )
}

