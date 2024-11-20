import { ContactSection } from "./components/contactSection"
import { ExcellenceSection } from "./components/excellenceSection"
import { Footer } from "./components/footer"
import { HeroSection } from "./components/heroSection"
import { Navbar } from "./components/navbar"
import { ProductSection } from "./components/productSection"
import { ServiceSection } from "./components/serviceSection"

function App() {

  return (
    <>
      <div className="">
        <Navbar />
        <HeroSection />
        <ExcellenceSection />
        <ProductSection />
        <ServiceSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

export default App
