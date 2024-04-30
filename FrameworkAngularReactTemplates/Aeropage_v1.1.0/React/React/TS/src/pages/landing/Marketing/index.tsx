import { PageMetaData, ServicesMarquee, TopNavBar } from "@/components"
import Hero from "./components/Hero"
import Features from "./components/Features"
import About from "./components/About"
import Services from "./components/Services"
import PortfolioSlider from "./components/PortfolioSlider"
import FAQs from "./components/FAQs"
import TestimonialSlider from "./components/TestimonialSlider"
import Blogs from "./components/Blogs"

const Marketing = () => {
  return (
    <>
      <PageMetaData title="Marketing" />

      <TopNavBar menuItems={["home", "features", "about", "services", "portfolio", "faq", "testimonial", "blog"]} position="fixed" hasDownloadButton />

      <Hero />

      <ServicesMarquee />

      <Features />

      <About />

      <Services />

      <PortfolioSlider />

      <FAQs />

      <TestimonialSlider />

      <Blogs />
    </>

  )
}

export default Marketing