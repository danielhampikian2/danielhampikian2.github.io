import { PageMetaData, TopNavBar } from "@/components"
import Hero from "./components/Hero"
import MarqueeGroup from "./components/MarqueeGroup"
import About from "./components/About"
import Projects from "./components/Projects"
import AbilitiesAndResources from "./components/AbilitiesAndResources"
import Accolades from "./components/Accolades"
import TestimonialSlider from "./components/TestimonialSlider"
import Blogs from "./components/Blogs"
import ActionBox from "./components/ActionBox"

const Portfolio2 = () => {
  return (
    <>
      <PageMetaData title="Portfolio 2" />

      <TopNavBar position="fixed" menuItems={["home", "about", "project", "portfolio", "advantage", "testimonials", "blog"]} hasDownloadButton />

      <Hero />

      <MarqueeGroup />

      <About />

      <Projects />

      <AbilitiesAndResources />

      <Accolades />

      <TestimonialSlider />

      <Blogs />

      <ActionBox />
    </>

  )
}

export default Portfolio2