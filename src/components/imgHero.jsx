import img1 from "../assets/img-1.png"
import img2 from "../assets/img-2.png"
import img3 from "../assets/img-3.png"

export const ImgHero = () => {
    return (
        <section className="flex flex-col my-10 gap-10 bg-white p-5 rounded-2xl md:flex-row">
            <div className="flex flex-col gap-10">
                <div className="">
                    <img src={img1} alt="" />
                </div>
                <div className="">
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className="hidden md:block">
                <img src={img2} alt="" />
            </div>
        </section>
    )
}
