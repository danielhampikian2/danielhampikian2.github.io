import { PageMetaData, TopNavBar } from "@/components";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Services from "./components/Services";
import FAQs from "./components/FAQs";
import TestimonialSlider from "./components/TestimonialSlider";
import Blogs from "./components/Blogs";

const Company = () => {
  return (
    <>
      <PageMetaData title="Company" />

      <TopNavBar
        menuItems={["home", "services", "faq", "testimonials", "blog"]}
        position="fixed"
        hasDownloadButton
      />

      <Hero />

      <Brands />

      <Contact />

      <Services />

      <FAQs />

      <TestimonialSlider />

      <Blogs />
    </>
  );
};

export default Company;
