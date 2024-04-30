import { Link } from "react-router-dom";
import { allService } from "../data";
import { LuMoveRight } from "react-icons/lu";

const Services = () => {
  return (
    <section className="relative -mt-40 md:-mt-32 py-10">
      <div className="container">
        <div className="max-w-6xl mx-auto rounded-xl shadow bg-gradient-to-t from-default-50 via-default-100 to-default-200">
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-default-300">
            {allService.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="p-8">
                  <Icon className="h-12 w-12 text-default-950" />
                  <h2 className="text-xl font-medium text-default-950 mt-5">
                    {service.title}
                  </h2>
                  <p className="text-base mt-4">{service.description}</p>
                  <div className="group mt-5">
                    <Link
                      to=""
                      className="text-default-900 text-lg font-medium"
                    >
                      Read More
                      <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
