import { PageMetaData, TopNavBar } from "@/components"
import Hero from "./components/Hero"
import MarqueeGroup from "./components/MarqueeGroup"
import About from "./components/About"
import Services from "./components/Services"
import PortfolioSwiper from "./components/PortfolioSwiper"
import InvestmentSteps from "./components/InvestmentSteps"
import TestimonialSlider from "./components/TestimonialSlider"
import ActionBox from "./components/ActionBox"
import Blogs from "./components/Blogs"
import DomainNames from "./components/DomainNames"
import ContactUs from "./components/ContactUs"

const Marketing2 = () => {
  return (
    <>
      <PageMetaData title="Marketing 2" />

      <TopNavBar menuItems={["home", "about", "services", "portfolio", "testimonial", "blog", "contact"]} position="fixed" hasDownloadButton />

      <Hero />

      <MarqueeGroup />

      <About />

      <Services />

      <PortfolioSwiper />

      <InvestmentSteps />

      <TestimonialSlider />

      <ActionBox />

      <Blogs />

      <DomainNames />

      <ContactUs />
    </>

  )
}

export default Marketing2