import { styles } from "../utils"


export const ContactSection = () => {
    return (
        <section id="services" className="flex flex-col my-20 mx-10 gap-10 bg-white p-5 rounded-2xl md:px-8 md:mx-28">
            <section className="mx-auto md:w-[60%]">
                <section className="">
                    <h2 className={`text-[#016623] text-center pb-6 text-[25px] font-bold leading-tight md:text-start md:text-[40px]`}>
                        We’d love to hear from you
                    </h2>
                </section>
                {/* ================= Form section ============= */}
                <section className="">
                    <form className="flex flex-col gap-3">
                        <div className="">
                            <label className={`${styles.label}`}>Name</label>
                            <input className={`${styles.input}`} placeholder="Enter your name" type="text" />
                        </div>
                        <div className="">
                            <label className={`${styles.label}`}>Email</label>
                            <input className={`${styles.input}`} placeholder="Enter your email address" type="text" />
                        </div>
                        <div className="">
                            <label className={`${styles.label}`}>Message</label>
                            <textarea className={`${styles.input} h-[167px]`} id="" placeholder="Enter your message"></textarea>
                        </div>
                        <div className="mt-3">
                            <button className="bg-mainGreen text-white px-10 py-3 rounded-full md:text-xl">
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </section>
        </section>
    )
}
