import { PageMetaData, TopNavBar } from "@/components"
import Hero from "./components/Hero"
import BusinessSolutions from "./components/BusinessSolutions"
import Projects from "./components/Projects"
import ExploratoryStudies from "./components/ExploratoryStudies"
import Feature from "./components/Feature"
import Feature2 from "./components/Feature2"
import Feature3 from "./components/Feature3"
import MarqueeGroup from "./components/MarqueeGroup"
import FAQs from "./components/FAQs"
import ActionBox from "./components/ActionBox"

const Marketing3 = () => {
  return (
    <>
      <PageMetaData title="Marketing 3" />

      <TopNavBar position="sticky" menuItems={["home", "solutions", "projects", "features", "faq"]} />

      <Hero />

      <BusinessSolutions />

      <Projects />

      <ExploratoryStudies />

      <Feature />

      <Feature2 />

      <Feature3 />

      <MarqueeGroup />

      <FAQs />

      <ActionBox />
    </>

  )
}

export default Marketing3