import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="md:text-4xl text-3xl font-medium text-default-950">
            Comprehensive Plan
          </h2>
        </div>
        <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="relative w-full h-fit mx-auto">
                <div className="group">
                  <div className="border border-default-200 w-full group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                    <div className="p-6 bg-white text-center dark:bg-default-50">
                      <Icon className="inline-block h-12 w-12 text-default-950" />
                      <h2 className="text-2xl font-medium text-default-950 mt-5">
                        {service.title}
                      </h2>
                      <p className="text-base mt-4">{service.description}</p>
                    </div>
                  </div>
                  <div className="absolute bg-default-950 h-full left-0 top-0 w-full -z-10" />
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
