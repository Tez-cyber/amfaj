import check from "../assets/checkmark.png"
import thumbs from "../assets/thumbs.png"
import energy from "../assets/energy.png"

export const ExcellenceSection = () => {
    const headStyle = "text-[#016623] pb-6 text-3xl "
    const card = "px-5 py-10 rounded-2xl "
    const cardHead = "capitalize pb-3 md:text-[24px]"
    const cardImg = "py-4"
    return (
        <section className="flex flex-col justify-center items-center m-10 gap-10 bg-white p-5 rounded-2xl md:mx-28">
            <div className="text-center">
                <h2 className={`${headStyle} font-semibold md:text-[56px]`}>Excellence meets Integrity</h2>
                <p className="text-[#3A3A3C] md:px-10 md:text-[24px]">
                    Established with a dedication to excellence and integrity, AM FAJ Global is committed to
                    delivering top-quality products and unparalleled service to our valued customers across
                    the globe. As a trusted partner, we strive to exceed expectations and foster long-lasting
                    relationships built on trust and reliability.
                </p>
            </div>
            {/* ============ Card section ============= */}
            <section className="">
                <h2 className={`${headStyle} text-center font-bold md:font-bold md:text-[40px]`}>Our core values</h2>
                <section className="text-white grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-3">
                    <div className={`${card} bg-[#005c1d]`}>
                        <img className={`${cardImg}`} src={check} alt="" />
                        <p className={`${cardHead}`}>integrity</p>
                        <p className="">
                            Integrity is the bedrock of AMFAJ <br />
                            Global trading Limited, guiding us to <br />
                            uphold honesty and transparency in all
                            our dealings.
                        </p>
                    </div>
                    <div className={`${card} bg-[#733d00]`}>
                        <img className={`${cardImg}`} src={thumbs} alt="" />
                        <p className={`${cardHead}`}>quality</p>
                        <p className="">
                            Quality is our hallmark, driving us to
                            deliver products and services that
                            consistently exceed expectations.
                        </p>
                    </div>
                    <div className={`${card} bg-[#567800]`}>
                        <img className={`${cardImg}`} src={energy} alt="" />
                        <p className={`${cardHead}`}>Sustainability</p>
                        <p className="">
                            Sustainability is our commitment, 
                            inspiring us to embrace eco-friendly 
                            practices and support the communities 
                            we serve.
                        </p>
                    </div>
                </section>
            </section>
        </section>
    )
}
