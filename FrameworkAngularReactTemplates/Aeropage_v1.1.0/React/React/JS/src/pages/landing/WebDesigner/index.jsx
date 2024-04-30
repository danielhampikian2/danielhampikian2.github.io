import { PageMetaData, TopNavBar } from "@/components";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import FAQs from "./components/FAQs";
import Stories from "./components/Stories";
import ContactUs from "./components/ContactUs";

const WebDesigner = () => {
  return (
    <>
      <PageMetaData title="Web Designer" />
      <TopNavBar
        position="fixed"
        menuItems={[
          "home",
          "about",
          "services",
          "work",
          "faq",
          "stories",
          "contact",
        ]}
        hasDownloadButton
      />

      <Hero />

      <About />

      <Services />

      <Works />

      <FAQs />

      <Stories />

      <ContactUs />
    </>
  );
};

export default WebDesigner;
