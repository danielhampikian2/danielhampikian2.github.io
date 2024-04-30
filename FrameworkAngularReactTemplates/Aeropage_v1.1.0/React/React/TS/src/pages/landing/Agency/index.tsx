import { PageMetaData, ServicesMarquee, TopNavBar } from "@/components"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import OurPortfolio from "./components/OurPortfolio"
import Services2 from "./components/Services2"
import FAQs from "./components/FAQs"
import Blog from "./components/Blog"
import Contact from "./components/Contact"


const Agency = () => {
  return (
    <>
      <PageMetaData title="Agency" />
      <TopNavBar menuItems={["home", "about", "services", "portfolio", "faq", "blog", "contact"]} position="sticky" hasDownloadButton />

      <Home />

      <section className="lg:pb-10">
        <ServicesMarquee />
      </section>

      <About />

      <Services />

      <OurPortfolio />

      <Services2 />

      <FAQs />

      <Blog />

      <Contact />
    </>

  )
}

export default Agency