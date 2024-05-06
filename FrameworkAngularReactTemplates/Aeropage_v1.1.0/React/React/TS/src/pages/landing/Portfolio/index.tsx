import { PageMetaData, TopNavBar } from "@/components"
import Hero from "./components/Hero"
import Brands from "./components/Brands"
import Features from "./components/Features"
import About from "./components/About"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"
import Blogs from "./components/Blogs"
import FAQs from "./components/FAQs"
import ActionBox from "./components/ActionBox"

const Portfolio = () => {
  return (
    <>
      <PageMetaData title="Portfolio" />

      <TopNavBar position="fixed" menuItems={["home", "about", "services", "testimonials","blog", "faq"]} hasDownloadButton />

      <Hero />

      <Brands />

      <Features />

      <About />

      <Services />

      <Testimonial />

      <Blogs />

      <FAQs />

      <ActionBox />
    </>

  )
}

export default Portfolio