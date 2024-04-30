import charityImg1 from "@/assets/images/landing/charity/img-1.jpg";
import charityImg2 from "@/assets/images/landing/charity/img-2.jpg";
import charityImg3 from "@/assets/images/landing/charity/img-3.jpg";
import charityBackgroundImg from "@/assets/images/landing/charity/bg-1.png";
import backgroundLine from "@/assets/images/other/bg-lines-2.png";
import backgroundLineDark from "@/assets/images/other/bg-lines-2-dark.png";
import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";
import { useLayoutContext } from "@/context";

const Hero = () => {
  const { themeMode } = useLayoutContext();
  return (
    <section
      id="home"
      className="relative bg-default-100 dark:bg-default-50 py-24 lg:py-32 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${
          themeMode === "light" ? backgroundLine : backgroundLineDark
        })`,
      }}
    >
      <div className="flex items-center overflow-hidden before:bg-primary/80 before:absolute before:inset-0 before:left-[63.67%] before:rounded-bl-3xl before:hidden lg:before:block">
        <div
          className="bg-contain bg-right bg-no-repeat absolute -top-44 right-0 bottom-0 w-2/6"
          style={{ backgroundImage: `url('${charityBackgroundImg}')` }}
        />
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
            <div>
              <div className="flex flex-col justify-center">
                <h2 className="xl:text-5xl/tight sm:text-3xl text-2xl font-medium text-default-950 mb-4">
                  Let's Collaborate and Achieve Greatness Together!
                </h2>
                <p className="text-base  mt-5">
                  Sed consequat, leo eget bibendum sodales, augue velit cursus
                  nunc, quis gravida magna mi a libero.{" "}
                </p>
                <div className="mt-10">
                  <Link
                    to=""
                    className="inline-flex items-center justify-center gap-2 text-base py-2 px-8 rounded-md text-white bg-primary hover:bg-primary-700 transition-all duration-300"
                  >
                    Read More
                    <LuMoveRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-10">
              <div className="flex gap-4 md:gap-6 tilt items-center">
                <div className="flex flex-col gap-4 md:gap-6  w-full">
                  <img
                    src={charityImg1}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 md:gap-6 pb-10 md:pb-16 w-full relative">
                  <img
                    src={charityImg2}
                    className="w-full h-40 md:h-[278px] rounded-lg object-cover"
                  />
                  <img
                    src={charityImg3}
                    className="w-full h-40 md:h-[278px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
