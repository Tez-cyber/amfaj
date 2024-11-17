import { ExcellenceSection } from "./components/excellenceSection"
import { HeroSection } from "./components/heroSection"
import { Navbar } from "./components/navbar"
import { ProductSection } from "./components/productSection"

function App() {

  return (
    <>
      <div className="">
        <Navbar />
        <HeroSection />
        <ExcellenceSection />
        <ProductSection />
      </div>
    </>
  )
}

export default App
