import { PageMetaData, ServicesMarquee, TopNavBar } from "@/components"
import HeroSwiper from "./components/HeroSwiper"
import Features from "./components/Features"
import ProjectSlider from "./components/ProjectSlider"
import Services from "./components/Services"
import TestimonialSlider from "./components/TestimonialSlider"
import { useEffect } from "react"
import FAQs from "./components/FAQs"
import Blogs from "./components/Blogs"

const Creative = () => {
  useEffect(() => {
    document.body.classList.add('bg-default-100')
    return (() => {
      document.body.classList.remove('bg-default-100')
    })
  }, [])
  return (
    <>
      <PageMetaData title="Creative" />

      <TopNavBar menuItems={["home", "features", "portfolio", "testimonial", "faq", "blog"]} position="sticky" hasDownloadButton />

      <HeroSwiper />

      <section>
        <ServicesMarquee />
      </section>

      <Features />

      <ProjectSlider />

      <Services />

      <TestimonialSlider />

      <FAQs />

      <Blogs />
    </>

  )
}

export default Creative