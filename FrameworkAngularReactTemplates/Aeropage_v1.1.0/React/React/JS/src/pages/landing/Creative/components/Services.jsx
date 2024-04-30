import creative3 from "@/assets/images/landing/creative/img-3.jpg";
import { LuMoveRight } from "react-icons/lu";

const Services = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="2xl:py-20">
            <div className="flex items-end justify-between mb-10">
              <div className="max-w-md lg:text-start mx-auto xl:ms-0 text-center">
                <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
                  Services
                </span>
                <p className="text-base mt-5">
                  We help you to go online and increase your conversion rate
                  Better design for your digital products.
                </p>
              </div>
            </div>
            <div className="bg-default-50 rounded-md">
              <div className="grid 2xl:grid-cols-2">
                <div className="divide-y divide-white/10">
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-2xl font-medium text-default-950">
                      Graphic Design
                    </h3>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-white/5 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-2xl font-medium text-default-950">
                      Web Design
                    </h3>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-white/5 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-2xl font-medium text-default-950">
                      Digital Marketing
                    </h3>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-white/5 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="2xl:border-s 2xl:border-t-0 border-t border-default-200 divide-y divide-white/10">
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-2xl font-medium text-default-950">
                      Development
                    </h3>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-white/5 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-2xl font-medium text-default-950">
                      UI/UX Design
                    </h3>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-white/5 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-2xl font-medium text-default-950">
                      Branding
                    </h3>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-white/5 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-md overflow-hidden">
            <img src={creative3} className="h-full w-full rounded-md" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
