import { PageMetaData, TopNavBar } from "@/components";
import Home from "./components/Home";
import About from "./components/About";
import Statistics from "./components/Statistics";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import DomainNames from "./components/DomainNames";

const Startup = () => {
  return (
    <>
      <PageMetaData title="Startup" />

      <TopNavBar
        menuItems={[
          "home",
          "about",
          "services",
          "work",
          "testimonials",
          "blog",
        ]}
        position="fixed"
      />

      <Home />

      <About />

      <Statistics />

      <Services />

      <Work />

      <Testimonials />

      <Blogs />

      <DomainNames />
    </>
  );
};

export default Startup;
