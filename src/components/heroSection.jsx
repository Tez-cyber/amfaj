import left from "../assets/hero-left.jpeg"
export const HeroSection = () => {
  return (
    <div className="text-center mt-[150px] px-10 flex flex-col gap-5 items-center justify-center text-white md:h-[521px] md:gap-0 md:mt-0">
        <h1 className="text-7xl font-bold md:leading-[88.56px] md:text-[72px]">
          Exceptional Agricultural <span className="hidden md:inline"><br /></span>
          Commodities
        </h1>
        <p className="text-2xl pt-5 md:text-[28px]">
          We Lead in Agricultural Commodities supply. <span className="hidden md:inline"><br /></span>
           Nature's Best, delivered with Excellence. 
        </p>
        <div className="flex gap-5 mt-5">
          <button className="btn bg-white text-black hover:border-[2px] hover:text-white hover:border-white hover:bg-transparent">Get in touch!</button>
          <button className="btn border-white border-[2px] hover:bg-white hover:text-darkGreen">View products</button>
        </div>
    </div>
  )
}
