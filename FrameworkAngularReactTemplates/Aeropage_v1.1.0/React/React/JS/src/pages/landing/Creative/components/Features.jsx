import {
  LuComponent,
  LuFigma,
  LuLayers,
  LuLayoutGrid,
  LuMonitor,
  LuMoveRight,
  LuPaintbrush,
} from "react-icons/lu";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section id="features" className="py-10 lg:py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
              Featureo Features
            </span>
            <h2 className="text-4xl font-medium capitalize text-default-950 mt-4">
              Our Features
            </h2>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center rounded-md overflow-hidden border border-default-200">
          <div className="group border-b border-default-200 h-full">
            <div className="sm:p-10 p-8">
              <span>
                <LuComponent className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">
                Developer
              </h2>
              <p className="text-base mb-6">
                Lorem ipsum dummy text are usually use in these section. Lorem
                ipsum dummy text are used in this design
              </p>
              <Link to="" className="text-default-950 text-lg">
                Read More
                <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
          </div>
          <div className="group border-b md:border-s border-default-200 h-full">
            <div className="sm:p-10 p-8">
              <span>
                <LuMonitor className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">
                Web Design
              </h2>
              <p className="text-base  mb-6">
                {" "}
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium.
              </p>
              <Link to="" className="text-default-950 text-lg">
                Read More
                <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
          </div>
          <div className="group border-b xl:border-s border-default-200 h-full">
            <div className="sm:p-10 p-8">
              <span>
                <LuLayers className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">
                Digital Product Design
              </h2>
              <p className="text-base  mb-6">
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus.
              </p>
              <Link to="" className="text-default-950 text-lg">
                Read More
                <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
          </div>
          <div className="group border-b border-s xl:border-0 border-default-200 h-full">
            <div className="sm:p-10 p-8">
              <span>
                <LuLayoutGrid className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">
                Branding &amp; Design
              </h2>
              <p className="text-base  mb-6">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere Curae; In ac dui quis mi consectetuer lacinia.
              </p>
              <Link to="" className="text-default-950 text-lg">
                Read More
                <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
          </div>
          <div className="group border-b xl:border-s md:border-b-0 border-default-200 h-full">
            <div className="sm:p-10 p-8">
              <span>
                <LuFigma className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">
                Ui/Ux &amp; Design
              </h2>
              <p className="text-base  mb-6">
                Maecenas malesuada. Praesent congue erat at massa. Sed cursus
                turpis vitae tortor. Donec posuere vulputate arcu.
              </p>
              <Link to="" className="text-default-950 text-lg">
                Read More
                <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
          </div>
          <div className="group md:border-s border-default-200 h-full">
            <div className="sm:p-10 p-8">
              <span>
                <LuPaintbrush className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="text-2xl text-default-950 font-medium mb-4 mt-8">
                Graphic Design
              </h2>
              <p className="text-base  mb-6">
                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                nunc, eu sollicitudin urna dolor sagittis lacus.
              </p>
              <Link to="" className="text-default-950 text-lg">
                Read More
                <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
