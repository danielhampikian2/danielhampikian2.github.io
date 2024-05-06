import { PageMetaData, ServicesMarquee, TopNavBar } from "@/components"
import Hero from "./components/Hero"
import Features from "./components/Features"
import FAQs from "./components/FAQs"
import Portfolio from "./components/Portfolio"
import Pricing from "./components/Pricing"
import Services from "./components/Services"
import Since from "./components/Since"
import Blogs from "./components/Blogs"

const Agency2 = () => {
  return (
    <>
      <PageMetaData title="Agency 2" />
      <TopNavBar position="fixed" menuItems={["home", "features", "faq", "portfolio", "pricing", "service", "blog"]} />

      <Hero />

      <Features />

      <FAQs />

      <Portfolio />

      <Pricing />

      <Services />

      <ServicesMarquee />

      <Since />

      <Blogs />
    </>

  )
}

export default Agency2