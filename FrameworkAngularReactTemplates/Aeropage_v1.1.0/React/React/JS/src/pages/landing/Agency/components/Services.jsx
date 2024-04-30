import { LuMoveRight } from "react-icons/lu";
import { services } from "../data";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="lg:py-20 py-10">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
              Services
            </span>
            <h2 className="text-4xl font-medium capitalize text-default-950 my-4">
              Our Services
            </h2>
            <p className="text-base">
              Lorem ipsum dummy text are usually use print and website industry.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center rounded-md overflow-hidden bg-default-100 dark:bg-default-50 divide-y lg:divide-y-0 lg:divide-x divide-default-200">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="group">
                <div className="sm:p-10 p-8">
                  <span>
                    <Icon className="h-14 w-14 text-default-950" />
                  </span>
                  <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">
                    {service.title}
                  </h2>
                  <p className="text-base mb-6">{service.description}</p>
                  <Link to="" className="text-default-950 text-lg">
                    Read More
                    <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
