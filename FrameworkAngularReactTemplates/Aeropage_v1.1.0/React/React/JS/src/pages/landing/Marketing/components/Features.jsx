import { LuBoxes, LuLayers, LuMonitor, LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";

import marketing4 from "@/assets/images/landing/marketing/img-4.jpg";

const Features = () => {
  return (
    <section id="features" className="py-10 lg:py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
              Features
            </span>
            <h2 className="text-3xl font-medium capitalize text-default-950 my-4">
              We want to bring business &amp; the digital world together.
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <div className="grid  grid-cols-1 items-center rounded-md overflow-hidden border border-default-200">
              <div className="group">
                <div className="flex flex-wrap items-center gap-6 p-6">
                  <div>
                    <LuLayers className="h-14 w-14 text-default-950" />
                  </div>
                  <div>
                    <h2 className="text-2xl text-default-950 font-medium mb-4">
                      Product Design
                    </h2>
                    <p className="text-base mb-6">
                      Lorem ipsum dummy text are used in this design
                    </p>
                    <Link to="" className="text-default-950 text-lg">
                      Read More
                      <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group border-y border-default-200">
                <div className="flex flex-wrap items-center gap-6 p-6">
                  <div>
                    <LuMonitor className="h-14 w-14 text-default-950" />
                  </div>
                  <div>
                    <h2 className="text-2xl text-default-950 font-medium mb-4">
                      Marketing Strategy
                    </h2>
                    <p className="text-base mb-6">
                      Nullam dictum felis eu pede mollis pretium.
                    </p>
                    <Link to="" className="text-default-950 text-lg">
                      Read More
                      <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex flex-wrap items-center gap-6 p-6">
                  <div>
                    <LuBoxes className="h-14 w-14 text-default-950" />
                  </div>
                  <div>
                    <h2 className="text-2xl text-default-950 font-medium mb-4">
                      E-Commerce
                    </h2>
                    <p className="text-base mb-6">
                      Maecenas malesuada. Praesent congue erat at massa.
                    </p>
                    <Link to="" className="text-default-950 text-lg">
                      Read More
                      <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={marketing4} className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
