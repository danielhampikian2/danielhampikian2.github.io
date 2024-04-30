import { PageMetaData, TopNavBar } from "@/components"
import Hero from "./components/Hero"
import Brands from "./components/Brands"
import Pricing from "./components/Pricing"
import Services from "./components/Services"
import DomainNames from "./components/DomainNames"
import Features from "./components/Features"
import TestimonialSlider from "./components/TestimonialSlider"
import FAQs from "./components/FAQs"
import DiscoverServices from "./components/DiscoverServices"

const Hosting = () => {
  return (
    <>
      <PageMetaData title="Hosting" />

      <TopNavBar menuItems={["home", "pricing", "services", "features", "testimonial"]} position="fixed" hasDownloadButton />

      <Hero />

      <Brands />

      <Pricing />

      <Services />

      <DomainNames />

      <Features />

      <TestimonialSlider />

      <FAQs />

      <DiscoverServices />
    </>
  )
}

export default Hosting