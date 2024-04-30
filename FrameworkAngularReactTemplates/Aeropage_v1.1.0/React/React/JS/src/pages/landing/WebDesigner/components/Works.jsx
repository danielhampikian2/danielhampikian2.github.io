import { useState } from "react";
import { works } from "../data";
import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";

const Works = () => {
  const [work, setWork] = useState(works);
  const [category, setCategory] = useState("all");

  const filterImages = (category) => {
    setCategory(category);
    setTimeout(() => {
      const workAlbums =
        category === "all"
          ? works
          : works.filter((album) => album.category?.includes(category));
      setWork(workAlbums);
    }, 300);
  };

  return (
    <section id="work" className="py-20">
      <div className="container">
        <div className="mb-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-4xl font-medium text-default-950">Works</h2>
            <div className="filters-group-wrap text-center">
              <div className="filters-group">
                <div className="filter-options flex list-none flex-wrap justify-center gap-4">
                  <Link
                    to=""
                    className={`${category === "all" ? "active" : ""}`}
                    onClick={() => filterImages("all")}
                  >
                    All
                  </Link>
                  <Link
                    to=""
                    className={`${category === "Web-Design" ? "active" : ""}`}
                    onClick={() => filterImages("Web-Design")}
                  >
                    Web Design
                  </Link>
                  <Link
                    to=""
                    className={`${
                      category === "Graphic-Design" ? "active" : ""
                    }`}
                    onClick={() => filterImages("Graphic-Design")}
                  >
                    Graphic Design
                  </Link>
                  <Link
                    to=""
                    className={`${category === "Illustrator" ? "active" : ""}`}
                    onClick={() => filterImages("Illustrator")}
                  >
                    Illustrator
                  </Link>
                  <Link
                    to=""
                    className={`${category === "Photography" ? "active" : ""}`}
                    onClick={() => filterImages("Photography")}
                  >
                    Photography
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="gallery-wrapper" className="flex items-center flex-wrap">
          {work.map((item, idx) => {
            return (
              <div className="picture-item w-full p-3 xl:w-1/2" key={idx}>
                <div className="group space-y-6 overflow-hidden rounded-lg bg-default-200 p-3 w-full">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      className="transition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105"
                      src={item.image}
                      alt="woman"
                      loading="lazy"
                      width={640}
                      height={805}
                    />
                    <div className="absolute inset-0">
                      <div className="h-full w-full rounded bg-black/60">
                        <div className="flex h-full items-end p-4">
                          <div className="overflow-hidden">
                            <p className="mb-2 font-medium text-white">
                              {item.date}
                            </p>
                            <h5 className="mb-2 text-3xl font-medium text-white">
                              {item.title}
                            </h5>
                            <p className="mb-8 truncate whitespace-nowrap text-base text-white/80 md:whitespace-normal">
                              {item.description}
                            </p>
                            <Link
                              to=""
                              className="group text-lg font-medium text-white"
                            >
                              Read More
                              <LuMoveRight className="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
