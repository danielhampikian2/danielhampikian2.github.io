import { PageMetaData, TopNavBar } from "@/components";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Courses from "./components/Courses";
import TestimonialSlider from "./components/TestimonialSlider";
import SubscribeToMail from "./components/SubscribeToMail";

const Ebook = () => {
  return (
    <>
      <PageMetaData title="Ebook" />

      <TopNavBar
        menuItems={["home", "about", "benefits", "courses", "testimonials"]}
        position="fixed"
      />

      <Hero />

      <About />

      <Benefits />

      <Courses />

      <TestimonialSlider />

      <SubscribeToMail />
    </>
  );
};

export default Ebook;
