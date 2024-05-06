import { PageMetaData, TopNavBar } from "@/components";
import Home from "./components/Home";
import MarqueeGroup from "./components/MarqueeGroup";
import About from "./components/About";
import Services from "./components/Services";
import FAQs from "./components/FAQs";
import UpdatedBlogs from "./components/UpdatedBlogs";
import ActionBox from "./components/ActionBox";
import Portfolio from "./components/Portfolio";

const Photography = () => {
  return (
    <>
      <PageMetaData title="Photography" />

      <TopNavBar
        position="sticky"
        menuItems={["home", "about", "services", "portfolio", "faq"]}
      />

      <Home />

      <MarqueeGroup />

      <About />

      <Services />

      <Portfolio />

      <FAQs />

      <UpdatedBlogs />

      <ActionBox />

      <MarqueeGroup />
    </>
  );
};

export default Photography;
