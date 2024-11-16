import olam from "../assets/olam.png"
import wacot from "../assets/wacot.png"
import enkay from "../assets/enkay.png"
import extrance from "../assets/extrance.png"

export const Partners = () => {
  return (
    <div className="bg-[#d2d2d6] text-[#3A3A3C] px-20 py-10 items-center gap-10 flex flex-col md:flex-row">
        <p className="text-[24px] font-bold">Our partners</p>
        <div className="bg-white px-5 py-2 rounded-md flex items-center justify-center">
            <img src={olam} alt="" />
        </div>
        <div className="bg-white px-5 py-2 rounded-md  w-[150px] flex items-center justify-center">
            <img src={wacot} alt="" />
        </div>
        <div className="bg-white px-5 py-2 rounded-md  w-[150px] flex items-center justify-center">
            <img src={enkay} alt="" />
        </div>
        <div className="bg-white px-5 py-2 rounded-md flex items-center justify-center">
            <img src={extrance} alt="" />
        </div>
    </div>
  )
}
