import { LuArrowUpRight, LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { allCauses } from "../data";

const HighlightedCauses = () => {
  return (
    <section id="causes" className="py-10 lg:py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
            Highlighted Causes
          </span>
          <h2 className="text-4xl/snug font-medium text-default-950 mt-4">
            Small Contributions
          </h2>
          <p className="text-base mt-5">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {allCauses.map((item, idx) => {
            return (
              <div
                key={idx}
                className="border border-default-200 rounded-lg overflow-hidden group"
              >
                <div className="relative group overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      className="h-full w-full scale-[1.2] group-hover:scale-[1.05] transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-medium text-default-950 group-hover:underline transition-all duration-500">
                      {item.title}
                    </h2>
                    <p className="text-base my-4">{item.description}</p>
                    <Link
                      to=""
                      className="text-default-900 text-lg font-medium"
                    >
                      Read More
                      <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-10 mt-10 lg:mt-20 rounded-xl bg-default-100 dark:bg-default-50">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-medium text-default-950">
                Click the button to view all the causes.
              </h2>
            </div>
            <div>
              <Link
                to=""
                className="inline-flex items-center justify-center gap-2 text-lg py-2 px-8 rounded-full text-white bg-primary hover:bg-primary-700 transition-all duration-500"
              >
                See all campaigns
                <LuArrowUpRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedCauses;
