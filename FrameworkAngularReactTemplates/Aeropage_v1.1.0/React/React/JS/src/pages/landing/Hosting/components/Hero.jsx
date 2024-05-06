import hosting4 from "@/assets/images/landing/hosting/4.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      id="home"
      className="py-20 lg:py-44 flex items-center justify-center bg-default-100 dark:bg-default-50"
    >
      <div className="container">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <span className="px-3 py-2 md:text-base text-xs border border-default-200 text-default-950 truncate">
              Limited-time offer until Friday: $1.99 per month
            </span>
            <h2 className="md:text-6xl/tight text-4xl font-medium text-default-950 mt-5">
              Place your trust in the world's no.1 web hosting provider.
            </h2>
            <p className="text-base my-6">
              Already have a website? Revive it with our industry-leading load
              times.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div className="relative w-60 z-20">
                <div className="group">
                  <div className="w-full group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                    <Link
                      className="flex items-center justify-center md:text-xl text-white bg-primary h-[68px] p-6 transition-all duration-200"
                      to=""
                    >
                      $3.95 per month
                    </Link>
                  </div>
                  <div className="absolute bg-default-950 h-full left-0 top-0 w-full -z-10" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={hosting4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
