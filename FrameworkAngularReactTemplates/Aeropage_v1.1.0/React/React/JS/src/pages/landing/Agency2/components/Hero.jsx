import bgLine2Img from "@/assets/images/other/bg-lines-2.png";
import bgLine2DarkImg from "@/assets/images/other/bg-lines-2-dark.png";
import hero from "@/assets/images/landing/agency-2/hero.png";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useLayoutContext } from "@/context";

const Hero = () => {
  const { themeMode } = useLayoutContext();
  return (
    <section
      id="home"
      className={"py-40 bg-cover bg-no-repeat"}
      style={{
        backgroundImage: `url(${
          themeMode === "light" ? bgLine2Img : bgLine2DarkImg
        })`,
      }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <div className="max-w-lg text-center lg:text-start">
              <h2 className="lg:text-6xl/tight sm:text-5xl text-4xl font-medium text-default-950">
                Better design for your digital products.
              </h2>
              <p className="text-base my-6">
                We are a creative studio specializing in UI/UX design, <br />{" "}
                development and strategy.
              </p>
              <Link
                to=""
                className="inline-flex items-center justify-center gap-2 border border-primary/50 text-primary py-2 px-6 rounded-md bg-primary/10 hover:text-white hover:bg-primary transition-all duration-300"
              >
                Get Solution
                <LuArrowUpRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <img src={hero} className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
