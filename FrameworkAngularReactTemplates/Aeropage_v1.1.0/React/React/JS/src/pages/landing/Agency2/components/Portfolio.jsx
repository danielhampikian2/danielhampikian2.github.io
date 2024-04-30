import { ProjectSwiper } from "@/components";
import { projectSlides } from "../data";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-20 pb-10">
      <div className="flex items-end justify-between mb-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
            Our Portfolio
          </span>
          <h2 className="text-4xl font-medium capitalize text-default-950 my-4">
            Selected Projects.
          </h2>
        </div>
      </div>
      <div>
        <ProjectSwiper slides={projectSlides} />
      </div>
    </section>
  );
};

export default Portfolio;
