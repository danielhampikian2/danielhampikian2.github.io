import { LuComponent, LuLayers, LuLayoutGrid, LuMoveRight } from "react-icons/lu"
import { Link } from "react-router-dom"

const Features = () => {
  return (
    <section id="features" className="lg:py-20 py-10">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Features Services</span>
            <h2 className="text-4xl font-medium capitalize text-default-950 my-4">Features</h2>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center rounded-md overflow-hidden border border-default-200">
          <div className="group border-default-200">
            <div className="sm:p-10 p-8">
              <span>
                <LuComponent  className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="text-2xl font-medium text-default-950 mb-4 mt-8">Developer</h2>
              <p className="text-base text-default-600 mb-6">Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design</p>
              <Link to="" className=" text-lg font-medium text-default-950">Read More
                <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
          </div>
          <div className="group xl:border-s border-default-200">
            <div className="sm:p-10 p-8">
              <span>
                <LuLayers  className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="text-2xl font-medium text-default-950 mb-4 mt-8">Digital Product Design</h2>
              <p className="text-base text-default-600 mb-6">Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design</p>
              <Link to="" className=" text-lg font-medium text-default-950">Read More
                <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
          </div>
          <div className="group md:border-s border-default-200">
            <div className="sm:p-10 p-8">
              <span>
                <LuLayoutGrid className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="text-2xl font-medium text-default-950 mb-4 mt-8">Branding &amp; Design</h2>
              <p className="text-base text-default-600 mb-6">Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design</p>
              <Link to="" className=" text-lg font-medium text-default-950">Read More
                <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features