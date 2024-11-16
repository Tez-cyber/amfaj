
export const HeroSection = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center text-white md:h-[521px]">
        <h1 className="text-[72px] font-bold leading-[88.56px]">
          Exceptional Agricultural <br />
          Commodities
        </h1>
        <p className="text-[28px] pt-5">
          We Lead in Agricultural Commodities supply. <br />
           Nature's Best, delivered with Excellence. 
        </p>
        <div className="flex gap-5 mt-3">
          <button className="btn bg-white text-black hover:border-[2px] hover:text-white hover:border-white hover:bg-transparent">Get in touch!</button>
          <button className="btn border-white border-[2px] hover:bg-white hover:text-darkGreen">View products</button>
        </div>
    </div>
  )
}
