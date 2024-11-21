// import left from "../assets/hero-left.jpeg"
import { ImgHero } from "./imgHero"
import { Partners } from "./partners"

export const HeroSection = () => {
  return (
    <div id="home" className="mt-[100px] text-white md:gap-0 md:mt-0">
      <div className="text-center flex flex-col gap-5 items-center justify-center px-10 md:px-28">
        <div className="-z-20">
          <img src="/left-leaf.png" alt="" className="absolute w-[200px] top-[100px] left-0 md:w-auto" />
          <img src="/right-leaf.png" alt="" className="absolute w-[200px] top-[100px] right-0 md:w-auto" />
        </div>
        <img src="" alt="" className="" />
        {/* ============== First Section =========== */}
        <h1 className="text-5xl font-bold md:leading-[88.56px] md:text-[70px] md:mt-6 ">
          Exceptional Agricultural <span className="hidden md:inline"><br /></span>
          Commodities
        </h1>
        <p className="text-lg pt-5 md:text-[28px]">
          We Lead in Agricultural Commodities supply. <span className="hidden md:inline"><br /></span>
          Nature's Best, delivered with Excellence.
        </p>
        <div className="flex flex-col gap-5 mt-5 md:flex-row">
          <button className="btn bg-white text-black hover:border-[2px] hover:text-white hover:border-white hover:bg-transparent">Get in touch!</button>
          <button className="btn border-white border-[2px] hover:bg-white hover:text-darkGreen">View products</button>
        </div>
        {/* ============== Second section ================= */}
        <ImgHero />
      </div>
      {/* =================Third section ================ */}
      <Partners />
    </div>
  )
}
