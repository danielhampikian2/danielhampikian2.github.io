import { PageMetaData, TopNavBar } from "@/components";
import Hero from "./components/Hero";
import Services from "./components/Services";
import JoinUs from "./components/JoinUs";
import Counter from "./components/Counter";
import HighlightedCauses from "./components/HighlightedCauses";
import TestimonialSlider from "./components/TestimonialSlider";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";

const Charity = () => {
  return (
    <>
      <PageMetaData title="Charity" />
      <TopNavBar
        menuItems={["home", "join", "causes", "blog", "contact"]}
        position="fixed"
      />

      <Hero />

      <Services />

      <JoinUs />

      <Counter />

      <HighlightedCauses />

      <TestimonialSlider />

      <Blog />

      <Newsletter />

      <Contact />
    </>
  );
};

export default Charity;
